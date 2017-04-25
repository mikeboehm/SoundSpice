var applescript = require('applescript');

// If you use a different shortcut in BeardedSpice, you'll need to modify the AppleScript
var script = 'tell application "System Events" to keystroke "b" using command down & shift down & option down & control down';

var express = require('express');
var app = express();

app.get('/', function (req, res) {
    var timestamp = Math.round(new Date().getTime()/1000).toString();

    res.send('<a href="/toggle/?timestamp=' + timestamp + '">Play/pause again</a><pre>/toggle</pre>');
});

// Using a timestamp to make sure the request is fresh
// I had an issue where my browser was trying to fetch the thumbnail and toggling the music
app.get('/toggle/', function (req, res) {
    var now = Math.round(new Date().getTime()/1000).toString();

    var timestamp = req.query.timestamp || 1;
    diff = now - timestamp;

    if(diff <= 100) {
        console.log('Toggle!');
        applescript.execString(script, function(err) {});
    } else {
      console.log('Toggle diff too large ' + diff);
      console.log('IP: ' + req.ip);
    }

    res.redirect('/');
});

// Use this as an API, rather than in a browser
app.get('/flic', function (req, res) {
    console.log('Force Toggle!');
    applescript.execString(script, function(err) {});
    res.redirect('/');
});

app.listen(3000, function () {
    console.log('SoundSpice app listening on port 3000!');
    console.log('GET /toggle to play/pause music');
});
