const { SlashCommandBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName("leaderboard")
        .setDescription("Get the top 3 users within the server"),
    async execute(interaction){
        // pull list of scored users in the lobby and display the top 3
        // also maybe the unfunniest?
        await interaction.reply("Top 3");
    },
};