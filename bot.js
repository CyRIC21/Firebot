const { FrozenClient } = require("frozencord");
const client = new FrozenClient({
    prefix: "f.",
    withTyping: true, 
    ownerId: "349674631260667925", 
    readyMessage: (client) => `Ready as ${client.user.tag}`, 
    game: {
        name: "f.help | Frozencord bot",
        type: "PLAYING"
    } 
});

client.login(process.env.TOKEN);