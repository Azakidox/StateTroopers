/** @format */

const Command = require("../Structures/Command.js");
const { MessageActionRow, bM } = require('discord.js');
const Discord = require("discord.js");

module.exports = new Command({
	name: "lol",
	description: "Shows an clod",
	permission: "SEND_MESSAGES",
	async run(message, args, client) {
		const embed = new Discord.MessageEmbed();

		embed
			
			.setTitle("***Dichiarazione di missione***")
            .setThumbnail('https://images-ext-1.discordapp.net/external/xCb1QYcAAGRz-SollJufLxlueIxNZgwLi6M9yOIgKX4/%3Fwidth%3D480%26height%3D480/https/media.discordapp.net/attachments/877891385007697950/936018114833956914/xpersh2.png?width=100&height=100')
			.setDescription(
				"L'obiettivo dei servizi di polizia nella città di Austin è\nproteggere e mantenere l'elevata qualità della vita\ndei cittadini di Austin e prevenire la criminalità. Il\ndipartimento è responsabile del miglioramento della\nsicurezza generale della comunità e della\nsalvaguardia dei diritti degli individui. La nostra\nmissione è fornire il massimo livello di sicurezza,\nservizio e protezione ai cittadini di Austin.\n\n> ●`SHERIFF`\n> ●`STATE TROOPER`\n> ●`POLICE`\n\n__**REQUISITI PER ENTRARE NEI TEAM**__\n> ● ESSERE RISPETTOSO\n> ● LINGUAGGIO PROFESSIONALE\n > ● AVERE ESPERIENZA RP\n> ● AVERE ESPERIENZA IN RP POLICE-SHERIFF\n> ● RISPETTARE I SUPERVISORI\n\n-----------------------------------------------------------\n***-***[***Sheriff Departement***](https://forms.gle/DLwir3rNRF5wPg2H7)\n***-***[***State Trooper***](https://forms.gle/sHVMduzVuX9gayMi6)\n***-***[***Police Departement***](https://forms.gle/qUKm7xiumcBDh82h7)\n-----------------------------------------------------------\n***-***[***Application FIre/EMS Departement***](https://forms.gle/DLwir3rNRF5wPg2H7)"
			)
			.setColor("BLACK")
            .setFooter("TEAM WHITELISTED")


            message.channel.send({ embeds: [embed]})
		.then(msg => {
			message.delete()
			setTimeout(() => 5000)
		  })
		  .catch()
		
	}
});
