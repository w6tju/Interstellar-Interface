const {Client,GatewayIntentBits } = require('discord.js');

//create client
const client = new Client({ intents: [GatewayIntentBits.Guilds] })

module.exports = client