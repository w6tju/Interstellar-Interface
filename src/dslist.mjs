import { Universe, DataStore } from "@daw588/roblox.js";
const { SlashCommandBuilder,} = import('discord.js');
const universe = new Universe(3804357941,"21Np1Mss60Wqqt7KEn+gCgaFt+dz2iRgkKay7DhKvBE8b8Kd");
const client = require('./../createClient.js')

module.exports = {
	data: 
		universe.ListDataStoresAsync()
	}