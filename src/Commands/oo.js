/** @format */

const Command = require("../Structures/Command.js");
const { MessageActionRow, bM } = require('discord.js');
const Discord = require("discord.js");

module.exports = new Command({
	name: "oo",
	description: "Shows an clod",
	permission: "SEND_MESSAGES",
	async run(message, args, client) {
		const embed = new Discord.MessageEmbed();

		embed
			
			.setTitle("Moduli Incidenti:")

			.setDescription(
				"Nome Agenti:\n\nLuogo:\n\nMacchine convolte:\n\nColore e modello:\n\nTarga:\n\nMotivo incidente:\n\nColpa:\n\nFoto: *(non obbligatoria)*\n\nFirma:"
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
