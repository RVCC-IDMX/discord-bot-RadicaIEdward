const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('echo')
    .setDescription('Replies with your input!')
    .addStringOption((option) => option.setName('input')
      .setDescription('The input to echo back')
      .setMaxLength(25)
      .setRequired(true))
    .addBooleanOption((option) => option.setName('ephemeral')
      .setDescription('Whether or not the echo should be ephemeral')
      .setRequired(true)),
  async execute(interaction) {
    const input = interaction.options.getString('input');
    const boolean = interaction.options.getBoolean('ephemeral');
    await interaction.reply({ content: `${input}`, ephemeral: boolean });
  },
};
