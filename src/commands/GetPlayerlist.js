const { SlashCommandBuilder} = require('discord.js');
const client = require('./../createClient.js')
const MS = require('./../Axios.js')

module.exports = {
	data: 
		new SlashCommandBuilder()
		.setName('get_system_playerlist')
		.setDescription('Get a list of active players in a specific sector')
		.addStringOption((option) =>
			option
			.setName('system')
			.setDescription('the system name you are looking for')
			.setRequired(true)
		),
	async execute(interaction) {
		await interaction.reply(interaction.options.get('system').value + " System Players 0/50")
	},
};