const { SlashCommandBuilder } = require('discord.js');
const cowsay = require('cowsay');

function getCows(error, cowNames) {
  if (error) {
    console.log(error);
  } else if (cowNames) {
    console.log(`Number of cows available: ${cowNames.length}`);
  }
}

const cowArray = cowsay.list(getCows);

module.exports = {
  data: new SlashCommandBuilder()
    .setName('cowsay')
    .setDescription('The cow speaks!')
    .addStringOption((option) => option.setName('input')
      .setDescription('Tell the cow what to say!')
      .setMaxLength(2000)
      .setRequired(true))
    .addStringOption((option) => option.setName('cow')
      .setDescription('Choose your cow!')
      .setMaxLength(2000)
      .setRequired(true)),
  async execute(interaction) {
    const input = interaction.options.getString('input');
    let moo;
    const cowChoice = interaction.options.getString('cow');
    if (cowArray.find((cow) => cow === cowChoice) !== undefined) {
      moo = cowsay.say({
        text: input,
        e: 'oo',
        T: 'U ',
        f: cowChoice,
      }).replaceAll('`', "'");
      await interaction.reply(`\`\`\` ${moo}\`\`\``);
    } else {
      await interaction.reply('Sorry! That cow doesn\'t exist!');
    }
  },
};
