const { ActionRowBuilder, ButtonBuilder, ButtonStyle, SlashCommandBuilder} = require('discord.js');

module.exports = {
    cooldown: 30,
    data: new SlashCommandBuilder()
    .setName("vote")
    .setDescription("Start a vote to rate someone's bit")
    .addUserOption(option =>
        option
            .setName('target')
            .setDescription('Person to call vote on')
            .setRequired(true)
        ),
    async execute(interaction){
        const target = interaction.options.getUser('target');

        const plus = new ButtonBuilder()
        .setCustomId('plus')
        .setLabel('+1')
        .setStyle(ButtonStyle.Success);
        // .setEmoji('')

        const minus = new ButtonBuilder()
        .setCustomId('minus')
        .setLabel('-1')
        .setStyle(ButtonStyle.Danger);
        // .setEmoji('')

        const row = new ActionRowBuilder()
        .addComponents(plus, minus);

        const response = await interaction.reply({
            content: `Did ${target} make a funny?`,
            components: [row],
        });

        const collector = response.createMessageComponentCollector({componentType: ComponentType.Button , time:30_000});

        collector.on('collect', async i =>{
            const selection = i.values[0];
            await i.reply(`${i.user.username} has selected ${selection}`);
        });
    },
};
// Where I left off:
// Figuring out vote command functionality
// Do I use buttons?
// How do I ensure all users can only vote once?