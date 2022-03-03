/** @format */

const Command = require("../Structures/Command.js");
const { MessageActionRow, bM } = require('discord.js');
const Discord = require("discord.js");

module.exports = new Command({
	name: "inizio",
	description: "Shows an clod",
	permission: "SEND_MESSAGES",
	async run(message, args, client) {
		const embed = new Discord.MessageEmbed();

		embed
			
            .setAuthor(
				message.author.username,
				message.author.avatarURL({ dynamic: true }),
			)
			.setTitle("__TURNO LAVORATIVO INIZIATO__")
			.setDescription(
				'> ● Ha iniziato il turno lavorativo da: ``State Trooper``\n\n> Questi sono i [Codici Penali](https://docs.google.com/spreadsheets/d/1SBhKpjJGk4ttfGyAcI6QZoTYEvP9jcjjN_sft3tTFxY/edit#gid=0)'
			)
			.setThumbnail('https://cdn.discordapp.com/attachments/784781078497984532/933756204419797052/R_2.png')
            .setFooter('Turno iniziato!')
			.setTimestamp()
			.setColor("#A37E5A")

		message.channel.send({ embeds: [embed] })
		.then(msg => {
			message.delete()
			setTimeout(() => 5000)
		  })
		  .catch()
		
	}
});