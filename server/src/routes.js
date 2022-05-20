require("dotenv").config();
const express = require("express");
const router = express.Router();

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

router.route("/projects")
  .get((req, res) => {
    Project.find({}).then(async (projectEntries) => {
      const projects = await Promise.all(projectEntries.map(async (project) => {
        const developers = await Project.find({ _id: { $in: project.developers }});
        return {...project._doc, developers: developers}
      }));
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
    newProject.save()
      .then(savedProject => {
        res.status(204).send();
        return;
      })
      .catch(err => {
        res.status(500).send({ message: "Could not create project", error: err });
        return;
      });
  });

router.route("/projects/:pid")
  .delete((req, res) => {
    const { pid } = req.params;
    Project.findByIdAndDelete(pid)
      .then((success) => {
        res.status(204).send();
      });
  });

router.route("/projects/:pid/addDeveloper/:did")
  .post((req, res) => {
    const { pid, did } = req.params;
    Project.findById(pid).then((data) => {
      if (data.developers.some(developer => (developer.id === did))) {
        Project.updateOne({ id: pid }, {$push: { developers : [did] }})
      }
    })
  });



//
// +------------------+
// |    DEVELOPERS    |
// +------------------+
//

router.route("/developers")
  .get((req, res) => {
    Developer.find({}).then((data) => {
      res.status(200).send({ developers: data })
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
    newDeveloper.save()
      .then(savedDeveloper => {
        res.status(204).send();
        return;
      })
      .catch(err => {
        res.status(500).send({ message: "Could not create developer", error: err });
        return;
      });
  });

router.route('/developers/:did/')
  .delete((req, res) => {
    const { did } = req.params;
    Developer.findByIdAndDelete(did)
      .then((success) => {
        res.status(204).send();
      });
  });


 router.route('/developers/adminRating/:did/:stat/:rating') 
  .patch((req, res) => {
    const { did, stat, rating } = req.params;
    const newInfo = stat === 'work' ? { adminWorkRating: rating } : { adminCommRating: rating };
    Developer.findByIdAndUpdate(did, newInfo)
    .then((success) => {
      res.status(204).send();
    });
  });


module.exports = router;
