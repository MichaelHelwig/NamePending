const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('setmoney')
		.setDescription('Sets users money value.')
        .addNumberOption( option => 
            option.setName('amount')
                .setDescription('Amount to set')
                .setRequired(true)
        ),
	async execute(interaction) {
        const amount = interaction.options.getNumber('amount');
        console.log(amount);
		await interaction.reply(`${amount}`);
	},
};