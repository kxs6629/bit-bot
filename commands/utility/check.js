const { SlashCommandBuilder, ApplicationCommandOptionType, User } = require('discord.js');
const UserInfo = require('../../models/UserInfo');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("check")
        .setDescription("Check someone's stats within the server")
        .addUserOption(option =>
            option
                .setName('user')
                .setDescription("Who's information I should fetch")
                .setRequired(true)
        ),
    async execute(interaction){
        const targetId = interaction.options.getUser('user');
        console.log(targetId.id);
        const targetUser = interaction.guild.members.fetch(targetId);

        // pull the user's information for the server from the database
        // display {user : rank : score}
        const user  = await UserInfo.findOrCreate({where: { id:targetId.id} });
        console.log(user);
        console.log(user.score);

        // await UserInfo.findOne({where: {id: target.id}})
        await interaction.reply(`${targetId} has a score of: ${user.UserInfo.score}`);
    }
};