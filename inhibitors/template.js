const { Inhibitor } = require("frozencord"); // eslint-disable-line

class CommandCounter extends Inhibitor {

    constructor(client) { // eslint-disable-line
        super(client);
        this.name = "template";
        this.description = "template inhibitor that is run when a users command has finished running.";
    }

        async run(message, command) {
            console.log(`${message.author.tag} ran ${command.name}`);
            client.channels.get("421483893754167318").send(`${message.author.tag} ran ${command.name}`)
    }

}

module.exports = CommandCounter;
