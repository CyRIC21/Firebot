const { Inhibitor } = require("frozencord"); // eslint-disable-line
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
class CommandCounter extends Inhibitor {

    constructor(client) { // eslint-disable-line
        super(client);
        this.name = "template";
        this.description = "template inhibitor that is run when a users command has finished running.";
    }

        async run(message, command) {
            console.log(`${message.author.tag} ran ${command.name}`);
            client.channels.get("421483893754167318").message.channel.send(`${message.author.tag} ran ${command.name}`)
    }

}

module.exports = CommandCounter;
