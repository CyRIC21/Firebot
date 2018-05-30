const { Command } = require("frozencord"); // eslint-disable-line

class Help extends Command {

    constructor(client) {
        super(client);
        this.name = "help";
        this.description = "Displays the help for the bot.";
        this.guildOnly = true;
        this.args = [
            {
                name: "command",
                type: "string"
            }
        ];
    }

    async run (message) {
        message.channel.send("Firebot's command list: ``f.eval``: Evaluate code. ``f.finduser``: find a user. ``f.help``: Shows this message")
    }

}

module.exports = Help;