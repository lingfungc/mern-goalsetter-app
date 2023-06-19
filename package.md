Setup:
npm init
git init

Create:
.gitignore
.emv

Backend:
npm i express dotenv mongoose colors
npm i mongodb
npm i -D nodemon
npm i express-async-handler
npm i bcryptjs

Update package.json:
"scripts": {
  "start": "node backend/server.js",
  "server": "nodemon backend/server.js"
},

Terminal:
npm run server

Steps:
Initialize git and commit
Basic express server
Environment variables
First route
Routes file
Creating a controller
Connecting controller functions
Accepting body data
Error and exception handling
Express async handler
Create MondoDB database
Connect with Mongoose
Create a model
Get goals
Create goal
Update goal
Delete goal
