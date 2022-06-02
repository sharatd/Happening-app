# Xenah Dev Portal

An internal web portal for managing developers and assigning them to projects.

To make yourself an admin client side, add your email to the client/utils/adminEmails.js file

To make sure you receive emails when a developer applies, add yourself to the adminEmails object in server/src/utils.js

## Frontend Deployment
To deploy to the frontend VIA Firebase, we used these steps: https://medium.com/swlh/how-to-deploy-a-react-app-with-firebase-hosting-98063c5bf425

Authentication was also handled with Firebase following this guide: https://courses.cs.northwestern.edu/394/guides/intro-react.php#add-authentication

To change the Firebase config, update the client/firebaserc as well as client/src/utils/firebase.js

## Backend Deployment
The frontend fetches data from the BASE_URL in client/utils/api.js (You will need to change this to point to your own backend url after hosting it. We used Heroku to host our database. If you user heroku, add PROJECT_PATH=server to your environment vars on Heroku)

We used MongoDB for the backend. If you would like to continue using MongoDB you'll need to extract the following environment variables from MongoDB Atlas after creating your database: DB_HOST, DB_USERNAME, DB_PASSWORD, and DB_NAME

## Setting Up

Inside both the `client` and `server` folders, run
```
npm install
```

## Running the app

To run either the client or server locally, run the following command from within the associated folder
```
npm start
```

Note that to point your local client to your local server you'll need to change the `BASE_URL` variable in the `client/src/utils/api.js` file.

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
