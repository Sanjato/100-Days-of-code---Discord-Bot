import { Interaction } from "discord.js";
import { commandList } from "../commands/_CommandList";

export const onInteraction = async (interaction: Interaction) => {
    if (interaction.isCommand()) {
        for (const Command of commandList) {
            if (interaction.commandName === Command.data.name) {
                await Command.run(interaction);
                break;
            }
        }
    }
}