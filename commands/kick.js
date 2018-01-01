const { Command } = require('discord-akairo');

class KickCommand extends Command {
    constructor() {
        super('kick', {
            aliases: ['kick', 'k'],
            args: [
                {
                    id: 'member',
                    type: 'member',
                    prompt: {
                        start: [
                            'Which member would you like to kick and why?'
                        ]
                    }
                },
                {
                    id: 'reason',
                    type: 'string'
                }
            ],
            cooldown: 10000,
            ratelimit: 1,
            channelRestriction: 'guild',
            clientPermissions: ['KICK_MEMBERS'],
            userPermissions: ['KICK_MEMBERS']
        });
    }

    exec(msg, args) {
        if(!args.member) {
            return msg.reply('No Member found with this Name/ID!');
        }

        return args.member.kick([args.reason]).then(() => {
            return msg.reply(`Successfully kicked ${args.member} with Reason: "${args.reason}"`);
        });
    }
}

module.exports = KickCommand;