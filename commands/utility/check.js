const { SlashCommandBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName("Check")
        .setDescription("Check someone's stats within the server"),
    async execute(interaction){
        // pull the user's information for the server from the database
        // display {user : rank : score}
        await interaction.reply("");
    }
};