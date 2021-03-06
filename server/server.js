var express = require('express');

var app = express();

app.use(express.static('server/public'));

app.get('/', function(request, response){
    response.sendFile(__dirname + '/public/views/index.html')
});

var server = app.listen(3000, function(){
    var port = server.address().port;
    console.log("We're open on port", port);
});