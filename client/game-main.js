enchant();

/*
Ad@yDes!GN website 2015
designed from idea RPG game concept 

@author Chalerchon Samana (@adaydesign)
@since 2015
@link www.adayd3sign.com

@version 1.2
- Ending scene
- Sound
@version 1.1
- Reduce resoures
- Objective Mission
@version 1.0
- Core RPG game
- Web description and timeline
- Map and traps
- Monster
- Check collision
- NPCs
- Items
- Teleport
- Board
*/
var version = "1.2";

/////////////////////////////////// DATA /////////////////////////////////////
//data
var monsterData = [
    //field, Forest Maze, Maze 2 field
    {"class":"Slime","data":[26,16,14,0]},
    {"class":"Slime","data":[58,14,38,0]},
    {"class":"Slime","data":[89,20,4,0]},
    {"class":"Slime","data":[92,24,-5,0]},
    {"class":"Slime","data":[115,28,20,0]},
    {"class":"Slime","data":[134,10,0,9]},
    {"class":"Slime","data":[139,23,-5,0]},
    {"class":"Slime","data":[157,21,-10,0]},
    {"class":"Slime","data":[169,47,8,0]},
    {"class":"Slime","data":[169,2,8,0]},
    //Stone Dungeon
    {"class":"Mage","data":[140,46,7,0]},
    {"class":"Mage","data":[135,45,-4,0]},
    {"class":"Mage","data":[129,43,-10,0]},
    {"class":"Mage","data":[113,46,0,-4]},
    {"class":"Mage","data":[103,42,0,4]},
    {"class":"Mage","data":[96,41,-3,0]},
    {"class":"Mage","data":[82,41,6,0]},
    {"class":"Slime","data":[104,37,-6,0]},
    {"class":"Slime","data":[92,37,5,0]},
    
    //Dungeon Maze 2
    //A
    {"class":"DarkKnight","data":[192,11,0,8]},
    {"class":"Mage","data":[181,16,0,5]},
    {"class":"DarkKnight","data":[182,23,7,0]},
    {"class":"DarkKnight","data":[177,5,0,10]},
    //B
    {"class":"Mage","data":[165,19,8,0]},
    {"class":"DarkKnight","data":[155,5,6,0]},
    {"class":"DarkKnight","data":[169,7,0,5]},
    {"class":"DarkKnight","data":[161,12,6,0]},
    {"class":"DarkKnight","data":[155,14,0,5]},
    //C
    {"class":"DarkKnight","data":[167,24,-8,0]},
    {"class":"DarkKnight","data":[157,28,11,0]},
    {"class":"Mage","data":[168,40,-9,0]},
    {"class":"DarkKnight","data":[161,35,7,0]},
    {"class":"Mage","data":[155,38,0,-7]},
    {"class":"DarkKnight","data":[172,35,0,5]},
    //D
    {"class":"DarkKnight","data":[188,30,0,-5]},
    {"class":"DarkKnight","data":[183,32,10,0]},
    {"class":"DarkKnight","data":[188,37,-4,0]},
    {"class":"Mage","data":[186,44,6,0]},
    {"class":"Mage","data":[193,34,0,6]},
    {"class":"DarkKnight","data":[185,30,5,0]}
];

var inObjData = {
    "38":[
        {"tile":38,"position":[64,10],"message":"Welcome","name":"INN","descript":"Pay coin for heal.","service":"heal"},
        {"tile":38,"position":[70,10],"message":"Hello","name":"Blacksmith","descript":"Pay coin for repair<br>your armor.","service":"repair"},
        {"tile":38,"position":[76,10],"message":"Hi","name":"...","descript":"This shop is<br>comming soon.","service":"upgrade"},
    ],
    "75":[
        //notices
        {"tile":75,"position":[26,5],"message":"Land v."+version+" made by<br>Enchant.js+Node.js"},
        {"tile":75,"position":[36,5],"message":"Quest:<br>Find keys."},
        {"tile":75,"position":[27,23],"message":"Hint<br>A key is in a box."},
        {"tile":75,"position":[59,13],"message":"Hint<br>Avoid a monster and trap."},
        {"tile":75,"position":[81,13],"message":"Hint<br>Use a key with stair."},
        {"tile":75,"position":[81,28],"message":"Dungeon<br>Stone Cave"},
        {"tile":75,"position":[110,37],"message":"Quest: Send a crystal<br>to castle for ending."},
        {"tile":75,"position":[107,14],"message":"Dungeon<br>Forest Maze"},
        {"tile":75,"position":[152,23],"message":"Hint<br>Find stair in forest."},
        {"tile":75,"position":[185,15],"message":"Quest:<br>Find a crystal."}
    ],
    "54":[
        //treasure box
        {"tile":54,"position":[33,21],"message":"treasure box","area":"field","contain":[0],"opened":false},
        {"tile":54,"position":[21,48],"message":"treasure box","area":"field","contain":[0],"opened":false},
        {"tile":54,"position":[55,39],"message":"treasure box","area":"field","contain":[0],"opened":false},
        {"tile":54,"position":[58,8],"message":"treasure box","area":"field","contain":[0],"opened":false},
        {"tile":54,"position":[62,8],"message":"treasure box","area":"field","contain":[0],"opened":false},
        {"tile":54,"position":[72,8],"message":"treasure box","area":"field","contain":[0],"opened":false},
        {"tile":54,"position":[74,8],"message":"treasure box","area":"field","contain":[0],"opened":false},
        {"tile":54,"position":[85,37],"message":"treasure box","area":"dungeon1","contain":[0],"opened":false},
        {"tile":54,"position":[86,37],"message":"treasure box","area":"dungeon1","contain":[0],"opened":false},
        {"tile":54,"position":[104,35],"message":"treasure box","area":"dungeon1","contain":[0],"opened":false},
        {"tile":54,"position":[100,45],"message":"treasure box","area":"dungeon1","contain":[0],"opened":false},
        {"tile":54,"position":[95,1],"message":"treasure box","area":"field","contain":[0],"opened":false},
        {"tile":54,"position":[90,17],"message":"treasure box","area":"field","contain":[0],"opened":false},
        {"tile":54,"position":[93,24],"message":"treasure box","area":"field","contain":[0],"opened":false},
        {"tile":54,"position":[99,20],"message":"treasure box","area":"field","contain":[0],"opened":false},
        {"tile":54,"position":[104,22],"message":"treasure box","area":"field","contain":[0],"opened":false},
        {"tile":54,"position":[107,30],"message":"treasure box","area":"field","contain":[0],"opened":false},
        {"tile":54,"position":[115,34],"message":"treasure box","area":"field","contain":[0],"opened":false},
        {"tile":54,"position":[119,34],"message":"treasure box","area":"field","contain":[0],"opened":false},
        {"tile":54,"position":[139,34],"message":"treasure box","area":"field","contain":[0],"opened":false},
        {"tile":54,"position":[143,34],"message":"treasure box","area":"field","contain":[0],"opened":false},
        {"tile":54,"position":[144,34],"message":"treasure box","area":"field","contain":[0],"opened":false},
        {"tile":54,"position":[127,46],"message":"treasure box","area":"dungeon1","contain":[0],"opened":false},
        {"tile":54,"position":[139,27],"message":"treasure box","area":"forest","contain":[0],"opened":false},
        {"tile":54,"position":[139,21],"message":"treasure box","area":"forest","contain":[0],"opened":false},
        {"tile":54,"position":[120,10],"message":"treasure box","area":"forest","contain":[0],"opened":false},
        {"tile":54,"position":[128,3],"message":"treasure box","area":"forest","contain":[0],"opened":false},
        {"tile":54,"position":[147,2],"message":"treasure box","area":"forest","contain":[0],"opened":false},
        {"tile":54,"position":[155,12],"message":"treasure box","area":"maze2","contain":[0],"opened":false},
        {"tile":54,"position":[162,11],"message":"treasure box","area":"maze2","contain":[0],"opened":false},
        {"tile":54,"position":[163,11],"message":"treasure box","area":"maze2","contain":[0],"opened":false},
        {"tile":54,"position":[162,30],"message":"treasure box","area":"maze2","contain":[0],"opened":false},
        {"tile":54,"position":[166,32],"message":"treasure box","area":"maze2","contain":[0],"opened":false},
        {"tile":54,"position":[164,36],"message":"treasure box","area":"maze2","contain":[0],"opened":false},
        {"tile":54,"position":[179,32],"message":"treasure box","area":"maze2","contain":[0],"opened":false},
        {"tile":54,"position":[186,38],"message":"treasure box","area":"maze2","contain":[0],"opened":false},
        {"tile":54,"position":[187,38],"message":"treasure box","area":"maze2","contain":[0],"opened":false},
        {"tile":54,"position":[194,23],"message":"treasure box","area":"maze2","contain":[0],"opened":false},
        {"tile":54,"position":[198,14],"message":"treasure box","area":"field","contain":[0],"opened":false},
        {"tile":54,"position":[173,48],"message":"treasure box","area":"field","contain":[0],"opened":false},
    ],
    "29":[
        //down stair
        {"tile":29,"position":[131,12],"message":"stair down","goto":[147,43],"need":70},//stair 1 -> stone cave
        {"tile":29,"position":[145,3],"message":"stair down","goto":[185,16],"need":71},//stair 2 -> maze2
    ],
    "13":[
        //up stair
        {"tile":13,"position":[147,42],"message":"stair up","goto":[132,12]},//back from stone cave -> forest maze
        {"tile":13,"position":[187,15],"message":"stair up","goto":[143,3]},//back from maze2 -> forest maze
    ],
    "91":[
        //castle
        {"tile":91,"position":[108,35],"message":"castle","need":321}
    ]
};//end decare inObjData..

var readBoard = new Object();
var openShop  = new Object();

///////////////////////////////////// CLASS /////////////////////////////////
//map
WorldMap = enchant.Class.create(Map, {
    initialize: function(cols,rows){
        var game = enchant.Game.instance;
        enchant.Map.call(this,16,16);
        this.image      = game.assets["tile1.png"];
        this.columns    = cols==undefined?200:cols;
        this.rows       = rows==undefined?50:rows;
    },
    
    getMapArray: function(arrayData){
        return mapArray(arrayData,this.columns,this.rows,1);
    },
    
    setCollisionArray: function(arrayData){
        this.collisionData = mapArray(arrayData,this.columns,this.rows,2);
    },
    
    replaceDataTileXY: function(layer,tileX,tileY,newData){
        var nwData = this._data[layer];
        nwData[tileY][tileX] = newData;
        this._data[layer] = nwData;
    }
    
});

//map group by mix classes
MapGroup = enchant.Class.mixClasses(WorldMap,Group,true);

//animation map
AnimationMap = enchant.Class.create(WorldMap, {
    initialize: function(dataArray,delayFrame){
        WorldMap.call(this);
        this.delayFrame = delayFrame;
        //load data
        //dataArray contain two data set [0] second animation [1] second animation
        this.loadData(dataArray[0]);
        
        this.addEventListener("enterframe", function(){
            
            if(this.age>0 && this.age%(this.delayFrame/2)==0){
                if(this.age<this.delayFrame){
                    this.loadData(dataArray[1]);
                }else if(this.age>=this.delayFrame){
                    this.loadData(dataArray[0]);
                    this.age=0;
                }
            }
        });
    }
    
});

//monster
Monster = enchant.Class.create(Sprite, {
    initialize: function(tileX,tileY,asset,dTileX,dTileY){
        var game = enchant.Game.instance;
        enchant.Sprite.call(this,32,32);
        this.image = asset;
        this.x = (tileX*16)-8;
        this.y = (tileY*16)-12;
        this.hitDamage = 0;
        
        this.mFrames = [0,0,0,0];//down left right up
        this.mFrame = this.mFrames[0];
        this.frame = this.mFrame;
        this.vx = 3;
        this.vy = 3;
        
        this.beginX  = this.x;
        this.beginY  = this.y;
        this.targetX = this.beginX+(dTileX*16);
        this.targetY = this.beginY+(dTileY*16);
        this.tgX = this.targetX;
        this.tgY = this.targetY;
        
        //this.dTileX = dTileX;
        //this.dTileY = dTileY;
        
        
        this.addEventListener("enterframe", function(){
            //x
            if(dTileX!=0){
                if(this.x < this.tgX){
                    this.mFrame = this.mFrames[2];
                    this.moveBy(this.vx,0);//rigth
                    if(dTileX<0){
                        if(this.x >= this.beginX){
                            this.moveTo(this.beginX,this.beginY);
                            this.tgX = this.targetX;
                        }
                    }else{
                        if(this.x >= this.tgX){
                            this.moveTo(this.tgX,this.tgY);
                            this.tgX = this.beginX;
                        }
                    }
                    
                }else{
                    this.mFrame = this.mFrames[1];
                    this.moveBy(-this.vx,0);//left
                    if(dTileX<0){
                        if(this.x <= this.tgX){
                            this.moveTo(this.tgX,this.tgY);
                            this.tgX = this.beginX;
                        }
                    }else{
                        if(this.x <= this.beginX){
                            this.moveTo(this.beginX,this.beginY);
                            this.tgX = this.targetX;
                        }
                    }
                }
            }
            
            //y
            if(dTileY!=0){
                if(this.y < this.tgY){
                    this.mFrame = this.mFrames[0];
                    this.moveBy(0,this.vy);//down
                    if(dTileY<0){
                        if(this.y >= this.beginY){
                            this.moveTo(this.beginX,this.beginY);
                            this.tgY = this.targetY;
                        }
                    }else{
                        if(this.y >= this.tgY){
                            this.moveTo(this.tgX,this.tgY);
                            this.tgY = this.beginY;
                        }
                    }
                    
                }else{
                    this.mFrame = this.mFrames[3];
                    this.moveBy(0,-this.vy);//up
                    if(dTileY<0){
                        if(this.y <= this.tgY){
                            this.moveTo(this.tgX,this.tgY);
                            this.tgY = this.beginY;
                        }
                    }else{
                        if(this.y <= this.beginY){
                            this.moveTo(this.beginX,this.beginY);
                            this.tgY = this.targetY;
                        }
                    }
                }
            }
            
            
            this.frame = this.mFrame+(this.age%3);
            
        });
    },
    
    setMFrames: function(arrayFrames){
        this.mFrames = arrayFrames;//down left right up
        this.mFrame = this.mFrames[0];
        this.frame = this.mFrame;
    }
    
});

//monster-slime
Slime = enchant.Class.create(Monster, {
   initialize: function(tileX,tileY,dTileX,dTileY){
       var game = enchant.Game.instance;
       Monster.call(this,tileX,tileY,game.assets["chara6.png"],dTileX,dTileY);
       this.hitDamage = 0.3;
       this.setMFrames([0,6,12,18]);
   }
    
});

//monster-mage
Mage = enchant.Class.create(Monster, {
    initialize: function(tileX,tileY,dTileX,dTileY){
        var game = enchant.Game.instance;
        Monster.call(this,tileX,tileY,game.assets["chara6.png"],dTileX,dTileY);
        this.hitDamage = 0.5;
        this.setMFrames([3,9,15,21]);
    }
        
});

//monster-darknight
DarkKnight = enchant.Class.create(Monster, {
    initialize: function(tileX,tileY,dTileX,dTileY,defendStyle){
        var game = enchant.Game.instance;
        Monster.call(this,tileX,tileY,game.assets["chara7.png"],dTileX,dTileY);
        if(defendStyle){
            this.hitDamage = 1.0;
            this.setMFrames([3,12,21,30]);
        }else{
            this.hitDamage = 0.8;
            this.setMFrames([0,9,18,27]);
        }
    }
});

//player
Player = enchant.Class.create(Sprite, {
    initialize: function(tileX,tileY,map,inObjLayer,trapLayer,itemsPanel){
        var game = enchant.Game.instance;
        enchant.Sprite.call(this,32,32);
        this.image = game.assets["chara5.png"];
        this.x = (tileX-1)*16+8;
        this.y = (tileY-1)*16;
        this.bgMap          = map;
        this.inObjLayer     = inObjLayer;
        this.trapLayer      = trapLayer;
        this.itemsPanel     = itemsPanel;
        
        //sound
        this.soundFoundItem = game.assets["sd-founditem.wav"];
        this.soundHurt      = game.assets["sd-hurt.wav"];
        this.soundBomb      = game.assets["sd-bomb.wav"];
        
        //frame
        this.frameUpWalk    = [27,28,29];
        this.frameLeftWalk  = [9,10,11];
        this.frameRightWalk = [18,19,20];
        this.frameDownWalk  = [0,1,2];
        this.framePresent   = this.frameDownWalk; 
        this.frame          = this.framePresent[0];
        
        //status & item
        this.maxHp = 5;
        this.hp = this.maxHp;
        this.shield = 0;
        this.maxInventory = 8;
        this.items = new Array();//[silver key:70,gold key:71,coin:270,crystal:321,hp potion:269,sheild:41]
        this.hurt = false;
        this.alive = true;
        this.defaulthurtTime = 4*game.fps;
        this.hurtTime = this.defaulthurtTime;
        
        //move
        this.lockPosition = false;
        this.buying = false;
        this.isMoving = false;
        this.vx = 4;
        this.vy = 4;
        this.tx = 0;
        this.ty = 0;
        
        this.addEventListener("enterframe", function(){
            
            if(this.isMoving){
                this.moveBy(this.tx,this.ty);
                this.frame = this.framePresent[this.age%3]+this.charHasShieldFrame();
                this.isMoving = false;
            }else{
                this.tx = this.ty = 0;
                //console.log("tx:"+this.tx+"|ty:"+this.ty);
                if(!this.lockPosition){
                    if(game.input.up){
                        this.ty = -this.vy;
                        this.framePresent   = this.frameUpWalk; 
                    }else if(game.input.down){
                        this.ty = this.vy;
                        this.framePresent   = this.frameDownWalk; 
                    }else if(game.input.left){
                        this.tx = -this.vx;
                        this.framePresent   = this.frameLeftWalk; 
                    }else if(game.input.right){
                        this.tx = this.vx;
                        this.framePresent   = this.frameRightWalk; 
                    }
                }
                
                //moving
                if(this.tx||this.ty){
                    //fix collision boundary
                    var x1 = this.x+10+this.tx,
                        x2 = this.x+23+this.tx,
                        y1 = this.y+16+this.ty,
                        y2 = this.y+26+this.ty;
                    
                    //hit test with map
                    if(!this.bgMap.hitTest(x1,y1) && 
                       !this.bgMap.hitTest(x2,y1) && 
                       !this.bgMap.hitTest(x1,y2) && 
                       !this.bgMap.hitTest(x2,y2) ){
                        this.isMoving = true;
                        arguments.callee.call(this);
                    }else{
                        //if collision with map
                        this.frame = this.framePresent[0]+this.charHasShieldFrame();
                        
                        //check hit trap
                        var inHitTrap = new Array(4);
                        inHitTrap[0] = this.trapLayer.checkTile(x1,y1);
                        inHitTrap[1] = this.trapLayer.checkTile(x2,y1);
                        inHitTrap[2] = this.trapLayer.checkTile(x1,y2);
                        inHitTrap[3] = this.trapLayer.checkTile(x2,y2);
                        
                        //console.log(inHitTrap);
                        if(inHitTrap[0]==43||inHitTrap[1]==43||inHitTrap[2]==43||inHitTrap[3]==43){
                            this.damaged(0.2);
                        }
                    }
                    
                    //hit test with interactive object
                    var inHit = new Array(4);
                    inHit[0] = this.inObjLayer.checkTile(x1,y1);
                    inHit[1] = this.inObjLayer.checkTile(x2,y1);
                    inHit[2] = this.inObjLayer.checkTile(x1,y2);
                    inHit[3] = this.inObjLayer.checkTile(x2,y2);
                    
                    for(var i=0;i<inHit.length;i++){
                        if(inHit[i] && inHit[i]!=-1){
                            var hx = i%2===0?x1:x2,
                                hy = Math.ceil(i/2)===0?y1:y2;
                            var tileNX = Math.round(hx/this.inObjLayer.tileWidth);
                            var tileNY = Math.round(hy/this.inObjLayer.tileHeight);
                            //console.log("hit on interactive object... tile:"+inHit[i]+" x,y:("+hx+","+hy+") tile["+tileNX+","+tileNY+"]");
                            
                            //test
                            this.checkCollisionInteractiveObject(tileNX,tileNY,inHit[i]);
                            break;
                        }
                    }
                    
                }else{
                    //stand
                    this.frame = this.framePresent[0]+this.charHasShieldFrame();
                }
            }
            
            //if hurt present blink effect
            this.blinkEffect();
            
            //if hurt
            if(this.hurt){
                this.hurtTime--;
                if(this.hurtTime<=0){
                    this.hurt = false;
                }
            }
            
        });
    },
    
    buySomething: function(buy,cost,tileX,tileY){
        if(!this.buying){
            //start buy
            this.buying = true;
            
            //look coin
            var coinCount = this.countItem(270);
            var shieldCount = 0;
            //console.log("coin:"+coinCount+"|shield:"+shieldCount);
            var canBuy = (coinCount >= cost);
            if(buy=="repair"){
                shieldCount = this.countItem(41);
                canBuy = (canBuy && (shieldCount >= 1));
            }
            
            if(canBuy){
                //remove coins
                var uItems = new Array();
                var rqCoin = cost;
                for(var i=0;i<this.items.length;i++){
                    if(this.items[i]==270){
                        if(rqCoin<=0){
                            uItems.push(this.items[i]);
                        }else{
                            rqCoin--;
                        }
                    }else{
                        uItems.push(this.items[i]);
                    }
                }
                //
                this.items = uItems;
                
                //buy
                if(buy=="heal"){
                    this.heal(1.0);
                }else if(buy=="repair"){
                    this.getShield(41,1);
                }else if(buy=="upgrade"){
                    
                }
                
                //message
                showNotice("Thank you.",tileX,tileY,this.bgMap,1,"talk",true);
                
                //update item panel
                this.itemsPanel.updateInventory(this.items);
            }else{
                var aText,line=1;
                if(coinCount < cost){
                    aText = "Not enough coin.";
                }
                
                if(buy=="repair"){
                    if(shieldCount == 0){
                        if(aText!=undefined){
                            aText += "<br>Need a shield.";
                            line = 2;
                        }else{
                            aText = "Need a shield.";
                        }
                    }
                }
                
                showNotice(aText,tileX,tileY,this.bgMap,line,"alert",true);
            }
        }
    },
    
    lockPosXY: function(lock){
        this.lockPosition = lock;
    },
    
    gotoTileXY: function(tileX,tileY){
        //3*16+8,3*16
        this.moveTo((tileX-1)*16+8,(tileY-1)*16,5);
    },
    
    inventoryIsFull: function(){
        return this.items.length >= this.maxInventory;  
    },
    
    //check collision with interactive object
    checkCollisionInteractiveObject: function(tileNX,tileNY,tileValue){ 
        var data = inObjData[tileValue];
        //console.log(inObjData);
        //console.log(inObjData[tileValue]);
        if(data){
            for(var i=0;i<data.length;i++){
                
                if(tileValue==data[i]["tile"] && 
                Math.abs(tileNX-data[i]["position"][0])<=1 &&
                Math.abs(tileNY-data[i]["position"][1])<=1) {

                    console.log("... inObject:"+tileValue);
                    var clTileX = data[i]["position"][0];
                    var clTileY = data[i]["position"][1];
                    switch(tileValue){
                        case 38:{//NPC Shop
                            showNotice(data[i]["message"],clTileX,clTileY,this.bgMap,1,"talk");
                            if(data[i]["service"]!="upgrade"){
                                showShopPanel(data[i]["name"],data[i]["descript"],data[i]["service"],clTileX,clTileY,this); 
                            }
                            break;
                        }
                        case 75:{//noticeBoard
                            //show notice
                            showNotice(data[i]["message"],clTileX,clTileY,this.bgMap);
                            break;
                        }
                        case 54:{//treasure box
                            //console.log(data[i]["contain"]);
                            if(data[i]["opened"]==false){
                                
                                if(!this.inventoryIsFull()){
                                    var itemNumber = getTreasure(data[i]["contain"]);
                                    //[silver key:70,gold key:71,coin:270,crystal:321,hp potion:269,sheild:41]
                                    if(itemNumber > 0){
                                        //coin key crystal
                                        //potion
                                        //shiled
                                        switch(itemNumber){
                                            case 270:
                                            case 70:
                                            case 71:
                                            case 321:
                                                this.items.push(itemNumber);
                                                break;
                                            case 269://potion heal 0.5
                                                this.heal(0.5);
                                                break;
                                            case 41://shield +5
                                                this.getShield(41);
                                                break;
                                        }
                                        console.log(this.items);
                                        
                                        //found message
                                        if(itemNumber==70||itemNumber==71||itemNumber==321){
                                            var fndText = "Silver Key";
                                            if(itemNumber==71){
                                                fndText = "Golden Key";
                                            }else if(itemNumber==321){
                                                fndText = "Crystal";
                                            }
                                            showNotice("You found!<br>"+fndText,clTileX,clTileY,this.bgMap,2);
                                        }
                                        
                                        //sound
                                        if(itemNumber!=269){//heal has play sound after that
                                            this.soundFoundItem.play();
                                        }
                                        //effect
                                        showGetItemEffect(itemNumber,clTileX,clTileY,this.bgMap);
                                        //update item panel
                                        this.itemsPanel.updateInventory(this.items);
                                        
                                    }else if(itemNumber == -1){//bomb
                                        this.soundBomb.play();
                                        showBombEffect(clTileX,clTileY,this.bgMap);
                                        this.damaged(0.7);//bomb damage
                                    }

                                    this.inObjLayer.replaceDataTileXY(0,clTileX,clTileY,55);
                                    data[i]["opened"] = true;
                                }else{
                                    //inventory full alert !
                                    showNotice("Inventory is full!",clTileX,clTileY,this.bgMap,1,"alert");
                                    //console.log("inventory is full!");
                                }
                                
                            }else{
                                continue;
                            }
                            break;
                        }
                        case 29:{//down stair
                            //check key, have?
                            if(this.countItem(data[i]["need"])==1){
                                //goto
                                this.gotoTileXY(data[i]["goto"][0],data[i]["goto"][1]);
                            }else{
                                var k = (data[i]["need"]==70)?"silver":"golden";
                                showNotice("Need a "+k+" key.",clTileX,clTileY+1,this.bgMap,1,"alert");
                            }
                            break;
                        }
                        case 13:{//up stair
                            this.gotoTileXY(data[i]["goto"][0],data[i]["goto"][1]);
                            break;
                        }
                        case 91:{//castle
                            //check crystal, have?
                            if(this.countItem(data[i]["need"])==1){
                                showNotice("Thank you.",clTileX,clTileY+1,this.bgMap,1,"talk");
                                //ending game...
                                showEndingGame();
                                this.lockPosXY(true);
                            }else{
                                showNotice("Need a crystal.",clTileX,clTileY+1,this.bgMap,1,"alert");
                            }
                            //end...
                            break;
                        }
                    }

                    break;
                }
            }
        }
    },//end function checkCollisionInteractiveObject
    
    deadAction: function(){
        //go to town
        this.gotoTileXY(55,11);
        //lose all coins
        var uItems = new Array();
        for(var i=0;i<this.items.length;i++){
            if(this.items[i]!=270){
                uItems.push(this.items[i]);
            }
        }
        //
        this.items = uItems;

        //hp = 60%
        this.hp = this.maxHp*0.6;
        //sheild = 0
        this.shield = 0;
        //set alive
        this.alive = true;
        
        //action
        this.framePresent   = this.frameDownWalk; 
        this.frame          = this.framePresent[1];

        //update item panel
        this.itemsPanel.updateInventory(this.items);
    },
    
    damaged: function(damage){
        if(!this.hurt){
            this.hurt = true;
            this.hurtTime = this.defaulthurtTime;
            
            //decrease hp ...
            var absDamage = 0;
            if(this.shield > 0){
                absDamage = Math.min(damage*0.5,this.shield);
                //decrease shield
                this.shield -= absDamage;
            }
            this.hp -= (damage-absDamage);
            
            //sound
            this.soundHurt.play();
            
            console.log("hp:"+this.hp+"/"+this.maxHp+" |damage:"+damage+",abs:"+absDamage+",hit:"+(damage-absDamage));
            
            //dead...
            if(this.hp<=0 && this.alive){
                this.alive = false;
                console.log("dead");
                showEndingDead(this);
            }
        }
    },
    
    heal: function(healPoint){
        //increase hp
        this.hp = Math.min(this.hp+healPoint,this.maxHp);
        console.log("heal +0.5 | hp:"+this.hp);
        this.soundFoundItem.play();
    },
    
    countItem: function(itemNum){
        var count = 0;
        for(var i=0;i<this.items.length;i++){
            if(this.items[i]==itemNum){
                count++;
            }
        }
        
        return count;
    },
    
    getShield: function(shieldNum,value){
        var hasShield = this.countItem(shieldNum)>0;
        
        if(!hasShield){
            this.shield = Math.min(this.shield+2,3);
            this.items.push(shieldNum);
        }else{
            var upValue = value==undefined?2:value;
            this.shield = Math.min(this.shield+upValue,3);
        }
        
        console.log("+sheild:"+this.shield);
    },
    
    charHasShieldFrame: function(){
        return this.shield>0?3:0;
    },
    
    blinkEffect: function(){
        //blink effect
        if(this.hurt){
            if(this.age%2==0) this.frame = -1;
        }
    }
    
});

//class extended label
//Items Label
ItemsLabel = enchant.Class.create(Group,{
    initialize: function(cap){
        enchant.Group.call(this);
        var game = enchant.Game.instance;
        
        this.capacity = cap;
        this.items  = new Array(this.capacity);
        this.image  = game.assets["tile1.png"]; 
    },
    
    pushItem: function(itemFrameIdx,index){
        var itmSpt = new Sprite(16,16);
        itmSpt.image = this.image;
        itmSpt.frame = itemFrameIdx;
        
        if(index!=undefined){
            itmSpt.x = index*16;
            this.items[index] = itmSpt;
        }else{
            for(var i=0;i<this.items.length;i++){
                if(this.items[i]==undefined){
                    itmSpt.x = i*16;
                    this.items[i] = itmSpt;
                    break;
                }
            }
        }
        
        itmSpt.y = 0;
        
        this.addChild(itmSpt);
        
    },
    useItem: function(index){
        for(var i=0;i<this.items.length;i++){
            if(i==index && this.items[i]!=undefined){
                this.items[i].remove();
                this.items[i] = undefined;
                break;
            }
        }
    },
    isFull: function(){
        var full = true;
        for(var i=0;i<this.items.length;i++){
            if(this.items[i]==undefined){
                full = false;
                break;
            }
        }
        return full;
    },
    updateInventory: function(pItems){
        for(var i=0;i<this.items.length;i++){
            if(i<pItems.length){
                if(this.items[i]!=undefined){
                    if(pItems[i]!=undefined && this.items[i].frame!=pItems[i]){
                        this.items[i].frame = pItems[i];
                    }else if(pItems[i]==undefined){
                        this.useItem(i);
                    }
                }else{
                    this.pushItem(pItems[i],i);
                }
            }else{
                this.useItem(i);
            }
        }
    }
});

//Icon Point Label
ItemsPointLabel = enchant.Class.create(ItemsLabel,{
    initialize: function(maxValue,frames){
        ItemsLabel.call(this,maxValue);
        this.maxValue = this.capacity;
        this.value = this.maxValue;
        this.frames = frames;
        
        for(var i=0;i<this.items.length;i++){
            this.pushItem(this.frames[0]);
        }
    },
    updateValue: function(value){
        if(this.value != value){
            //min-max
            value = Math.min(Math.max(0,value),this.maxValue);
            this.value = value;
            //console.log(this.hp);
            for(var i=0;i<this.items.length;i++){
                if(value>0.5){
                    this.items[i].frame = this.frames[0];
                }else if(value<=0.5 && value > 0){
                    this.items[i].frame = this.frames[1];
                }else if(value<=0){
                    this.items[i].frame = this.frames[2];
                }

                value--;
            }
        }
    }
});

//HP Label
HPLabel = enchant.Class.create(ItemsPointLabel,{
    initialize: function(maxHp){
        ItemsPointLabel.call(this,maxHp,[333,334,335]);
    }
});

//Sheild Label
ShieldLabel = enchant.Class.create(ItemsPointLabel,{
    initialize: function(maxShield){
        ItemsPointLabel.call(this,maxShield,[326,327,328]);
        this.updateValue(0);
    }
});



///////////////////////////////////////////////// FUNCTIONS ////////////////////////////////////////
//get map array[][] from array[] data
function mapArray(dataArray,width,height,command,offset){
    var map = new Array(height);
    for(var i=0;i<map.length;i++){
        var mapRow = new Array(width);
        for(var j=0;j<mapRow.length;j++){
            index = i*width+j;
            
            switch(command){
                case 1:{//value -1 all pixel
                    mapRow[j] = dataArray[index]-1;
                    break;
                }
                case 2:{//except zero value other set to 1
                    if(dataArray[index]==0){
                        mapRow[j] = dataArray[index]; 
                    }else{
                        mapRow[j] = 1; 
                    }
                    break;
                }
                case 3:{//any offset
                    mapRow[j] = dataArray[index]+offset;
                    break;
                }
                default:{   
                    mapRow[j] = dataArray[index];
                }
            }
            
        }
        map[i] = mapRow;
    }
    
    return map;
}

//show shop panel
function showShopPanel(shopName,descript,service,tileX,tileY,player){
    var open = openShop[tileX+""+tileY];
    
    if(!open){
        openShop[tileX+""+tileY] = true;
        var game = enchant.Game.instance;
        var group = new Group();
        group.x = 19*16;
        group.y = 5*16;
        
        //bg
        var bgLabel = new Label();
        bgLabel.width = 16*7;
        bgLabel.height = 16*7;
        bgLabel.backgroundColor = "rgba(30,30,30,0.8)";
        group.addChild(bgLabel);
        
        //title
        var titleLabel = new Label();
        titleLabel.x = 8;
        titleLabel.y = 8;
        titleLabel.width = 6*16;
        titleLabel.height = 14;
        titleLabel.backgroundColor = "rgb(220,170,10)";
        titleLabel.textAlign = 'center';
        titleLabel.color = "rgb(0,0,0)";
        titleLabel.font = "11px arial";
        titleLabel.text = shopName;
        group.addChild(titleLabel);
        
        //subtitle
        var subTitleLabel = new Label();
        subTitleLabel.x = 8;
        subTitleLabel.y = 24;
        subTitleLabel.width = 6*16;
        subTitleLabel.height = 24;
        subTitleLabel.backgroundColor = "rgb(255,255,255)";
        subTitleLabel.textAlign = 'center';
        subTitleLabel.color = "rgb(0,0,0)";
        subTitleLabel.font = "11px arial";
        subTitleLabel.text = descript;
        group.addChild(subTitleLabel);
        
        //button service
        var serviceBtn = new Sprite(16*4,16);
        var cost = 0;
        serviceBtn.image = game.assets["btn1.png"];
        if(service=="heal"){
            serviceBtn.frame = 2;
            cost = 1;
        }else if(service=="repair"){
            serviceBtn.frame = 0;
            cost = 2;
        }else if(service=="upgrade"){
            serviceBtn.frame = -1;
        }
        serviceBtn.x = 2*16-8;
        serviceBtn.y = 3.5*16;
        serviceBtn.addEventListener("touchstart",function(){
            console.log("service... "+service+" | p buying:"+player.buying);
            if(!player.buying){
                player.buySomething(service,cost,tileX,tileY);
                player.buying = false;
            }
        });
        
        group.addChild(serviceBtn);
        
        
        //button close
        var closeBtn = new Sprite(16*4,16);
        closeBtn.image = game.assets["btn1.png"];
        closeBtn.frame = 4;
        closeBtn.x = 2*16-8;
        closeBtn.y = 5.5*16;
        closeBtn.addEventListener("touchstart",function(){
            group.remove();
            openShop[tileX+""+tileY] = false;
            player.lockPosXY(false);
        });
        
        group.addChild(closeBtn);
        
        game.rootScene.addChild(group);
        
        player.lockPosXY(true);
        
    }
}

//show notice
function showNotice(message,tileX,tileY,bgMap,line,theme,ignore){
    var bX = tileX,bY = tileY;
    var read = readBoard[bX+""+bY];
    ignore = ignore==undefined?false:ignore;
    if(!read || ignore){
        var game = enchant.Game.instance;
        
        var group = new Group();
        
        var msgLabel = new Label();
        msgLabel.width = 128;
        msgLabel.height = line!=undefined?(line*14):28;
        msgLabel.textAlign = "center";
        
        if(theme==undefined){
            msgLabel.backgroundColor = "rgba(240,246,206,0.9)";
            msgLabel.color = "rgb(0,0,0)";
        }else if(theme=="talk"){
            msgLabel.backgroundColor = "rgba(122,184,248,0.9)";
            msgLabel.color = "rgb(0,0,255)";
            msgLabel.width = msgLabel.width*0.6;
            tileY = tileY-1.5;
        }else if(theme=="alert"){
            msgLabel.backgroundColor = "rgba(250,55,55,0.9)";
            msgLabel.color = "rgb(255,255,255)";
            tileY = tileY-1.5;
        }
        
        msgLabel.font = "11px arial";
        msgLabel.text = message;
        
        //point
        var pinMark = new Sprite(8, 8);
        pinMark.x = msgLabel.x+(msgLabel.width-pinMark.width)/2;
        pinMark.y = msgLabel.y+msgLabel.height-(pinMark.height*0.8);
        pinMark.backgroundColor = msgLabel.backgroundColor;
        pinMark.rotate(45);
        
        //group x y
        group.x = (tileX*16)-(msgLabel.width/2)+8;
        group.y = (tileY*16)-(msgLabel.height*1.4);
        group.addChild(pinMark);
        group.addChild(msgLabel);
        
        //add to map
        bgMap.addChild(group);
        readBoard[bX+""+bY]=true;
        
        group.tl.fadeIn(0.5*game.fps).delay(3*game.fps).fadeOut(0.5*game.fps,function(){
            //remove
            readBoard[bX+""+bY]=false;
            group.remove();
        });
        
    }   
}

//create status panel
function createStatusPanel(x,y,game,hpLabel,itemLabel,shieldLabel){
    var g = new Group();
    g.x = x;
    g.y = y;
    //bg label
    var bgLabel = new Label();
    bgLabel.width  = 16*9.4;
    bgLabel.height = 16*2.4;
    bgLabel.backgroundColor = "rgba(0,0,0,0.5)";
    g.addChild(bgLabel);
    
    var bg1frame = 57;
    var bg2frame = 58;
    //sprite label
    for(var i=0;i<9;i++){
        var bgSpt = new Sprite(16,16);
        bgSpt.image = game.assets["tile1.png"];
        bgSpt.x = 2+(16*i)+(i>0?2:0);
        bgSpt.y = 2;
        bgSpt.frame = i==0?bg1frame:bg2frame;
        g.addChild(bgSpt);
        
        var bgSpt2 = new Sprite(16,16);
        bgSpt2.image = game.assets["tile1.png"];
        bgSpt2.x = 2+(16*i)+(i>0?2:0);
        bgSpt2.y = 19;
        bgSpt2.frame = i==0?bg1frame:bg2frame;
        g.addChild(bgSpt2);
        
        //add title icon
        if(i==0){
            var iconTitle = new Sprite(16,16);
            iconTitle.image = game.assets["tile1.png"];
            iconTitle.x = 2;
            iconTitle.y = 2;
            iconTitle.frame = 39;
            g.addChild(iconTitle);
        
            var iconTitle2 = new Sprite(16,16);
            iconTitle2.image = game.assets["tile1.png"];
            iconTitle2.x = 2;
            iconTitle2.y = 19;
            iconTitle2.frame = 40;
            g.addChild(iconTitle2);
        }
    }
    
    //hp label
    hpLabel.x = 20;
    hpLabel.y = 2;
    g.addChild(hpLabel);
    
    //shield label
    shieldLabel.x = 100;
    shieldLabel.y = 2;
    g.addChild(shieldLabel);
    
    //item label
    itemLabel.x = 20;
    itemLabel.y = 19;
    g.addChild(itemLabel);
    
    //add to stage
    game.rootScene.addChild(g);
}

//[silver key:70,gold key:71,crystal:321]
//[hppotion:269 coin:270 bomb:-1]
function randomTreasure(inObjData54){
    var dDungeon1 = new Array();
    var dForest   = new Array();
    var dMaze2    = new Array();
    for(var i=0;i<inObjData54.length;i++){
        if(inObjData54[i]["tile"]==54){
            //normal
            inObjData54[i]["contain"] = [270,269,-1,269,270,-1,269,41,270,-1];//item drop
            
            if(inObjData54[i]["area"]=="dungeon1"){
                dDungeon1.push(i);
            }else if(inObjData54[i]["area"]=="forest"){
                dForest.push(i);
            }else if(inObjData54[i]["area"]=="maze2"){
                dMaze2.push(i);
            }
        }
    }
    
    //console.log(dDungeon1);
    //console.log(dForest);
    //console.log(dMaze2);
    
    //Key and Crystal
    var rD1 = dDungeon1[Math.floor(Math.random()*dDungeon1.length)];
    var rD2 = dForest[Math.floor(Math.random()*dForest.length)];
    var rD3 = dMaze2[Math.floor(Math.random()*dMaze2.length)];
    
    inObjData54[rD1]["contain"] = [71];
    inObjData54[rD2]["contain"] = [70];
    inObjData54[rD3]["contain"] = [321];
    //console.log(inObjData54);
}

//get treasure
function getTreasure(inObjDataContain){
    return inObjDataContain[Math.floor(Math.random()*inObjDataContain.length)];
}

//show item effect
function showGetItemEffect(itemNumber,tileX,tileY,bgMap){
    var game = enchant.Game.instance;
    var itemSpt = new Sprite(16,16);
    itemSpt.image = game.assets["tile1.png"];
    itemSpt.frame = itemNumber;
    itemSpt.x = tileX*16;
    itemSpt.y = tileY*16-6;
    
    //add to map
    bgMap.addChild(itemSpt);
    
    //enterframe event
    itemSpt.addEventListener("enterframe",function(){
        if(this.age>4){
            itemSpt.y -= 1;
            itemSpt.opacity -= 0.05;
            if(itemSpt.opacity<=0){
                this.remove();
            }
        }
    });
    
}

//show bomb effect
function showBombEffect(tileX,tileY,bgMap){
    var game = enchant.Game.instance;
    var fxSpt = new Sprite(16,16);
    fxSpt.image = game.assets["tile1.png"];
    fxSpt.frame = [8,9,10,24,25,26];
    fxSpt.x = tileX*16;
    fxSpt.y = tileY*16;
    fxSpt.opacity = 0.8;
    
    //add to map
    bgMap.addChild(fxSpt);
    
    //enterframe event
    fxSpt.addEventListener("enterframe",function(){
        if(this.age >= 6){
            this.remove();
        }
    });
}

function addCopyrightText(parent){
    var game = enchant.Game.instance;
    //copyright text
    var cpText = new Label();
    cpText.width = 250;
    cpText.text = "(C) Copyright 2015 adayd3sign.com All rights reserved.";
    cpText.font = "12px";
    cpText.color = "rgb(20,20,20)";
    cpText.textAlign = "center";
    cpText.x = (game.width-cpText.width)/2;
    cpText.y = game.height-15;
    parent.addChild(cpText);
}

//show ending game
function showEndingGame(){
    var game = enchant.Game.instance;
    var group = new Group();
    
    //sound effect ending
    var soundEnding = game.assets["sd-success.wav"];
    soundEnding.play();
    
    //bg
    var bgLabel = new Label();
    bgLabel.width = game.width;
    bgLabel.height = game.height;
    bgLabel.backgroundColor = "rgba(31,171,251,0.9)";
    bgLabel.opacity = 0.0;
    bgLabel.tl.fadeIn(game.fps*5);
    group.addChild(bgLabel);
    
    var group2 = new Group();
    group2.y = game.height;
    group2.opacity = 0.4;
    //bg land
    //map data from .js file
    var endingMpData = TileMaps["tile-ending"]["layers"];
    var endMap = new WorldMap(32,20);
    var eMapArray = endingMpData[0]["data"];
    var eTextArray = endingMpData[1]["data"];
    endMap.loadData(endMap.getMapArray(eMapArray),
                    endMap.getMapArray(eTextArray)
    );
    group2.addChild(endMap);
    
    //copyright text
    addCopyrightText(group2);
    
    //animation
    group2.tl.moveTo(0,0,game.fps*10);
    group2.addEventListener("enterframe",function(){
        if(this.opacity<1){
            this.opacity += 0.1;
        }
        
        if(this.age%(10*game.fps)==0){
            createEndingAnimation(game,this);
        }
    });
    
    //button
    for(var i=0;i<3;i++){
        var btn = new Sprite(64,32);
        btn.image = game.assets["btn1.png"];
        btn.x = 12*16+((4*16+5)*i);
        btn.y = 6.5*16;
        btn.frame = 1+(i*2);
        
        btn.addEventListener("touchstart",function(e){
            switch(this.frame){
                case 1:{
                    console.log("goto www.adaydesign.wordpress.com");
                    break;
                }
                case 3:{
                    console.log("goto www.facebook.com/adaydesignblog");
                    break;
                }
                case 5:{
                    console.log("goto www.appcodev.com");
                    break;
                }
            }
        });
        
        group2.addChild(btn);
    }
    
    group.addChild(group2);
    game.rootScene.addChild(group);
}

function createEndingAnimation(game,group){
    //cahracter moving
    var ch1 = new Sprite(32,32);
    ch1.image = game.assets["chara5.png"];
    ch1.x = -2*16;
    ch1.y = 15*16;
    ch1.frame = [18,18,19,19,20,20];
    
    ch1.tl.moveTo(14*16,15*16,8*game.fps)
                .then(function(){
                    this.frame = [24,-1,25,26];
                })
                .moveTo(14*16,15*16,3*game.fps)
                .then(function(){
                    this.frame = [18,18,19,19,20,20];
                })
                .moveTo(34*16,15*16,10*game.fps)
                .then(function(){this.remove();});
    
   
    
    //character 2
    var ch2 = new Sprite(32,32);
    ch2.image = game.assets["chara7.png"];
    ch2.x = 34*16;
    ch2.y = 15*16;
    ch2.frame = [9,9,10,10,11,11];
    
    ch2.tl.moveTo(15.6*16,15*16,8*game.fps)
                .then(function(){
                    this.frame = [15,-1,16,17];
                })
                .moveTo(15.6*16,15*16,3*game.fps)
                .then(function(){this.remove();});
    
    group.addChild(ch2);
    group.addChild(ch1);
}

function showEndingDead(player){
    player.lockPosXY(true);
    
    var game = enchant.Game.instance;
    var group = new Group();
    
    //sound
    var soundDead = game.assets["sd-dead.wav"];
    soundDead.play();
    
    //bg
    var bgLabel = new Label();
    bgLabel.width = game.width;
    bgLabel.height = game.height;
    bgLabel.backgroundColor = "rgba(0,0,0,0.95)";
    bgLabel.opacity = 0.0;
    bgLabel.tl.fadeIn(game.fps*5);
    group.addChild(bgLabel);
    
    var group2 = new Group();
    group2.y = game.height;
    group2.opacity = 0;
    //bg land
    //map data from .js file
    var endingMpData = TileMaps["tile-ending"]["layers"];
    var endMap = new WorldMap(32,20);
    var eTextArray = endingMpData[3]["data"];
    endMap.loadData(endMap.getMapArray(eTextArray));
    group2.addChild(endMap);
    group.addChild(group2);
    
    //animation
    group2.tl.moveTo(0,0,game.fps*5);
    group2.addEventListener("enterframe",function(){
        if(this.opacity<1){
            this.opacity += 0.1;
        }
        
        if(this.age > (game.fps*10)){
            player.lockPosXY(false);
            player.deadAction();
            //remove
            group.remove();
        }
    });
    
    
    game.rootScene.addChild(group);
}

//window onload
window.onload = function(){
    //320x200, 320x240, 640,400, 512,320
    var core = new Core(512,320);
    core.fps = 15;
    core.preload("tile1.png","chara0.png","chara5.png","chara6.png","chara7.png","btn1.png",
                 "sd-bgm.wav","sd-bomb.wav","sd-dead.wav","sd-founditem.wav","sd-hurt.wav","sd-success.wav");

    
    core.onload = function(){
        //map data from .js file
        var tileMapData = TileMaps["tile-map"]["layers"];
        //random treasure (KEY)
        randomTreasure(inObjData["54"]);
        
        //sound
        bgm = core.assets["sd-bgm.wav"];
        
        //add status panel
        var hpLabel = new HPLabel(5);//fix max
        var shieldLabel = new ShieldLabel(3);//fix max
        var itemsLabel = new ItemsLabel(8);//fix max
        
        //bg map
        var bgMap = new MapGroup();
        var bgMapArray = tileMapData[0]["data"];
        var bgObjectArray = tileMapData[1]["data"];
        var bgTextArray = tileMapData[2]["data"];
        
        bgMap.loadData(bgMap.getMapArray(bgMapArray),//bg
                       bgMap.getMapArray(bgObjectArray),//object
                       bgMap.getMapArray(bgTextArray)//text
        );
        
        var collisionArray = tileMapData[6]["data"];
        bgMap.setCollisionArray(collisionArray);
        
        //interactive object
        var inObjLayer = new WorldMap();
        var inObjArray = tileMapData[4]["data"];
        inObjLayer.loadData(inObjLayer.getMapArray(inObjArray));
        
        //animation map
        var spikeArray = tileMapData[3]["data"];
        var spkAr1 = mapArray(spikeArray,bgMap.columns,bgMap.rows,1);
        var spkAr2 = mapArray(spikeArray,bgMap.columns,bgMap.rows,3,-2);
        var spikeLayer = new AnimationMap([spkAr1,spkAr2],20);
        
        
        //foreground map
        var fgMap = new WorldMap();
        var fgMapArray = tileMapData[5]["data"];
        fgMap.loadData(fgMap.getMapArray(fgMapArray));
        
        //player
        var pPlayer = new Player(4,4,bgMap,inObjLayer,spikeLayer,itemsLabel);
        
        //add object to map
        bgMap.addChild(spikeLayer);
        bgMap.addChild(inObjLayer);
       
        //add monsters
        var mons = new Array();
        for(var i=0;i<monsterData.length;i++){
            var md = monsterData[i]["data"];
            var mon;
            if(monsterData[i]["class"]=="Slime"){
                mon = new Slime(md[0],md[1],md[2],md[3]);
            }else if(monsterData[i]["class"]=="Mage"){
                mon = new Mage(md[0],md[1],md[2],md[3]);
            }else if(monsterData[i]["class"]=="DarkKnight"){
                var k = Math.round(Math.random()*100);
                mon = new DarkKnight(md[0],md[1],md[2],md[3],k>70?true:false);
            }
            
            if(mon!=undefined){
                bgMap.addChild(mon);
                mons.push(mon);
            }
        }
        
        bgMap.addChild(pPlayer);
        bgMap.addChild(fgMap);
        core.rootScene.addChild(bgMap);
        
        bgMap.addEventListener("enterframe", function(){
            
            //collision with monster
            for(var i=0;i<mons.length;i++){
                var damagedPlayer = pPlayer.within(mons[i],16);
                if(damagedPlayer){
                    //console.log("i:"+i+"|"+vv);
                    pPlayer.damaged(mons[i].hitDamage);
                }
            }
        });
        
        //create status panel
        createStatusPanel(4,4,core,hpLabel,itemsLabel,shieldLabel);
        
        //play sound
        bgm.volume = 0.3;
        bgm.play();
        
        core.rootScene.addEventListener("enterframe", function(){
            var x = Math.min(0,core.width/2-pPlayer.x-16);
                x = Math.max(core.width,  x+bgMap.width) - bgMap.width;
            var y = Math.min(0,core.height/2-pPlayer.y-16);
                y = Math.max(core.height, y+bgMap.height) - bgMap.height;
            
            bgMap.x = x;
            bgMap.y = y;
            
            //update hp label
            hpLabel.updateValue(pPlayer.hp);
            //update shield
            shieldLabel.updateValue(pPlayer.shield);
        
            if(bgm.currentTime >= bgm.duration){
                bgm.play();
            }
        });
        
    };
    core.start();
};


