const { SlashCommandBuilder } = require('discord.js');
const cowsay = require('cowsay');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('cowsay')
    .setDescription('The cow speaks!')
    .addStringOption((option) => option.setName('input')
      .setDescription('Tell the cow what to say!')
      .setMaxLength(2000)
      .setRequired(true)),
  // .addStringOption((option) => option.setName('cow')
  //   .setDescription('Choose your cow!')
  //   .setMaxLength(2000)),
  async execute(interaction) {
    const input = interaction.options.getString('input');
    const moo = cowsay.say({
      text: input,
      e: 'oo',
      T: 'U ',
      f: 'cat2',
    }).replaceAll('`', "'");
    // const cowChoice = interaction.options.getString('input');
    await interaction.reply(`\`\`\` ${moo}\`\`\``);
  },
};
