const Command = require("../Structures/Command.js");

const Discord = require("discord.js");

module.exports = new Command({
	name: "say",
	description: "Shows an say message",
	permission: "ADMINISTRATOR",
	async run(message, args, client) {
        var args = message.content.split(/\s+/);
        var testo;
        testo = args.slice(1).join(" ");
        if (!testo) {
            const embed = new Discord.MessageEmbed()
            .setTitle("Attenzione!")
            .setDescription("Inserire un messaggip")

            message.channel.send({ embeds: [embed]});
            return
        }
        message.delete()
        message.channel.send(testo)
    }
})