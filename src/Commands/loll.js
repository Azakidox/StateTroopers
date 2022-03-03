/** @format */

const Command = require("../Structures/Command.js");
const { MessageActionRow, bM } = require('discord.js');
const Discord = require("discord.js");

module.exports = new Command({
	name: "loll",
	description: "Shows an clod",
	permission: "SEND_MESSAGES",
	async run(message, args, client) {
		const embed = new Discord.MessageEmbed();

		embed
			
			.setTitle("***                                                                PROCEDURE STATE POLICE***")

			.setDescription(
				"**COME EFFETTUARE UN FERMO**\n\nCome prima cosa comunicate la locazione del fermo, veicolo, modello, colore e targa. Dopo di che scende il driver facendo il giro dietro la eco (auto trooper) e si avvicina al lato del passeggero dove deve intimare al guidatore di spegnere il veicolo e mettere  le chiavi il cruscotto. Dopo di che procedete col normale fermo.\n\n**COSA FARE QUANDO METTI IN STATO DI FERMO/ARRESTO?**\n\nPer prima cosa bisogna comunicare lo stato di arresto/fermo e spiegare il motivo.\n\nDopo dovete leggere il Miranda warning, cioè i diritti\n\n> I diritti sono i seguenti:\n\n> La dichiaro in arresto/fermo. lei ha il diritto di rimanere in silenzio. Qualsiasi cosa dirà potrà essere e sarà usata contro di lei in tribunale. Ha diritto a un avvocato durante l'interrogatorio. Se non può permettersi un avvocato, gliene sarà assegnato uno d'ufficio\n\nDopo  tutto ciò  portate il sospettato in carcere o si rilascia.\n\n**Durante Sparatoria?**\n\nCome prima cosa chiamate Backup e nel mentre aspettate cercate di ricordare chi sono gli aggressori e le macchine.\n\nDurante una sparatoria tutti  coperti. *Il primo che l'alto comando becca allo scoperto durante una sparatoria verrà licenziato immediatamente!*"
			)
			.setColor("BLACK")
            .setFooter("Procedure State Police")


            message.channel.send({ embeds: [embed]})
		.then(msg => {
			message.delete()
			setTimeout(() => 5000)
		  })
		  .catch()
		
	}
});
