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

app.post('/postarticles', (req, res) => {
  sessions = req.session;
  const date = new Date();
  const article = {
    'date': date.getDate(),
    'title': req.body.title,
    'text': req.body.text
  }
  const articlesList = JSON.parse(fs.readFileSync(`articles/${date.toLocaleString('en', {month: 'long' })}.json`, "utf8"));
  articlesList.push(article);
  console.log(articlesList);
  fs.writeFile(`articles/${date.toLocaleString('en', {month: 'long' })}.json`, JSON.stringify(articlesList) + ',\n', (error) => {
    if (error) throw error;

    console.log('We are append the file');
    res.send('success');
  });
})

app.post('/getArticle', (req, res) => {
  sessions = req.session;
  const date = new Date(req.body.date);

  fs.readFile(`articles/${date.toLocaleString('en', {month: 'long' })}.json`, (error, data) => {
    if (error) throw error;
    const articles = JSON.parse(data);
    res.send({
      answer: 'success',
      article: articles[date.getDate()]
    });
  });
})
