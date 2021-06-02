const Discord = require("discord.js")
const {prefix, token} = require("./config.json");
const client = new Discord.Client();
const fetch = require("node-fetch")
const fs = require('fs');
global.fetch = fetch;

var rimraf = require("rimraf");


var test = require("./node_modules/google-image-downloader/examples/example.js");
currentChanel = null;

//import { ImageDownloader } from './node_modules/google-image-downloader/lib/ImageDownloader';
//const {ImageDownloader} = require('google-image-downloader');

//const download = new ImageDownloader(__dirname);
//download.downloadImage("dog", 1);

/*var stream = fs.createWriteStream("my_file.txt");
stream.once('open', function(fd) {
  stream.write(img);
});*/


folderpath = "./node_modules/google-image-downloader/examples/output/images/"
erinapath = "./node_modules/google-image-downloader/examples/output/erina/"
filepath = "";


client.once("ready", () => {
    console.log("ready");
    client.user.setActivity('cooking something amazing!', { type: 'PLAYING' });
})
client.on("message", message => {
    console.log(message.content);
    

    if(message.content.startsWith("cook")){
      currentChanel = message.channel;
      rimraf("./node_modules/google-image-downloader/examples/output/images/*", function (e) { console.log(e); })
      setTimeout(function() {

      console.log("skokugeki " + message.content.substring(5, 100))
      test.download("shokugeki " + message.content.substring(5, 100))

      setTimeout(function() {
        fs.readdir(folderpath, function(err, files) {
          filepath = files[0];
        });

        setTimeout(function() {
       message.channel.send("Here is your meal!", {
          files: [
            folderpath + filepath
          ]
        })
        }, 100);
      }, 3000);
    }, 100);
    }

    if(message.content.startsWith("erina")){
      currentChanel = message.channel;
      //test.download("shokugeki " + message.content.substring(6, 100))
      //test.download("shokugeki erina fanart")
        randInt =  (Math.random() * (153 - 0) + 0)
        console.log(randInt)
        fs.readdir(erinapath, function(err, files) {

          filepath = files[Math.round(randInt)];
        });

        setTimeout(function() {
          message.channel.send("Here is your meal!", {
          files: [
            erinapath + filepath
          ]
        })
        }, 100);
    }

    if(message.content.startsWith("erina ")){
      currentChanel = message.channel;
      rimraf("./node_modules/google-image-downloader/examples/output/images/*", function (e) { console.log(e); })

      test.download("erina nakiri " + message.content.substring(6, 100))

      setTimeout(function() {
        fs.readdir(folderpath, function(err, files) {
          filepath = files[0];
        });

        setTimeout(function() {
       message.channel.send("Here is your meal!", {
          files: [
            folderpath + filepath
          ]
        })
        }, 100);
      }, 3000);
    }

    if(message.content.startsWith(".8.")){
      currentChanel.send(message.content.substring(3, 100))
    }

})

client.login(token);