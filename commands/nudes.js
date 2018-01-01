const { Command } = require('discord-akairo');

class NudesCommand extends Command {
    constructor() {
        super('nudes', {
            trigger: /(nudes)/gi
        });
    }

    async exec(msg) {
        await msg.react("👀");
    }
}

module.exports = NudesCommand;