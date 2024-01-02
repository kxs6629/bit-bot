const {SlashCommandBuilder} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("help")
        .setDescription("Get a summary of available commands"),
    async execute(interaction){
        await interaction.reply("Vote {username} : Initiate a vote for someone's bit\nCheck {username} : Check the current stats of a user\nLeadboard : Displays the top 3 scoring users in the current server\nHelp : It's too late");
    },
}

