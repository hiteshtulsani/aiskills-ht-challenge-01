// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const comments = require('./comments.json');
const fs = require('fs');

app.use(bodyParser.json());

app.get('/comments', (req, res) => {
    res.send(comments);
});

app.post('/comments', (req, res) => {
    const newComment = req.body;
    comments.push(newComment);
    fs.writeFile('./comments.json', JSON.stringify(comments), (err) => {
        if (err) {
            console.log(err);
            res.status(500).send('Unable to save comment');
        } else {
            res.status(200).send('Comment saved');
        }
    });
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

