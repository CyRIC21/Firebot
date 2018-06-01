const http = require('http');
const express = require('express');
const app = express();
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

client.login(process.env.TOKEN);
