const { Events } = require('discord.js');
const db = require('../db.js');

module.exports = {
	name: Events.ClientReady,
	once: true,
	execute(client) {
		console.log(`as ${db.x}`)
		db.banks.sync();
		console.log(`Ready! Logged in as ${client.user.tag}`);
	},
};