const { Listener } = require('discord-akairo');

class ReadyListener extends Listener {
    constructor() {
        super('ready', {
            emitter: 'client',
            eventName: 'ready'
        });
    }

    exec() {
        console.log("I'm ready!");
        this.client.user.setGame('Optimizing Processes...');
    }
}

module.exports = ReadyListener;