const http = require('http');
const express = require('express');
const app = express();
const fs = require("fs");
app.get("/", (request, response) => {
//  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);


const { FrozenClient } = require("frozencord");
const client = new FrozenClient({
    prefix: "f.",
    withTyping: true, 
    ownerId: "349674631260667925", 
    readyMessage: (client) => `Ready as ${client.user.tag}`, 
    game: {
        name: `f.help`,
        type: "PLAYING"
    } 
});


fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    this.client.on(eventName, event.bind(null, this.client));
    delete require.cache[require.resolve(`./events/${file}`)];
  });
});



client.login(process.env.TOKEN);
