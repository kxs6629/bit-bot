const { SlashCommandBuilder} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName("plus")
    .setDescription("Upvote Someone's Bit"),
    async execute(interaction){
        await interaction.reply('tight');
    },
};