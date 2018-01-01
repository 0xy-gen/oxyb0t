const { Command } = require('discord-akairo');

class RemoveCommand extends Command {
    constructor() {
        super('remcmd', {
            aliases: ['remcmd', 'cmd-'],
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
        this.handler.add(commandID);
        return msg.reply(`Successfully removed command \`${commandID}\`.`).then(console.log(`Removed command: ${commandID}`)).catch(msg.reply(`Could not remove command \`${commandID}\``));
    }
}

module.exports = RemoveCommand;