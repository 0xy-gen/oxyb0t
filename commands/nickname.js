const { Command } = require('discord-akairo');

class NicknameCommand extends Command {
    constructor() {
        super('nickname', {
            aliases: ['nickname'],
            channelRestriction: 'guild'
        });
    }

    exec(msg) {
        if(msg.member.nickname = null) {
            msg.reply("You don't have any nickname yet!");
        }
        return msg.reply(`Your nickname is ${msg.member.nickname}.`);
    }
}

module.exports = NicknameCommand;