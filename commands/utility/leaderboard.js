const { SlashCommandBuilder } = require('discord.js');
const UserInfo = require('../../models/UserInfo');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("leaderboard")
        .setDescription("Get the top 3 users within the server"),
    async execute(interaction){
        // pull list of scored users in the lobby and display the top 3
        const leaderboard = await UserInfo.findAll({where: {guild_id:interaction.guildId}, order:[['score','DESC']],limit:3},);
        if(leaderboard.length > 0){
            let leaderboardString = "```\n"
            let x = 1
            leaderboard.forEach(element => {
                console.log(leaderboardString);
                leaderboardString+=  `#${x}: ${interaction.guild.members.cache.get(element.user_id).displayName} | ${element.score}\n`
                x++;
            });
            leaderboardString+='```';
            await interaction.reply(leaderboardString);
        }
        else{
            await interaction.reply("No users have a score in this server (yet)");
        }
    },
};