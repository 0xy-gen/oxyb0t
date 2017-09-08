const { Command } = require('discord-akairo');

class ChannelIdCommand extends Command {
    constructor() {
        super('channelid', {
            aliases: ['channelid', 'cid'],
            args: [
                {
                    id: 'channel',
                    type: 'channel',
                    prompt: {
                        start: 'Which channel do you need the ID of?',
                        retry: 'This is not a valid channel, try again.'
                    },
                    default: message => message.channel
                }
            ],
            channelRestriction: 'guild'
        });
    }

    exec(msg, args) {
        const chanID = args.channel.id;

        return msg.reply('```javascript\n'+chanID+'```');
    }
}

module.exports = ChannelIdCommand;