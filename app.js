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


app.post('/postarticles', function (req, res) {
  sessions = req.session;
  const article = {
    'date': new Date(),
    'title': req.body.title,
    'text': req.body.text
  }

  fs.appendFile('titles.json', JSON.stringify(article) + ',\n', (error) => {
    if (error) throw error;

    console.log('We are append the file');
    res.send('success');
  });

})