# ui-todo - Tutorial

Welcome to yet another tutorial on building your own TODO app! Here are what we will be going through in this tutorial. Please feel free to submit a PR if there is anything to be fixed, or if you have ideas on adding new challenges. Or if you want to help us style this app better, we would very much appreciate a PR too!

1. [Prerequisites](#1-prerequisites)
2. [Setting up](#2-setting-up)
3. [Frontend Development](#3-frontend-development)
4. [Backend Development](#4-backend-development)
5. [Testing](#5-testing)
6. [Deployment](#6-deployment)

## 1. Prerequisites

Make sure you have the following accounts:

- [Firebase](https://firebase.google.com/)
- [Github](https://github.com/)

Make sure you have the following installed in your computer:

- Git ([instructions here](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git))
- NPM ([instructions here](https://www.npmjs.com/get-npm))
- Your preferred IDE/editor (if not, you may try [VSCode](https://code.visualstudio.com/) out)

## 2. Setting up

1. Fork this repo
2. Clone your forked repo to your preferred directory in your computer
3. Open the repo in your IDE/editor

## 3. Frontend Development

Let's first make sure our setup was correct. Follow the steps below to run your app in development mode.

1. Install dependencies
   ```
   npm ci
   ```
2. Run app in development mode
   ```
   npm run start
   ```
   - Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
   - The page will reload if you make edits.<br />
   - You will also see any lint errors in the console.

### Challenges

- Add delete functionality for each todo task
  - On click of the delete button, how can we update the context?
- (Advanced) Add update functionality for each todo task
  - How do we toggle between "update mode" (task is editable) and "read mode" (task is not editable)?
  - On click of "update" after editing the task, how can we update the context?
  - How can we prevent user from deleting a todo task while updating?

## 4. Serverless "Backend" Development

At this point, you should have a functioning app which can add, delete, and (hopefully) update todo list items.

But what happens when we refresh the page? Or when we restart the local server? The todo items are gone! To save our todo items, we are going to attach our app to a "backend".

1. Set up Firebase Cloud Firestore
   1. Go to [Firebase Console](https://console.firebase.google.com/) > Add a project
   2. Create a Cloud Firestore database in test mode
   3. Start a collection with ID `todo-list`
   4. Add the first document
      ```
      Document ID: Auto-ID
      Field: description
      Value: <your todo item description>
      ```
   5. Add more todo items as desired
2. Link app to firebase
   1. Go to Project Settings > Add a web app
   2. Copy the config from the **Firebase SDK Snippet** into the **.env** file at the root of this project
   3. Uncomment the import in `src/index.js`
      ```
      import './config/firebaseConfig';
      ```
3. To retrieve your todo items from Firestore, uncomment the `useEffect` code in `src/components/TodoList.jsx`. Be sure to add your imports!
4. Done! Whenever you refresh your page now, the app will pull the latest todos from Firestore.

### Challenges

- Add API calls for `add`, `delete`, and `update` methods
  - When should we call the methods?
  - Should we wait for the calls to complete?
  - What happens if there is an error?

## 5. Testing

Congrats, we now have a working todo application! But wait... is it really working? Let's add tests to make sure it's functioning as expected!

### Unit tests

Unit tests are used to validate that a component or unit of our todo application, such as action and reducer, is working as expected.

```
npm run test
```

#### Challenges

- Write unit tests for the utility files that you just added for delete and update
  - What kind of scenarios should we test for?
  - What result do we expect from the tests?

### E2E tests

End-to-end tests simulate scenarios from a real user's perspective and validate if the app is working as expected from start to end. Theses tests can highlight missing/ incorrect functionality and UI errors.

```
npm run start           # if you have not already done so
npm run cypress:open
```

An interactive window will appear. Click on the test you want to run.

#### Challenges

- Write e2e tests for the utility files that you just added for delete and update
  - What kind of scenarios should we test for?
  - What result do we expect from the tests?
- Clear all todo tasks before running the tests
  - Can we do this via cypress?
- (Advanced) Create a test db for your tests so you won't interfere with production data

## 6. Deployment

### Manual Deployment

Run the following and see your changes go live on your Github page. The URL to your Github page should be: _https://\<your-github-username\>.github.io/ui-todo-tutorial_

```
npm run deploy
```

### Automatic Deployment

**Step 1**: Go to the _Actions_ tab in the project page of your forked repository and enable workflows to run

**Step 2**: Create a new personal access code to allow Github actions to deploy on our behalf

- Go to personal profile setting and on the left navbar, click on _Developer settings_
- Again on the left navbar, click on _Personal access tokens_
- On the top, click on _Generate new token_
- Under _Note_, fill it up with the purpose of the token (e.g. 'deploy-access' but it can be anything) and under _Select scopes_, tick the checkbox _public_repo_ and finally click _Generate token_
- Save the access token somewhere

![create personl access token](assets/images/create-personal-access-token.png)

**Step 3**: Add access token to project’s environment variables

- Go to project setting and on the left navbar, click on _Secrets_
- On the top, click on _New secret_
- Under _Name_, enter ‘DEPLOY_ACCESS_TOKEN’ and under _Value_, key in the access token you have saved earlier

![add personal access token as secret](assets/images/add-personal-access-token-as-secret.png)

**Step 4**: You are done! :tada: You can now commit and see your changes automatically applied on your Github page

### Challenges

- Add a stage for running unit tests
- Add a stage for running cypress tests (hint: you can use cypress-io/github-action@v1)
- (Advanced) Add a stage to generate cypress videos and screenshots as artifacts
