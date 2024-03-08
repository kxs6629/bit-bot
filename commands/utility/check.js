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
        // pull the user's information for the server from the database
        // display {user : rank : score}
        const user  = await UserInfo.findOne({where: { id:targetId.id}});
        
        if (user == null){
            console.log("new user!");
            UserInfo.create({id:targetId.id});
            const newUser = await UserInfo.findOne({where:{id:targetId.id}});
            await interaction.reply(`${targetId} has a score of: ${newUser.score}`);
        } else{
            await interaction.reply(`${targetId} has a score of: ${user.score}`);
        }
    }
};
// , raw : 'true', nest : 'true' 