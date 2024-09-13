const { SlashCommandBuilder} = require('discord.js');
const client = require('./../createClient.js')
const MS = require('./../Axios.js')

module.exports = {
	data: 
		new SlashCommandBuilder()
		.setName('announce')
		.setDescription('make annoucement to game')
        .addStringOption((option) =>
			option
			.setName('msg')
			.setDescription('message announce')
			.setRequired(true)
		),
	async execute(interaction) {
		await MS.MessageSend(interaction.options.get('msg').value,"Annoucements",interaction);
	},
};