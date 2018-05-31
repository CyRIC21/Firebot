const { Command } = require("frozencord");
const superagent = require("superagent"); // eslint-disable-line

class invite extends Command {

    constructor(client) {
        super(client);
        this.name = "feet";
        this.description = "Get feet porn";
        this.guildOnly = true;
        this.args = [
            {
                name: "command",
                type: "string"
            }
        ];
    }

    async run (message) {
        let {body} = await superagent
        .get(`https://nekos.life/api/v2/img/feet`);
        if (!message.channel.nsfw) message.reply(" You must be in a N.S.F.W channel to use this command.");
      
        let hentaiEmbed = new RichEmbed()
        .setColor("RANDOM")
        .setTitle("Hentai")
        .setImage(body.url)
        .setFooter("Powered by nekos.life");
    
    
        message.channel.send(hentaiEmbed);
    }

}

module.exports = invite;
