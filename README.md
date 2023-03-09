## ⭐ Task Manager

### 🎬 Application details
The purpose of this project is to build a Task Manager Crud with tailwind and using Context. The technologies used are React, Typescript, Axios, Vite and Vitest with testing-library.
Here we can see a demo of how it works.

![Demo](/images/demo.gif?raw=true "Demo")


### Local execution with Docker
 The command will build the frontend project developed in React JS with Vite.
`docker-compose stop && docker-compose up --build -d --remove-orphans`

![Docker Services](/images/docker.png?raw=true "Docker Services")

This is the final result of the services that you should see if everything works as expected.

### Testing
To execute the tests locally, we need to install the libraries dependencies for the service with `npm i`. After that we can run the command:
`npm run test`

The tests are working with Vitest and Testing Library 

![tests](/images/testFront.png?raw=true "tests")
