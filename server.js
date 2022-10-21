const express = require('express');
const path = require('path');

const httpsPort = 443;

const app = express();

app.use(express.static(path.joiny(__dirname, 'public')));

app.get('/', function (req, res) {

    res.sendFile(path.join(__dirname, 'public/index.html'))
})

app.listen(httpsport, function () {
    console.log(`Listening on port ${httpsPort}!`)

})

