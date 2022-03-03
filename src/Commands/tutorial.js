/** @format */

const Command = require("../Structures/Command.js");
const { MessageActionRow, bM } = require('discord.js');
const Discord = require("discord.js");

module.exports = new Command({
	name: "tutorial",
	description: "Shows an clod",
	permission: "SEND_MESSAGES",
	async run(message, args, client) {
		const embed = new Discord.MessageEmbed();

		embed
			
            .setAuthor("Alto Comando")
			.setTitle("COME ENTRARE/USCIRE DAL SERVIZIO")
			.setDescription(
				"> Dopo aver scritto:``!inizio-turno State Troopers`` in <#925398554728624149> siete in **On Duty**\n\n> Alla fine del turno dovete scrivere:``!fine-turno State Troopers`` (nello stesso canale) per finire il turno "
			)

			.setColor("#A37E5A")

		message.channel.send({ embeds: [embed] })
		.then(msg => {
			message.delete()
			setTimeout(() => 5000)
		  })
		  .catch()
		
	}
});