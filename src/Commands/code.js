const Command = require("../Structures/Command.js");

const Discord = require("discord.js");

module.exports = new Command({
	name: "code",
	description: "Shows an say message",
	permission: "SEND_MESSAGES",
	async run(message, args, client) {
        var args = message.content.split(/\s+/);
        var testo;
        testo = args.slice(1).join(" ");
        if (!testo) {
            const embed = new Discord.MessageEmbed()

            .setDescription("**AYBEe** : **Codice mappa degli addestramenti**\n**Italy** è il codice della mappa principale di ItaRp\n\n> Se non sapete come entrare nella mappa tramite codice [clicca qua](https://docs.google.com/document/d/1YJtlTmZhJwIqsodNjw8iXZmuGgukl6mEVVhfPFhrbLs/edit?usp=sharing)")
.setColor("A37E5A")

message.channel.send({ embeds: [embed] })
.then(msg => {
    message.delete()
    setTimeout(() => 5000)
  })
  .catch()

}
}});