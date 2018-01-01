const { Listener } = require('discord-akairo');

class UnhandledRejectionListener extends Listener {
    constructor() {
        super('unhandledRejection', {
            emitter: 'process',
            eventName: 'unhandledRejection'
        });
    }

    exec(err) {
        console.error(err);
    }
}

module.exports = UnhandledRejectionListener;