/** @format */

const Command = require("../Structures/Command.js");
const Discord = require("discord.js");

module.exports = new Command({
	name: "on",
	description: "Shows an naur",
	permission: "SEND_MESSAGES",
	async run(message, args, client) {
		const embed = new Discord.MessageEmbed();

		embed
			.setTitle("REGOLE GENERALI STATE TROOPERS")
            .setAuthor(
				message.author.username,
				message.author.avatarURL({ dynamic: true }),
			)
			.setDescription(
				"Il bot è andato Online con successo! O Sul Cesso, decidi te"
			)
			.setColor("RED")
			.addFields(
				{ name: 'Salve', value: 'Ciao', inline: 'true'},
				{ name: 'Salve', value: 'Ciao'},
				{ name: 'Salve', value: 'Ciao'},
				{ name: 'Salve', value: 'Ciao'},
			)
			.setFooter('Some footer text here', 'https://i.imgur.com/AfFp7pu.png');
			

		message.reply({ embeds: [embed] });
	}
});