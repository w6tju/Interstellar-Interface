const { SlashCommandBuilder,EmbedBuilder,} = require('discord.js');
const {AudioPlayer, createAudioResource, StreamType, entersState, VoiceConnectionStatus, joinVoiceChannel} = require("@discordjs/voice");
const discordTTS=require("discord-tts");
const client = require('./../createClient.js')

module.exports = {
	data: 
		new SlashCommandBuilder()
		.setName('say')
		.setDescription('a simple TTS command')
        .addStringOption((option) =>
			option
			.setName('message')
			.setDescription('the message you wish to say')
			.setRequired(true)
			),
	async execute(interaction) {
        await client.channels.cache
		let voiceConnection;
		let audioPlayer=new AudioPlayer();

		const stream=discordTTS.getVoiceStream(`${interaction.options.get("message").value}`);
        const audioResource=createAudioResource(stream, {inputType: StreamType.Arbitrary, inlineVolume:true});

        if(!voiceConnection || voiceConnection?.status===VoiceConnectionStatus.Disconnected){
            voiceConnection = joinVoiceChannel({
                channelId: interaction.member.voice.channelId,
                guildId: interaction.guildId,
                adapterCreator: interaction.guild.voiceAdapterCreator,
            });
			voiceConnection=await entersState(voiceConnection, VoiceConnectionStatus.Connecting, 5_000);
		}

		if(voiceConnection.status===VoiceConnectionStatus.Connected){
            voiceConnection.subscribe(audioPlayer);
            audioPlayer.play(audioResource);
        }
	},
};