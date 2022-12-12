const {
  SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle,
} = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('guide')
    .setDescription('Makes a button!'),

  row: new ActionRowBuilder()
    .addComponents(
      new ButtonBuilder()
        .setCustomId('primary')
        .setLabel('Click me!')
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setURL('https://github.com/RVCC-IDMX/discord-bot-RadicaIEdward')
        .setLabel('Take me to your repo!')
        .setStyle(ButtonStyle.Link),
    ),
  async execute(interaction) {
    await interaction.reply({ content: 'I think you should,', components: [module.exports.row] });
  },
};
