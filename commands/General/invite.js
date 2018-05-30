const { Command } = require("frozencord"); // eslint-disable-line

class invite extends Command {

    constructor(client) {
        super(client);
        this.name = "invite";
        this.description = "Invite FireBot.";
        this.guildOnly = true;
        this.args = [
            {
                name: "command",
                type: "string"
            }
        ];
    }

    async run (message) {
        message.channel.send("Firebot's invite: https://discordapp.com/oauth2/authorize?client_id=451404736848068621&scope=bot&permissions=8 ")
    }

}

module.exports = invite;
