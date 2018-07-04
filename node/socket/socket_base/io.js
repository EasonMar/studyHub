// var app = require('express')();
// var http = require('http').Server(app);

// app.get('/', function(req, res) {
//     res.sendFile(__dirname + '/io.html');
// });

// http.listen(3000, function() {
//     console.log('listening on *:3000');
// });


var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/io.html');
});

// 1
// io.on('connection', function(socket) {
//     console.log('a user connected');
// });

// 2
// io.on('connection', function(socket) {
//     console.log('a user connected');
//     socket.on('disconnect', function() {
//         console.log('user disconnected');
//     });
// });

// 3
io.on('connection', function(socket) {
    console.log('a user connected');
    socket.on('disconnect', function() {
        console.log('user disconnected');
    });

    // 1
    // socket.on('chat message', function(msg) {
    //     console.log('message: ' + msg);
    // });
    
    // 2
    socket.on('chat message', function(msg) {
        console.log('message: ' + msg);
        io.emit('chat message', msg);
	});
});

http.listen(3000, function() {
    console.log('listening on *:3000');
});