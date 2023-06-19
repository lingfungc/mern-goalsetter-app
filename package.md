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
npm i jsonwebtoken

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

What is JWT?
Create user model
Add user to goal model
User routes and controller functions
Register user
Hash password
Authenticate user
Generate JWT
Auth middleware
Protecting routes and getUser()
Protect goal routes
Get only users goals
Set a user goal
Update a user goal
Delete user goal
