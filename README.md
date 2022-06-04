# Xenah Dev Portal

An internal web portal for managing developers and assigning them to projects.

## Setting Up

Inside both the `client` and `server` folders, run
```
npm install
```

### Database 

We used [MongoDB](https://www.mongodb.com) for the database. To connect to a MongoDB cluster, you will need to specify the following variables in `server/.env`

```
DB_HOST=       # URL of MongoDB cluster (ex: cluster0.abcde.mongodb.net)
DB_USERNAME=   # MongoDB Database User
DB_PASSWORD=   # MongoDB Database User password
DB_NAME=       # name of the collection within the MongoDB cluster
```

### Hosting

#### Client
To deploy to the frontend via Firebase, we followed these [steps](https://medium.com/swlh/how-to-deploy-a-react-app-with-firebase-hosting-98063c5bf425).

Authentication was also handled with Firebase following this [guide](https://courses.cs.northwestern.edu/394/guides/intro-react.php#add-authentication). 

To change the Firebase config, update the `client/.firebaserc` as well as `client/src/utils/firebase.js`.

#### API

We hosted the Node.js API using [Heroku](https://www.heroku.com), but you can use any standard hosting platform. The client fetches from the `BASE_URL` specified in `client/utils/environment.js`, so this will need to be changed depending on where the API is hosted.

If you decide to continue with Heroku, you'll need to add this [buildpack](https://github.com/timanovsky/subdir-heroku-buildpack) to your configuration and set `PROJECT_PATH=server` in the Heroku environment variables, since the code for the API is not at the root of the git repository.

## Running the app

To run either the client or server locally, run the following command from within the associated folder
```
npm start
```

Note that to point your local client to your local server you'll need to change the `BASE_URL` in `client/src/utils/environment.js` file.

## Deploying the app

### Client

We automatically deploy through GitHub Actions on any push or merge into the `main` branch. If you want to manually deploy from your system, run the following command
```
# From within the client folder
npm run deploy
```

### Server

Use `git remote --v` to make sure you have the `heroku` remote set up. If not, run the following command
```
git remote add heroku https://git.heroku.com/xenah-dev-portal.git
```

Once the `heroku` remote is set up, you can run the following to deploy the server code to production
```
git push heroku HEAD:master
```

## Notes

### Admin Credentials

To make yourself an admin client side, add your email to the `ADMIN_EMAILS` in `client/src/utils/environment.js` file

To make sure you receive emails when a developer applies, add yourself to the `adminEmails` array in `server/src/utils.js`

### Email

Currently, we use `nodemailer` and a Gmail account for sending out emails from the API. If you want to continue using a Gmail account, you will need to enable [less secure apps](https://support.google.com/accounts/answer/6010255?hl=en) through the account settings so that `nodemailer` is able to log in.

### GitHub Actions

Currently, the client and server are automatically updated using the GitHub actions in the `.github` directory. If you want to continue using these, you will need to set the following in your GitHub actions secrets for the repository:

```
FIREBASE_SERVICE_ACCOUNT_XENAH_DEV_PORTAL=    # Google service account credentials object
HEROKU_API_KEY=                               # API key for Heroku deployment account
HEROKU_EMAIL=                                 # Email associated with HEROKU_API_KEY
```
