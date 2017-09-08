const { Command } = require('discord-akairo');

class OffCommand extends Command {
    constructor() {
        super('off', {
            aliases: ['off', 'shutdown'],
            prefix: '?',
            cooldown: 60000,
            ratelimit: 1,
            channelRestriction: 'dm',
            ownerOnly: true,
            category: 'owner'
        });
    }

    exec(msg) {
        console.log(`${msg.author.username} issued turn off. Disconnecting...`);
        this.client.destroy().then(
            console.log('Disconnected from Discord API.')
        );
    }
}

module.exports = OffCommand;