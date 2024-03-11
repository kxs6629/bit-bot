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
        /** 
         * pull the user's information for the server from the database
         * display {user : rank : score}
         * const user  = await UserInfo.findOne({where: { id:targetId.id}});
        */
        const targetId = interaction.options.getUser('user');
        const [userInfo, created] = await UserInfo.findOrCreate({where:{guild_id:interaction.guildId, user_id:targetId.id}});
        await interaction.reply(`${targetId} has a score of: ${userInfo.score}`);
    }
};
// , raw : 'true', nest : 'true' 