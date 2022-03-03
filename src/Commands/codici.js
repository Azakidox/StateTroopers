/** @format */

const Command = require("../Structures/Command.js");
const { MessageActionRow, bM } = require('discord.js');
const Discord = require("discord.js");

module.exports = new Command({
	name: "codici",
	description: "Shows an clod",
	permission: "SEND_MESSAGES",
	async run(message, args, client) {
		const embed = new Discord.MessageEmbed();

		embed
			
			.setTitle("I codici FDO")
			.setDescription("10-0 = *Attenzione.*\n10-1 = *Richiesta SWAT.*\n10-4 = *Ricevuto.*\n10-5 = *Ripetere il messaggio.*\n10-6 = *Occupato: Attendere tranne per urgenza.*\n10-8 = *In servizio radio.*\n10-9 = *Fuori servizio radio.*\n10-10 = *Rissa in corso.*\n10-11 = *Problema con cane.*\n10-14 = *Problemi dei malintenzionati.*\n10-23 = *Arrivato sul luogo.*\n10-24 = *Compito completato.*\n10-26 = *Soggetto arrestato.*\n10-31 = *Reato in corso.*\n10-32 = *Persona armata.*\n10-35 = *Allarme, hanno rapito un collega.*\n10-37 = *Veicolo sospetto.*\n10-38 = *Fermiamo veicolo*\n10-44 = *Fine pattugliamento.* \n10-48 = *Chiudere area.*\n10-50 = *Incidente stradale.*\n10-53 = *Blocco stradale.*\n10-57 = *Veicolo pirata.*\n10-58 = *Dirigere il traffico.*\n10-59 = *Facciamo una scorta.*\n10-78 = *Mi serve assistenza.*\n10-80 = *Inseguimento in corso.*\n10-87 = *Arrestate i controllati.*\n10-89 = *Allarme bomba.*\n10-90 = *Trasportare soggetto.*\n10-92 = *Veicolo in sosta vietata.*\n10-93 = *Assedio alla centrale.*\n10-98 = *Ci sta un'evazione in corso.*\n10-99 = *Tutte le unità devono intervenire alla posizione indicata.*\n\n**Questi codici vanno utilizzati mentre siete in radio/andate in servizio**")

			.setColor("BLUE")
            .setFooter("Potrebbero Aggiornarsi In qualsiasi momento.")
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
.setLabel("🟢CODICE PENALE🟢")
.setURL("https://docs.google.com/spreadsheets/d/1SBhKpjJGk4ttfGyAcI6QZoTYEvP9jcjjN_sft3tTFxY/edit?usp=drivesdk")
);