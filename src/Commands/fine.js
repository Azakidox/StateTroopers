/** @format */

const Command = require("../Structures/Command.js");
const { MessageActionRow, bM } = require('discord.js');
const Discord = require("discord.js");

module.exports = new Command({
	name: "fine",
	description: "Shows an clod",
	permission: "SEND_MESSAGES",
	async run(message, args, client) {
		const embed = new Discord.MessageEmbed();

		embed
			
            .setAuthor(
				message.author.username,
				message.author.avatarURL({ dynamic: true }),
			)
			.setTitle("__TURNO LAVORATIVO FINITO__")
			.setDescription(
				"> ● Ha concluso il turno lavorativo da: ``State Trooper``\n\n> Ti ricordo di compilare il [rapporto a fine giornata](https://dyno.gg/form/84398c)\n\n> *Il rapporto deve essere svolto entro le 21:00 di ogni giorno, se qualcuno non lo farà regolarmente*\n> *potrà rischiare una sanzione.*"
			)
			.setThumbnail('https://cdn.discordapp.com/attachments/784781078497984532/933756204419797052/R_2.png')
			.setColor("BLUE")
            .setFooter('Turno concluso!')
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