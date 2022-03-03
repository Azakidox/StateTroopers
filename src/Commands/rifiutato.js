/** @icecream */

const Command = require("../Structures/Command.js");

const Discord = require("discord.js");

module.exports = new Command({
    name: "rifiutato",
    description: "Modulo Rifiutato!",
	permission: "SEND_MESSAGES",

    async run(message, args, client) {
		const embed = new Discord.MessageEmbed()
        .setTitle("Modulo Richiesta Inattività Rifiutato!!")
        .setAuthor(
            message.author.username,
            message.author.avatarURL({ dynamic: true }),
        )
		.setDescription("La tua Richiesta di Inattività è stata: ``rifiutata``")
        .setTimestamp()
		.setThumbnail('https://www.onlygfx.com/wp-content/uploads/2016/09/red-denied-stamp-2.png')
		.setColor("RED")
        .setFields(
            {name: "Conclusioni:", value: "> Se **non** sei daccordo con questa risposta contatta chi di dovere."}
        )
		message.channel.send({ embeds: [embed]})
        .then(msg => {
			message.delete()
			setTimeout(() => 5000)
		  })
		  .catch()
}
})