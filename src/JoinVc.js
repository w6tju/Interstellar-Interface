const { SlashCommandBuilder,EmbedBuilder,Events} = require('discord.js');
const {AudioPlayer, createAudioResource, StreamType, entersState, VoiceConnectionStatus, joinVoiceChannel} = require("@discordjs/voice");
const discordTTS=require("discord-tts");
const client = require('./createClient.js')
client.once(Events.ClientReady, c => {
	console.log(`Ready! Logged in as ${c.user.tag}`);
	client.user.setActivity("scaring redacted",{type:"PLAYING"});
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
			
		}
});
