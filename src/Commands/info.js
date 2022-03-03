/** @format */

const Command = require("../Structures/Command.js");
const { MessageActionRow, bM } = require('discord.js');
const Discord = require("discord.js");

module.exports = new Command({
	name: "info",
	description: "Shows an clod",
	permission: "SEND_MESSAGES",
	async run(message, args, client) {
		const embed = new Discord.MessageEmbed();

		embed
			
			.setTitle("Accademia State Troopers.")
			.setDescription("Nel file che potreste scaricare sono riportati le informazioni più utili che vi possano servire per imparare al meglio l'argomento e andare bene durante gli addestramenti.\n\n> *In fase di aggiornamento...*")
            .setFooter("Si potrebbe modificare...")
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
.setLabel(">>DOWNLOAD<<")
.setURL("https://discord.com/channels/922985175665766433/938116054306148402/938116296296513647")
);