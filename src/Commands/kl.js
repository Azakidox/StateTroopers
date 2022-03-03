/** @format */

const Command = require("../Structures/Command.js");
const { MessageActionRow, bM } = require('discord.js');
const Discord = require("discord.js");

module.exports = new Command({
	name: "kl",
	description: "Shows an clod",
	permission: "SEND_MESSAGES",
	async run(message, args, client) {
		const embed = new Discord.MessageEmbed();

		embed
			
            .setAuthor(
				message.author.username,
				message.author.avatarURL({ dynamic: true }),
			)
			.setTitle("__VI RICORDO DI COMPILARE IL RAPPORTO DI FINE GIORNATA__")
			.setDescription(
				"> ● Stiamo notando che molti di voi non eseguono questa pratica spesso, ed ecco perchè vi stiamo avvertendo.\n> Per ora stiamo lasciando stare, da oggi in poi chi **NON** lo farà più di 3 volte\n> gli verrà assegnato uno strike.\n\n> ***Obbligatorio*** compilare il modulo.\n> I risultati verranno inviati in <#933065264407404654>"
			)
			.setThumbnail('https://cdn.discordapp.com/attachments/784781078497984532/933756204419797052/R_2.png')
			.setColor("BLUE")
            .setFooter('Turno concluso!')
			.setTimestamp()
			.setColor("#A37E5A")

            message.channel.send({ embeds: [embed], components: [row] })
		.then(msg => {
			message.delete()
			setTimeout(() => 5000)
		  })
		  .catch()
		
	}
});
const row = new Discord.MessageActionRow()
.addComponents(
new Discord.MessageButton()
.setStyle("LINK")
.setLabel("🎱CLICCA QUA PER COMPILARE IL RAPPORTO FINE GIORNATA🎱")
.setURL("https://dyno.gg/form/84398c")
);