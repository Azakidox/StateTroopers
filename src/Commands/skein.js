const Command = require("../Structures/Command.js");

const Discord = require("discord.js");

module.exports = new Command({
	name: "skein",
	description: "Shows an say message",
	permission: "SEND_MESSAGES",
	async run(message, args, client) {
        var args = message.content.split(/\s+/);
        var testo;
        testo = args.slice(1).join(" ");
        if (!testo) {
            const embed = new Discord.MessageEmbed()
            .setTitle("⚠Skein è Gay⚠")
            .setDescription("Attenzione! Skein è Gay!\brAttenzione! Skein è Gay!")
.setColor("PURPLE")

            message.channel.send({ embeds: [embed]});
            return
        }
        message.delete()
        message.channel.send(`<@${938112989486256149}>`)
    }
})