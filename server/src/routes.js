require("dotenv").config();
const express = require("express");
const router = express.Router();
const { sendAdminEmail } = require('./utils');

const Developer = require("./schema/Developer.js");
const Project = require("./schema/Project.js");

// Define all API routes

router.route("/").get((req, res) => {
  res.status(200).send("<h1>Xenah-Dev-Portal API</h1>");
});

//
// +----------------+
// |    PROJECTS    |
// +----------------+
//

router
  .route("/projects")
  .get((req, res) => {
    Project.find({}).then(async (projectEntries) => {
      const projects = await Promise.all(
        projectEntries.map(async (project) => {
          const developers = await Developer.find({
            _id: { $in: project.developers },
          });
          return { ...project._doc, developers: developers };
        })
      );
      res.status(200).send({ projects: projects });
    });
  })
  .post((req, res) => {
    const { body } = req;

    const [isValid, err] = Project.validate(body);
    if (!isValid) {
      res.status(404).send({ error: err });
      return;
    }

    const newProject = new Project(body);
    newProject
      .save()
      .then((savedProject) => {
        res.status(204).send();
        return;
      })
      .catch((err) => {
        res
          .status(500)
          .send({ message: "Could not create project", error: err });
        return;
      });
  });

router
  .route("/projects/:pid")
  .delete((req, res) => {
    const { pid } = req.params;

    Project.findByIdAndDelete(pid).then((success) => {
      res.status(204).send();
    });
  })
  .post((req, res) => {
    const { pid } = req.params;
    const { body } = req;
    Project.findById(pid)
      .then((data) => {
        data.title = body.title;
        data.description = body.description;
        data.technologies = body.technologies;
        data.topics = body.topics;
        data.developers = body.developers;
        data.save();
      })
      .then((success) => {
        res.status(204).send();
      });
  });

router
  .route("/projects/:pid/modifyDevelopers/:did")
  .post((req, res) => {
    const { pid, did } = req.params;
    Project.findById(pid)
      .then((data) => {
        if (
          !data.developers.some((developer) => developer.toString() === did)
        ) {
          data.developers = [...data.developers, did];
        }
        data.save();
      })
      .then((success) => {
        res.status(204).send();
      });
  })
  .delete((req, res) => {
    const { pid, did } = req.params;
    Project.findById(pid)
      .then((data) => {
        if (data.developers.some((developer) => developer.toString() === did)) {
          data.developers = data.developers.filter(
            (objectId) => objectId.toString() != did
          );
        }
        data.save();
      })
      .then((success) => {
        res.status(200).send();
      });
  });

const transporter = createTransport({})

router
  .route("/projects/:pid/modifyApplied/:did")
  .patch((req, res) => {
    const { pid, did } = req.params;
    Project.findById(pid)
      .then((data) => {
        if (
          !data.applied.some((applicant) => applicant.toString() === did)
        ) {
          data.applied = [...data.applied, did];
        }
        data.save();
      })
      .then((success) => {
        res.status(204).send();
      });
    
    sendAdminEmail('Project Application', 'Someone applied', '<h1>Application</h1>');
  })

//
// +------------------+
// |    DEVELOPERS    |
// +------------------+
//

router
  .route("/developers")
  .get((req, res) => {
    Developer.find({}).then((data) => {
      res.status(200).send({ developers: data });
    });
  })
  .post((req, res) => {
    const { body } = req;

    const [isValid, err] = Developer.validate(body);
    if (!isValid) {
      res.status(404).send({ error: err });
      return;
    }

    const newDeveloper = new Developer(body);
    newDeveloper
      .save()
      .then((savedDeveloper) => {
        res.status(204).send();
        return;
      })
      .catch((err) => {
        res
          .status(500)
          .send({ message: "Could not create developer", error: err });
        return;
      });
  });

router
  .route("/developers/:did/")
  .delete((req, res) => {
    const { did } = req.params;
    Developer.findByIdAndDelete(did).then((success) => {
      res.status(204).send();
    });
  })
  .patch((req, res) => {
    const { did } = req.params;
    const { body } = req;
    Developer.findById(did)
      .then((data) => {
        data.name = body.name;
        data.technologies = body.technologies;
        data.projects = body.projects;
        data.resume = body.resume;
        data.availability = body.availability;
        data.topLanguage = body.topLanguage;
        data.timeCommitment = body.timeCommitment;
        data.preferredTopics = body.preferredTopics;
        data.preferredLanguages = body.preferredLanguages;
        data.school = body.school;
        data.level = body.level;
        data.save();
      })
      .then((success) => {
        res.status(204).send();
      });
  });

router.route("/developers/adminRating/:did/:stat/:rating").patch((req, res) => {
  const { did, stat, rating } = req.params;
  const newInfo =
    stat === "work" ? { adminWorkRating: rating } : { adminCommRating: rating };
  Developer.findByIdAndUpdate(did, newInfo).then((success) => {
    res.status(204).send();
  });
});

router.route("/developers/adminNotes/:did").patch((req, res) => {
  const { body } = req;
  const { did } = req.params;

  Developer.findByIdAndUpdate(did, { adminNotes: body.notes }).then(
    (success) => {
      res.status(204).send();
    }
  );
});

//
// +----------------+
// |    CORE API    |
// +----------------+
//

router.route("/developerLogin").post((req, res) => {
  const { email } = req.body;

  Developer.findOne({ email }).then((developer) => {
    // developer is null if account hasn't been created yet
    res.status(200).send({ developer });
  });
});

module.exports = router;
