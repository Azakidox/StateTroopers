/** @format */

const Command = require("../Structures/Command.js");
const { MessageActionRow, bM } = require('discord.js');
const Discord = require("discord.js");

module.exports = new Command({
	name: "rank",
	description: "Shows an clod",
	permission: "SEND_MESSAGES",
	async run(message, args, client) {
		const embed = new Discord.MessageEmbed();

		embed
			
			.setTitle("Rank State Troopers")
			.setDescription("")

            .setFooter("Dopo tanto tempo ecco a voi. Ora non scassateci i maron.")
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
.setLabel("🟠RANK DETTAGLIATI🟠")
.setURL("https://docs.google.com/spreadsheets/d/1SBhKpjJGk4ttfGyAcI6QZoTYEvP9jcjjN_sft3tTFxY/edit?usp=drivesdk")
);