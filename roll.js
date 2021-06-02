const Discord = require("discord.js")
const {prefix, token} = require("./config.json");
const client = new Discord.Client();
const fetch = require("node-fetch")
const fs = require('fs');
global.fetch = fetch;

var rimraf = require("rimraf");


var test = require("./node_modules/google-image-downloader/examples/example.js");
var players = [];



client.once("ready", () => {
    console.log("ready");
})

function getRandomIntInclusive(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
  }

client.on('message', msg=> {
	if(msg.content.toLowerCase().startsWith("add")){
		var message = msg.content.substring(3, 100)
		msg.channel.send(message);
		players.push(message);
	}
	
	if(msg.content.toLowerCase().startsWith("clear")){
		players = [];
		msg.channel.send("empty");
	}
	
	if(msg.content.toLowerCase().startsWith("list")){
		if(players.length > 0){
			msg.channel.send(players.toString());
		}else{
			msg.channel.send("absolute niemert is bi dem scheiss dabi!");
		}
	}

	if(msg.content.toLowerCase().startsWith("roll20")){
  		msg.channel.send("Roll 1 - 20 = " + getRandomIntInclusive(1, 20));
	}

	else if(msg.content.toLowerCase().startsWith("roll6")){
  		msg.channel.send("Roll 1 - 6 = " + getRandomIntInclusive(1, 6));
	}

	else if(msg.content.toLowerCase().startsWith("roll3")){
  		msg.channel.send("Roll 1 - 3 = " + getRandomIntInclusive(1, 3));
	}

	else if(msg.content.toLowerCase().startsWith("roll1000")){
  		msg.channel.send("Roll 1 - 1000 = " + getRandomIntInclusive(1, 1000));
	}

	else if(msg.content.toLowerCase().startsWith("rollsean")){
		msg.channel.send("Shut the fuck up, yannik");
  	}
	
	else if(msg.content.toLowerCase().startsWith("roll")){
		if(players.length > 1){
			var player1Id = Math.floor(Math.random() * players.length);
			var player2Id = Math.floor(Math.random() * players.length);
			
			while(player1Id == player2Id){
				player2Id = Math.floor(Math.random() * players.length);
			}
			msg.channel.send("Sherlock: " + players[player1Id]);
			msg.channel.send("Watson:   " + players[player2Id]);
		}else{
			//msg.channel.send("Du häsch zwenig Kollege für das Spiel!");
		}
	}
	
	if(msg.content.toLowerCase().startsWith("$.a")){
		var message = msg.content.substring(3, 100)
		client.channels.get('699998911372197889').send(message);
	}
	
	if(msg.content.toLowerCase().startsWith("$.b")){
		var message = msg.content.substring(3, 100)
		client.channels.get('680177431801233421').send(message);
	}
	
	if(msg.content.toLowerCase().startsWith("$.c")){
		var message = msg.content.substring(3, 100)
		client.channels.get('372792862644895765').send(message);
	}
		
	if(msg.content.toLowerCase().startsWith("$.d")){
		var message = msg.content.substring(3, 100)
		client.channels.get('759103302071091264').send(message);
	}
})


client.on("message", message => {
    console.log(message.content);
    
})

client.login(token);