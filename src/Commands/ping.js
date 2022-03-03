/** @format */

const Command = require("../Structures/Command.js");

module.exports = new Command({
	name: "ping",
	description: "Shows the ping of the bot!",
	permission: "SEND_MESSAGES",
	async run(message, args, client) {
		
		const msg = await message.reply(`Ping: ${client.ws.ping} ms.`);

	}
});
