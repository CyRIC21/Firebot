const { Command } = require("frozencord"); // eslint-disable-line

class support extends Command {

    constructor(client) {
        super(client);
        this.name = "support";
        this.description = "Displays the support server for the bot.";
        this.guildOnly = true;
        this.args = [
            {
                name: "command",
                type: "string"
            }
        ];
    }

    async run (message) {
        message.channel.send("Firebot's support server https://discord.gg/RKschgY")
    }

}

module.exports = support;
