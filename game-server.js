var express = require('express'),
    app = express(),
    server = require('http').createServer(app),
    io = require('socket.io').listen(server);

server.listen(3000);

app.get('/',function(req, res){
    res.sendFile(__dirname+'/client/index.html');
});

app.use(express.static(__dirname+'/client'));
//http://stackoverflow.com/questions/28037145/node-js-why-is-the-page-cannot-load-css-and-javascript-file

var listPlayers = new Array();
io.sockets.on('connection', function(socket){
     
    socket.on('new player', function(data){
        var playerId = socket["id"];
        console.log('new player:'+playerId);
        var emitData = {"id":playerId,"x":data["x"],"y":data["y"],"frame":data["frame"]};
        io.sockets.emit('player id',emitData);
        
        io.sockets.emit('list players',{"for id":playerId,"list":listPlayers});
        addNewPlayer(emitData);
    });
    
    socket.on('send pos', function(data){
        //console.log('update pos- id:'+data["id"]+" x:"+data["x"]+" y:"+data["y"]);
        io.sockets.emit('update pos',data);
        updatePosData(data);
    });
    
    //disconnect
    socket.on('disconnect', function(){
        console.log('disconect... who? '+socket["id"]);
        io.sockets.emit('who leave',socket["id"]);
        clientDisconnect(socket["id"]);
    });
});


function addNewPlayer(newdata){
    var contain = false;
    for(var i=0;i<listPlayers.length;i++){
        if(listPlayers[i]["id"]==newdata["id"]){
            contain = true;
            break;
        }
    }
    if(!contain){
        listPlayers.push(newdata);
    }
}

function updatePosData(posdata){
    for(var i=0;i<listPlayers.length;i++){
        if(listPlayers[i]["id"]==posdata["id"]){
            listPlayers[i]["x"] = posdata["x"];
            listPlayers[i]["y"] = posdata["y"];
            listPlayers[i]["frame"] = posdata["frame"];
            break;
        }
    }
}

function clientDisconnect(id){
    var index;
    for(var i=0;i<listPlayers.length;i++){
        if(listPlayers[i]["id"]==id){
            index = i;
            break;
        }
    }
    
    if(index){
        listPlayers.splice(index,1);
    }
}