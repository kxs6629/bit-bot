const { SlashCommandBuilder, ApplicationCommandOptionType, User } = require('discord.js');
const UserInfo = require('../../models/UserInfo');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("Check")
        .setDescription("Check someone's stats within the server")
        .addUserOption(option =>
            option
                .setName('target')
                .setDescription("Who's information I should fetch")
                .type(ApplicationCommandOptionType.Mentionable)
                .setRequired(true)
        ),
    async execute(interaction){
        const targetId = interaction.options.get('target').value;
        const targetUser = interaction.guild.members.fetch(targetId);

        // pull the user's information for the server from the database
        // display {user : rank : score}
        const user  = await UserInfo.findOrCreate({where: { id:targetId} });
        // await UserInfo.findOne({where: {id: target.id}})
        await interaction.reply(`${targetUser} has a score of ${user.get('score')}`);
    }
};