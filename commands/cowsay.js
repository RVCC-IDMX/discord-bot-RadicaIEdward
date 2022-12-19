const { SlashCommandBuilder } = require('discord.js');
const cowsay = require('cowsay');

const moo = cowsay.say({
  text: 'Moo!',
  e: 'oO',
  T: 'U ',
});

module.exports = {
  data: new SlashCommandBuilder()
    .setName('cowsay')
    .setDescription('The cow speaks!'),
  async execute(interaction) {
    await interaction.reply(`\`\`\` ${moo}\`\`\``);
  },
};
