const { Inhibitor } = require('discord-akairo');

class BlacklistInhibitor extends Inhibitor {
    constructor() {
        super('blacklist', {
            reason: 'blacklisted'
        });
    }

    exec(msg) {
        const blacklist = ['134017172639842305'];
        return blacklist.includes(msg.author.id);
    }
}

module.exports = BlacklistInhibitor;