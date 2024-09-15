const { SlashCommandBuilder} = require('discord.js');
const client = require('./../createClient.js')
const MS = require('./../Axios.js')

module.exports = {
	data: 
		new SlashCommandBuilder()
		.setName('get_datastore')
		.setDescription('get a datastore key')
		.addStringOption((option)=>
		option
			.setName('game_version')
			.setDescription('game version to use')
			.addChoices({ name: 'DU', value: 'DU' },{ name: 'PTU', value: 'PTU' },{ name: 'LIVE', value: 'LIVE' })
			.setRequired(true))
        .addStringOption((option) =>
			option
			.setName('datatore')
			.setDescription('datastore the key is in')
			.addChoices({name:'Player',value:'PlrData'},{name:'game',value:'GameData'})
			.setRequired(true)
		)
		.addStringOption((option)=>
		option
			.setName('key')
			.setDescription('key name')
			.setRequired(true)
		),
	async execute(interaction) {
		await MS.MessageSend(interaction.options.get('msg').value,"Annoucements",interaction);
	},
};