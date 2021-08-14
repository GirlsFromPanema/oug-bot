import Command from '../struct/Command';
import { Message, MessageEmbed } from 'discord.js';

abstract class PingCommand extends Command {
  constructor() {
    super({
      name: 'ping',
      aliases: ['p'],
      description: 'Pong!',
    });
  }

  exec(message: Message) {

    const replyembed = new MessageEmbed()
    .setTitle("🔥 Pong!")
    .setColor("BLURPLE")
    .setDescription(`♻️ My Ping is: ${this.client?.ws.ping}`)
    .setThumbnail("https://cdn.discordapp.com/attachments/876189044684509235/876207258218954853/color_logo_transparent_1.png")
    .setTimestamp()
    .setFooter(`Requested from: ${message.author.username}`)


    return message.reply(replyembed);
  }
}

export default PingCommand;