require('dotenv').config();

const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');

// Tell Express to use JSON
app.use(express.json());

const posts = [
    {
        username: 'John',
        title: 'Post 1'
    },
    {
        username: 'Marie',
        title: 'Post 2'
    }
];

app.get('/posts', (req, res) => {
    res.json(posts);
});

app.post('/login', (req,res)=> {
    // Authenticate here!

    const username = req.body.username;
    const user = {"name": username}
    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
    res.json({"accessToken": accessToken});
})

console.log('REFRESH_TOKEN_SECRET:',process.env.REFRESH_TOKEN_SECRET);

app.listen(3001);