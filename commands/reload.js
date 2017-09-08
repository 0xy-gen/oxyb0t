const { Command } = require('discord-akairo');

class ReloadCommand extends Command {
    constructor() {
        super('reload', {
            aliases: ['reload', 'rlcmd'],
            args: [
                {
                    id: 'commandID'
                }
            ],
            ownerOnly: true,
            category: 'owner'
        });
    }

    exec(msg, args) {
        this.handler.reload(args.commandID);
        return msg.reply(`Reloaded command \`${args.commandID}\``).then(console.log(`Reloaded command: ${args.commandID}`)).catch(console.error);
    }
}

module.exports = ReloadCommand;