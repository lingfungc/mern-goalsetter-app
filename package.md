Setup:
npm init
git init

Create:
.gitignore
.emv

Backend:
npm i express dotenv mongoose colors
npm i -D nodemon

Update package.json:
"scripts": {
  "start": "node backend/server.js",
  "server": "nodemon backend/server.js"
},

Terminal:
npm run server
