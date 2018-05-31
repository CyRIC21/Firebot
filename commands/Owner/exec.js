const { Command } = require("frozencord"); // eslint-disable-line
const { post } = require("snekfetch");
const execute = require('child_process').exec;




class exec extends Command {

    constructor(client) {
        super(client);
        this.name = "exec";
        this.description = "execute something";
        this.guildOnly = true;
        this.ownerOnly = true;
        this.args = [
            {
                name: "code",
                type: "string",
                required: true
            }
        ];
        this.botPerms = ["SEND_MESSAGES", "EMBED_LINKS"];
        this.aliases = [];

        async; run(message, [code], args); {
            execute(`${args.join(' ')}`, (error, stdout) => {
                const response = (error || stdout);
                message.channel.send(`Ran: ${args.join(" ")}\n${response}`, {code: "asciidoc", split: "\n"}).catch(console.error);
              });
            }
        }
        
    }


 


module.exports = exec;
