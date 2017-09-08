const { Command } = require('discord-akairo');

class AddCommand extends Command {
    constructor() {
        super('addcmd', {
            aliases: ['addcmd', 'cmd+'],
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
        return msg.reply(`Successfully loaded command \`${commandID}\`.`).then(console.log(`Loaded new command: ${commandID}`)).catch(msg.reply(`Could not load command \`${commandID}\``));
    }
}

module.exports = AddCommand;