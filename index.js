var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var useragent = require('express-useragent')

var app = express();
app.use(cors());
app.use(express.static('public'));
app.use(useragent.express());

app.get('/api/whoami', function(req, res) {
    console.log(req.ip)

    res.json({
        ip: req.ip,
        language: req.acceptsLanguages()[0],
        softawre: "OS: " + req.useragent.os + ", Browser: " + req.useragent.browser
    });
});

app.listen(process.env.PORT || 3000, function() {
    console.log('Woking')
})