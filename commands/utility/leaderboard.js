const { SlashCommandBuilder } = require('discord.js');
const UserList = require('../../models/UserList');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("leaderboard")
        .setDescription("Get the top 3 users within the server"),
    async execute(interaction){
        // pull list of scored users in the lobby and display the top 3
        
        // LEFT OFF HERE
        // Query to get leaderboard respective to users in server command was
        // issued from
        try{
            // gets list of UserList (UserID and LeaderboardID)
            const lb = await UserList.findAll({where: {Leaderboard_idLeaderboard:interaction.guild.id}, limit:3});
            
        lb.forEach(element => {
            // query to 
        });
        let leaderboardString = "```"
        }// also maybe the unfunniest?
        catch(error){
            await interaction.reply("No leadboard exists for this server yet!");
        }
    },
};