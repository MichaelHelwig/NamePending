const { SlashCommandBuilder } = require('discord.js');
const db = require('../../db.js');

// WOW I made a commit to test git :)

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
        const input = interaction.options.getNumber('amount');
        console.log(input);

            try {
            console.log('check id');
            const user = await db.banks.findOne({ 
                attributes: [ 'username' ] ,
                where: { username: interaction.user.id}
            });

            console.log('update value');
            await user.update(
                {amount: input},
                {where: interaction.user.id}
            )

            } catch (error) {
                console.log(error);
                console.log('create new then update value');
                await db.banks.create({
                    username: interaction.user.id,
                    amount: input,
                })
            }

                
        
        //console.log(user.dataValues.username);

        /*
        await db.banks.create({
            username: interaction.user.id,
            amount: amount,
        })
        */
		await interaction.reply(`${amount}`);
	},
};