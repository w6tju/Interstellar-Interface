const axios = require('axios').default
const Version_Ids = {"DU":0,"PTU":5627854638,"LIVE":5627854638} 
const RBX_Key = '87LVKBOwS0Si/rMSYZ7dUaoD3XSvtjG+ekFhoMUsb2xeXxY7'

module.exports.MessageSend = async function MessageSend(Message, Topic, interaction) {
    const universe = Version_Ids[interaction.options.get("game_version")]
    const response = await axios.post(
        `https://apis.roblox.com/messaging-service/v1/universes/${universe}/topics/${Topic}`,
        {
            'message': Message
        },
        {
            headers: {
                'x-api-key': RBX_Key,
                'Content-Type': 'application/json'
            }
        }
    ).catch(err =>{
        console.log(err.response.status)
        if (err.response.status == 401) return interaction.reply({ content:`**Error:** API key not valid for operation, user does not have authorization`, ephemeral: true })
        if (err.response.status == 403) return interaction.reply({ content:`**Error:** Publish is not allowed on universe.`,ephemeral: true })
        if (err.response.status == 500) return interaction.reply({ content:`**Error:** Server internal error / Unknown error.`,ephemeral: true })
        if (err.response.status == 400){
            if (err.response.data == "requestMessage cannot be longer than 1024 characters. (Parameter 'requestMessage')") return interaction.reply({ content:`**Error:** The request message cannot be longer then 1024 characters long.`,ephemeral: true })
            console.log(err.response.data)
        }
    })
    if (response){
        if (response.status == 200) return interaction.reply({ content:`Message sucessfully sent!`,ephemeral: true })
        if (response.status != 200) return interaction.reply({ content:`**Error:** An unknown issue has occurred.`,ephemeral: true })
    }
}

module.exports.GetDataStore = async function GetDataStore(DataStore,Key,interaction) {
    const universe = Version_Ids[interaction.options.get("game_version")]
    const response = await axios.get(
        `/cloud/v2/universes/${universe}/data-stores/${DataStore}/entries/${Key}`
    )
    return response
}