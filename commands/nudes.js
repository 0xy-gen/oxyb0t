const { Command } = require('discord-akairo');

class NudesCommand extends Command {
    constructor() {
        super('nudes', {
            trigger: /(nudes)/gi
        });
    }

    exec(msg) {
        msg.react("👀");
    }
}

module.exports = NudesCommand;
