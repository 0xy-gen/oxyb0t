const { Command } = require('discord-akairo');

class AyyCommand extends Command {
    constructor() {
        super('ayy', {
            trigger: /^ayy$/i
        });
    }

    exec(msg, match, groups) {
        return msg.util.send('lmao');
    }
}

module.exports = AyyCommand;