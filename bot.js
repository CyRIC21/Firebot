const { FrozenClient } = require("frozencord");
const client = new FrozenClient({
    prefix: "f.", // Set this to what ever you want the default is !.
    withTyping: true, // Set this to false if you don't want the bot to type when running commands.
    ownerId: "349674631260667925", // A string of the owners id. Default is the id gotten from the client application.
    readyMessage: (client) => `Ready as ${client.user.tag}`, // The ready message for the client.
    game: {
        name: "f.help | Frozencord bot",
        type: "PLAYING"
    } // Sets the game of the bot.
});

client.login(process.env.TOKEN);