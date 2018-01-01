const { Command } = require('discord-akairo');

class NaniCommand extends Command {
    constructor() {
        super('nani', {
            trigger: /^nani$/i
        });
    }

    exec(msg, match, group) {
        console.log('Returning dank meme...');
        msg.util.send('OMAE WA MOU SHINDEIRU\nhttps://i.makeagif.com/media/2-21-2015/RDVwim.gif').then(() => {
            console.log('Meme sent.');
        });
        return;
    }
}

module.exports = NaniCommand;