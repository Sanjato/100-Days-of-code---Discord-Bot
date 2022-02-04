import { Command } from "../interface/Command";
import { SlashCommandBuilder } from "@discordjs/builders";
import { getCamperData } from "../modules/getCamperData";
import { updateCamperData } from "../modules/updateCamperData";
import { MessageEmbed } from "discord.js";

export const oneHundred: Command = {
    data: new SlashCommandBuilder()
        .setName("100")
        .setDescription("Check in for the 100 Days of Code challenge.")
        .addStringOption((option) =>
            option.setName("message")
                .setDescription("The message to go in your 100 Days of Code update.")
                .setRequired(true)
        ),

    run: async (interaction) => {
        await interaction.deferReply();
        const { user } = interaction;
        const text = interaction.options.getString("message", true);

        const targetCamper = await getCamperData(user.id);
        const updateCamper = await updateCamperData(targetCamper);

        const oneHundredEmbed = new MessageEmbed();
        oneHundredEmbed.setTitle("100 Days of Code")
            .setDescription(text)
            .setAuthor({ name: user.tag, iconURL: user.displayAvatarURL() })
            .addField("Round", updateCamper.round.toString(), true)
            .addField("Day", updateCamper.day.toString(), true);
        oneHundredEmbed.setFooter({ text: "Day completed: " + new Date(updateCamper.timestamp).toLocaleDateString()});

        await interaction.editReply({ embeds: [oneHundredEmbed] });

        console.log("oneHundred loads.")
    },
};

