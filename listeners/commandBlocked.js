const { Listener } = require('discord-akairo');

class CommandBlockedListener extends Listener {
    constructor() {
        super('commandBlocked', {
            emitter: 'commandHandler',
            eventName: 'commandBlocked'
        });
    }

    exec(msg, command, reason) {
        switch(reason) {
            case 'owner':
                return msg.reply(`There was an error processing this command (Code: \`"${reason}"\`).\nThis command is Owner-Only.`).then(() => {
                    console.log(`${msg.author.username}#${msg.author.discriminator} was blocked from using "${command.id}" with Reason: ${reason}!`);
                });
                break;
            case 'guild':
                return msg.reply(`There was an error processing this command (Code: \`"${reason}"\`).\nThis command is Guild-Only.`).then(() => {
                    console.log(`${msg.author.username}#${msg.author.discriminator} was blocked from using "${command.id}" with Reason: ${reason}!`);
                });
                break;
            case 'dm':
                return msg.reply(`There was an error procesing this comannd (Code: \`"${reason}"\`).\nThis command is DM-Only.`).then(() => {
                    console.log(`${msg.author.username}#${msg.author.discriminator} was blocked from using "${command.id}" with Reason: ${reason}!`);
                });
                break;
            case 'clientPermissions':
                return msg.reply(`There was an error processing this command (Code: \`"${reason}"\`).\nI don't have enough Permissions to use this command.`).then(() => {
                    console.log(`${msg.author.username}#${msg.author.discriminator} was blocked from using "${command.id}" with Reason: ${reason}!`);
                });
                break;
            case 'userPermissions':
                return msg.reply(`There was an error processing this command (Code: \`"${reason}"\`).\nYou don't have permission to use this command!`).then(() => {
                    console.log(`${msg.author.username}#${msg.author.discriminator} was blocked from using "${command.id}" with Reason: ${reason}!`);
                });
                break;
            default:
                return msg.reply(`There was an unhandled error processing this command (Code: \`"${reason}"\`).\nContact 0xygen#1030 for further support.`).then(() => {
                    console.log(`${msg.author.username}#${msg.author.discriminator} was blocked from using "${command.id}" with Reason: ${reason}!`);
                });
        }
    }
}

module.exports = CommandBlockedListener;