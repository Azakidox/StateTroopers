/** @format */

const Command = require("../Structures/Command.js");
const { MessageActionRow, bM } = require('discord.js');
const Discord = require("discord.js");

module.exports = new Command({
	name: "gradi",
	description: "Shows an clod",
	permission: "SEND_MESSAGES",
	async run(message, args, client) {
		const embed = new Discord.MessageEmbed();

		embed
			
			.setTitle("***---RUOLI DIPARTIMENTO---***")

			.setDescription(
				"**--ALTO COMANDO--**\n\n● Colonnello\n\n● Tenente Colonnello\n\n●Capo\n\n**--UFFICIALI--**\n\n● Ass. Capo\n\n● Capitano\n\n● Vice Capitano\n\n● Tenente\n\n● Sergente maggiore\n\n● Sergente\n\n**--GRADUATI--**\n\n● Caporale\n\n● Soldato\n\n**--LOW--**\n\n● Soldato in prova.\n\n\n***---CORPI SPECIALI---***\n\n● [𝗖.𝗜.𝗗] 𝗖𝗿𝗶𝗺𝗶𝗻𝗮𝗹 𝗜𝗻𝘃𝗲𝘀𝘁𝗶𝗴𝗮𝘁𝗶𝗼𝗻𝘀 𝗗𝗶𝘃𝗶𝘀𝗶𝗼𝗻\n\n● [𝗦𝗥𝗧] 𝗦𝗽𝗲𝗰𝗶𝗮𝗹 𝗥𝗲𝘀𝗽𝗼𝗻𝘀𝗲 𝗧𝗲𝗮𝗺𝘀"
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
