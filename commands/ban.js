const { Command } = require('discord-akairo');

class BanCommand extends Command {
    constructor() {
        super('ban', {
            aliases: ['ban'],
            args: [
                {
                    id: 'member',
                    type: 'member'
                },
                {
                    id: 'reason',
                    type: 'string'
                }
            ],
            clientPermissions: ['BAN_MEMBERS'],
            userPermissions: ['BAN_MEMBERS'],
            channelRestriction: 'guild'
        });
    }

    exec(msg, args) {
        if(!args.member) {
            return msg.reply('No member found with that name/id.');
        }

        return args.member.ban({days: 7, reason: args.reason}).then(() => {
            return msg.reply(`${args.member} was banned for Reason: "${args.reason}"!`);
        });
    }
}

module.exports = BanCommand;