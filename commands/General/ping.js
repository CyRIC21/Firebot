const { RichEmbed } = require("discord.js");
const { Command } = require("frozencord");


class ping extends Command {

    constructor(client) {
        super(client);
        this.name = "ping";
        this.description = "Get the latency of FireBot.";
        this.guildOnly = true;
        this.args = [
            {
                name: "command",
                type: "string"
            }
        ];
    }

    async run (message) {
        const embed = new RichEmbed()
        .setColor(15400990)
        .setDescription(`${this.client.emojis.find(x => x.name === "loading1")} ${this.client.emojis.find(x => x.name === "loading2")} ${this.client.emojis.find(x => x.name === "loading3")} ${this.client.emojis.find(x => x.name === "loading")} Pong! Time - **${Date.now() - message.createdTimestamp}ms** API Latency is **${Math.round(this.client.ping)}ms** ${this.client.emojis.find(x => x.name === "loading3")} ${this.client.emojis.find(x => x.name === "loading2")} ${this.client.emojis.find(x => x.name === "loading1")} ${this.client.emojis.find(x => x.name === "loading")}`);
      message.channel.send(embed);
    }

}

module.exports = ping;