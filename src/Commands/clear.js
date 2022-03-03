const Command = require("../Structures/Command");

module.exports = new Command({
	name: "clear",
	description: "Clear an amount of messages",
	permission: "MANAGE_MESSAGES",
	async run(message, args, client) {
		const amount = args[1];

		if (!amount || isNaN(amount))
			return message.reply(
				`${
					amount == undefined ? "" : amount
				} inserisci un numero da 1 a 100!`
			);

		const amountParsed = parseInt(amount);

		if (amountParsed > 100)
			return message.reply("Non si posso eliminare più di 100 messaggi!");

		message.channel.bulkDelete(amountParsed);

		const msg = await message.channel.send(
			`Sono stati eliminati ${amountParsed} messaggi!`
		);

		setTimeout(() => msg.delete(), 5000);
	}
});
 