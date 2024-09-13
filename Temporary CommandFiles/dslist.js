const { SlashCommandBuilder,EmbedBuilder,} = require('discord.js');
const client = require('./../createClient.js')

module.exports = {
	data: 
		new SlashCommandBuilder()
		.setName('dslist')
		.setDescription('get ds list for galaxies end'),
	async execute(interaction) {
		await client.channels.cache
					.get("1004877200979398848")
					.send({content:`dslist ${import(`./../dslist.mjs`)}`})
	},
};