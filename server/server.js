const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, "..", "public"); 
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));//serves up all assets from that directory

app.get('*', (req, res) => { //this just means if any (*) page request(res) the user has isnt in public folder then respond(res) with index.html
    res.sendFile(path.join(publicPath, 'index.html'));
});

//below we are serving up to a server
app.listen(port, ()=>{ //listening on a specific port, 3000 is on all OS
console.log('Server is up') //second argument is just passing in a callback function/message
});

//may want to take courses on express and node, and heroku and JS vanilla