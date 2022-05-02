# Xenah Dev Portal

An internal web portal for managing developers and assigning them to projects.

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
