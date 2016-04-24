var applescript = require('applescript');

// If you use a different shortcut in BeardedSpice, you'll need to modify the AppleScript
var script = 'tell application "System Events" to keystroke "b" using command down & shift down & option down & control down';

var express = require('express');
var app = express();

app.get('/', function (req, res) {
    console.log('Toggle!');
    applescript.execString(script, function(err) {});
    res.send('');
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
