/** @format */

const Command = require("../Structures/Command.js");
const { MessageActionRow, bM } = require('discord.js');
const Discord = require("discord.js");

module.exports = new Command({
	name: "ll",
	description: "Shows an clod",
	permission: "SEND_MESSAGES",
	async run(message, args, client) {
		const embed = new Discord.MessageEmbed();

		embed
			
			.setTitle("***==Modulo Sospettati==***")

			.setDescription(
				"Nome del sospettato:\n\nMotivo:\n\nAuto:\n\nFirma\n\n"
			)
			.setColor("BLACK")
            .setFooter("--Firma: Alto Comando--")


            message.channel.send({ embeds: [embed]})
		.then(msg => {
			message.delete()
			setTimeout(() => 5000)
		  })
		  .catch()
		
	}
});
