const { AkairoClient } = require('discord-akairo');
const auth = require('./auth.json');
const client = new AkairoClient({
    ownerID: '207261911631396865',
    prefix: '#>',
    emitters: {
        process
    },
    handleEdits: true,
    commandUtil: true,
    defaultCooldown: 3000,
    commandUtilLifetime: 600000,
    commandDirectory: './commands/',
    inhibitorDirectory: './inhibitors/',
    listenerDirectory: './listeners/'
}, {
    disableEveryone: true
});

client.login(auth.token);