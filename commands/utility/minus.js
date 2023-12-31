const { SlashCommandBuilder} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName("minus")
    .setDescription("Downvote Someone's Bit"),
    async execute(interaction){
        await interaction.reply('lame');
    },
};