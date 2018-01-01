const { Inhibitor } = require('discord-akairo');

class BlacklistInhibitor extends Inhibitor {
    constructor() {
        super('blacklist', {
            reason: 'blacklisted'
        });
    }

    exec(msg) {
        const blacklist = ['12314567890'];
        return blacklist.includes(msg.author.id);
    }
}

module.exports = BlacklistInhibitor;
