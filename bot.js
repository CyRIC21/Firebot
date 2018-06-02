const http = require('http');
const express = require('express');
const app = express();
const mongoose = require("mongoose");
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
        name: `with ${client.guilds.size > 1 ? `${client.guilds.size} guilds` : `1 guild`} | f.help`,
        type: "PLAYING"
    } 
});

mongoose.connect(process.env.MONGODB);
client.db = mongoose.connection;
client.db.once("open", () => console.log("Connected to MongoDB"));
client.db.on("error", (err) => console.error(err));





client.login(process.env.TOKEN);
