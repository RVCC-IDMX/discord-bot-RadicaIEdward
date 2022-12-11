const { SlashCommandBuilder } = require('discord.js');

new SlashCommandBuilder()
  .setName('ping')
  .setDescription('Replies with Pong!');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Replies with Pong!'),
  async execute(interaction) {
    await interaction.reply('Pong!');
  },
};
