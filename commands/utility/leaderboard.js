const { SlashCommandBuilder } = require('discord.js');
const Leaderboard = require('../../models/Leaderboard');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("leaderboard")
        .setDescription("Get the top 3 users within the server"),
    async execute(interaction){
        // pull list of scored users in the lobby and display the top 3
        
        // LEFT OFF HERE
        // Query to get leaderboard respective to users in server command was
        // issued from
        const lb = await Leaderboard.findAll({});
        // also maybe the unfunniest?
        await interaction.reply("Top 3");
    },
};