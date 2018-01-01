const { Command } = require('discord-akairo');

class UserIdCommand extends Command {
    constructor() {
        super('userid', {
            aliases: ['userid', 'uid'],
            args: [
                {
                    id: 'user',
                    type: 'user',
                    prompt: {
                        start: 'Which user do you need the ID of?',
                        retry: 'Not a valid user, try again.'
                    },
                    default: message => message.author.id
                }
            ],
            channelRestriction: 'guild'
        });
    }

    exec(msg, args) {
        const id = args.user.id;
        return msg.reply('```javascript\n'+id+'```');
    }
}

module.exports = UserIdCommand;