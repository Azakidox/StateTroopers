/** @icecream */

const Command = require("../Structures/Command.js");

const Discord = require("discord.js");

module.exports = new Command({
    name: "helper",
    description: "show list staff",
	permission: "ADMINISTRATOR",

    async run(message, args, client) {
		const embed = new Discord.MessageEmbed()
		.setDescription("Può: \n `•` Cacciare \n `•` Mutare \n `•` Cambiare nickname \n \n Il suo compito è di dare assistenza ai nuovi utenti o alle varie richieste nei ticket. Deve avere una buona conoscenza del server. \n (Verrano date le info solo se accettato)")
		.setTitle("Helper")
		.setThumbnail('https://www.pinclipart.com/picdir/big/100-1001979_support-icon-technical-support-clipart.png')
		.setColor("GREEN");
		message.channel.send({ embeds: [embed], components: [row]});
		
}
})

			const row = new Discord.MessageActionRow()
			.addComponents(
		new Discord.MessageButton()
			.setStyle("LINK")
			.setLabel("🔗 INIZIA!")
			.setURL("https://www.bing.com/images/search?view=detailV2&ccid=1%2bI8TZnZ&id=FD798C3AB48DA48F2C0992E0C05B1820A2DD9BAF&thid=OIP.1-I8TZnZm0iLdZgCifBHFgHaFj&mediaurl=https%3a%2f%2fi.insider.com%2f602ee9ced3ad27001837f2ac&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.d7e23c4d99d99b488b75980289f04716%3frik%3dr5vdoiAYW8Dgkg%26pid%3dImgRaw%26r%3d0&exph=1757&expw=2343&q=rickrool&simid=608051585561593678&FORM=IRPRST&ck=27BB6BE0BC125F64BF7340ED2A1DFAB4&selectedIndex=2&ajaxhist=0&ajaxserp=0")
			);