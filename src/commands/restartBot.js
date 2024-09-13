const { SlashCommandBuilder} = require('discord.js');
const client = require('./../createClient.js')

module.exports = {
	data: 
		new SlashCommandBuilder()
		.setName('restart_bot')
		.setDescription('for w6'),
	async execute(interaction) {
		await process.exit();
	},
};