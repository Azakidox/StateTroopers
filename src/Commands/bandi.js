/** @format */

const Command = require("../Structures/Command.js");
const { MessageActionRow, bM } = require('discord.js');
const Discord = require("discord.js");

module.exports = new Command({
	name: "bandi",
	description: "Shows an clod",
	permission: "ADMINISTRATOR",
	async run(message, args, client) {
		const embed = new Discord.MessageEmbed();

		embed
			

			.setTitle("__Moduli Giornalisti__")
			.setDescription(
				"*Se sei alla ricerca dei moduli per i giornalisti [clicca qua](https://www.bing.com/search?q=discord+developer&cvid=bdf5ad67ed2b4e2392cd38221aaabee7&aqs=edge.0.69i59l2j0l4j69i60l3.1984j0j4&FORM=ANAB01&PC=U531)*"
			)
			.setThumbnail('https://cdn.discordapp.com/attachments/936043774298177567/936053277483732992/tg2.jpg')
            .setFooter('TUTTO FREE! SEEEH')
			.setTimestamp()
			.setColor("PURPLE")

		message.channel.send({ embeds: [embed] })
		.then(msg => {
			message.delete()
			setTimeout(() => 5000)
		  })
		  .catch()
		
	}
});