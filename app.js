const express = require('express');
const fs = require('fs');
const bodyParser = require("body-parser");
const cors = require('cors');
const session = require('express-session');

const app = express();

let sessions;

app.use(cors());
app.use(session({secret: 'my-secret'}));
app.use(bodyParser.json());

app.set("port", process.env.PORT || 3001);

// Express only serves static assets in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.listen(app.get("port"), () => {
  console.log(`Find the server at: http://localhost:${app.get("port")}/`); // eslint-disable-line no-console
});

const db = require('./server/dbConnection');

app.post('/signin', function (req, res) {
  sessions = req.session;
  const login = req.body.login;
  const password = req.body.password;

  db.checkUserData(login, password, () => {sessions.username = login; res.send('success')}, () => {res.send('Failure')});
})