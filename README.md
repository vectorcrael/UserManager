Instructions for setting up UserManager Practice Project
========================================================

These instructions assume familiarity with Git and GitHub. The also assume basic skills like installing programs and opening the terminal.

## Part I: Setting up your local machine
These are the minimum prerequisits and tools that you will need to run this program. Download and install from the respective websites.
* Install [NodeJS](https://nodejs.org/en/download/)
* Install [Visual Studio Code](https://code.visualstudio.com/) or any code editor of your choice
* Install [GIT](https://git-scm.com/downloads)

## Part II: Clone the repository to your local machine
Log into the GitHub website and do the following.
* Fork this repo to your own account
* Clone the forked repo to your local machine using this command: `git clone http://github.com/<account-name>/User-Manager-Application.git`, replacing `<account-name>` with your GitHub username.
* Alternatively download the source code as a zip file and unpack it in your local machine


## Part III: Downloading Additonal Required Applications
Open the terminal or command prompt on your machine and run the following command to install Angular CLI.
* Run 	`npm install -g @angular/cli`
If you are having trouble check that NodeJS is installed using the teminal command:
* Run 	`node --version`

## Part IV: Launching the database server
The User Manager Angular Application uses json-server to access data. 
```There are two files responsible for the mockup database server. The first which is the actual database is a json file. 
`The second is js file that has methods to populate the database with sample information using a faker. 
`We will use an application called jason-server to mimick a real database using the json file. The two filse are: 
1. server\database.json 
2. server\generateData.js 
```

To get the data server running 
* Run 	`npm run server`
  
It will show that it is running on http://localhost:3000/users. 
*You can type this into a browser to verify - it shoud give you some data.

To seed information in the database run the following command (optional)
* Run	`npm run generate`

## Part V: Launching the application
All the dependancies that the application needs to run are noted in a file calle package.json. 
```We need only run one command that will allow that package manager to download all the dependancies.
Open the teminal and navagate (cd) to the folder that has the angular source code. 
Run the following command to update to download all the dependancies into the node_modules folder.```
* Run 	`npm install`

To launch the application
* Run 	`ng serve --open`

## Troubleshooting
```Should the command to install and run the applicaiton fail try a few of these troubleshooting commands. 
Do not run all of them at once, try one at a time. 
Preferebly from an elevatied teminal(run as administrator).```
If you are trying to run the application a second time and there are some missing depandancies use the following commands to download them
* Run 	`npm update`
* Run 	`npm update <packageName>`
If you want to rebuild everything in the application use the following command
* Run 	`npm rebuild`
If the install keeps refusing try to force it with the following
* Run 	`npm install --force`
When all the above fail t
* Run 	`npm cache clean --force` 

Login Details And Generation of JWT tokens
========================================================
The application is using a hard coded JSON Web Token for authentication. To generate and use a token: 
*Goto [JWT](https://jwt.io/)and change the payload details, include a property `admin`: `true` in order to make the user an administrator.
*Replace this token in the authentication service auth.service.ts where the web token is hardcoded - localStorage.setItem('token',... Line 41

The login details used are from the database.json file
*You can manually go and create a user in the file or
*For Administrator Use Email: roy@domain.com Password: ror12II
*For Regular-User Use Email: Danny@doYahoo.com Password: ror12II

`Login as an administrator to be able to edit users - create, update and delete.`
`Login as an regular user to be able to view and create only - no update and delete.`




Further Instructions for using Angular
========================================================

## UserManager

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
