/** @format */

const Event = require("../Structures/Event.js");

module.exports = new Event("ready", client => {
	console.log("Bot is ready!");


client.user.setPresence({ activities: [{ name: 'ItaRp', type: 'PLAYING'}], status: 'dnd' });

});

