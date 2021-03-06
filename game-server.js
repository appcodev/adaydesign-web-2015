/*
Ad@yDes!GN website 2015
Server script

@author Chalerchon Samana (@adaydesign)
@since 2015
@link www.adayd3sign.com

@version 1.1
- Game server #fix bug : disconnect
@version 1.0
- Game server : new connection, move, message, disconnect
*/

var express = require('express'),
    app = express(),
    server = require('http').createServer(app),
    io = require('socket.io').listen(server);

server.listen(3000, function(){
    console.log('>> server start listening...');
});

app.get('/',function(req, res){
    res.sendFile(__dirname+'/client/index.html');
});

app.use(express.static(__dirname+'/client'));
//http://stackoverflow.com/questions/28037145/node-js-why-is-the-page-cannot-load-css-and-javascript-file

var listPlayers = new Array();
io.sockets.on('connection', function(socket){
     
    socket.on('new player', function(data){
        var playerId = socket["id"];
        
        var emitData = {"id":playerId,"x":data["x"],"y":data["y"],"frame":data["frame"]};
        io.sockets.emit('player id',emitData);
        
        io.sockets.emit('list players',{"for id":playerId,"list":listPlayers});
        addNewPlayer(emitData);
        console.log('[+]: '+new Date(Date.now()).toDateString()+' New player:'+playerId+" | total players:"+listPlayers.length);
    });
    
    socket.on('send pos', function(data){
        //console.log('update pos- id:'+data["id"]+" x:"+data["x"]+" y:"+data["y"]);
        io.sockets.emit('update pos',data);
        updatePosData(data);
    });
    
    socket.on('send msg', function(data){
        io.sockets.emit('update msg',data);
    });
    
    //disconnect
    socket.on('disconnect', function(){
        io.sockets.emit('who leave',socket["id"]);
        clientDisconnect(socket["id"]);
        console.log('[-]: '+new Date(Date.now()).toDateString()+' Disconected player: '+socket["id"]+" | total:"+listPlayers.length);
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
    var dl_index = -1;
    
    for(var i=0;i<listPlayers.length;i++){
        if(listPlayers[i]["id"]==id){
            dl_index = i;
            break;
        }
    }
    
    if(dl_index >= 0){
        listPlayers.splice(dl_index,1);    
    }
}