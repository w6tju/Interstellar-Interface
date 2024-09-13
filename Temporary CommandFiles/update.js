const { SlashCommandBuilder,EmbedBuilder,} = require('discord.js');
const client = require('./../createClient.js')

function Embed(interaction) {
	return exampleEmbed = new EmbedBuilder()
		.setColor(0x7304e9)
		.setTitle('UPDATE FOR GALAXIES END')
		.setAuthor({ name: `${interaction.user.username}`,})
		.setDescription('update details below')
		.setThumbnail('https://cdn.discordapp.com/icons/1003395666606829568/8ae9e2e3136d69e2a3b7a9f63559f099.webp?size=96')
		.addFields(
			{ name: `${interaction.options.get('type').value}`, value: `${interaction.options.get('info').value}` },
		
		)
		.setTimestamp()
		.setFooter({ text: 'Ⓒ  Galaxies End Development',});
	}




module.exports = {
	data: 
		new SlashCommandBuilder()
		.setName('update')
		.setDescription('send a game update')
		.addStringOption((option) =>
			option
			.setName('info')
			.setDescription('the update info')
			.setRequired(true)
			)
			.addStringOption((option) =>
			option
			.setName('type')
			.setDescription('the update type')
			.setRequired(true)
			.addChoices({ name: 'Minor', value: 'Minor' }, { name: 'Major', value: 'Major' }, {name: 'Bugfix', value: 'Bugfix'})
			),
	async execute(interaction) {
		await client.channels.cache
					.get("1004877200979398848")
					.send({content:`<@&1033877902338568232>`, embeds: [Embed(interaction)] })
	},
};

