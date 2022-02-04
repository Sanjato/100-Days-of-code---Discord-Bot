import { Client } from "discord.js";
import { IntentOptions } from "./config/IntentOptions";
import { connectDatabase } from "./database/connectDatabase";
import { onInteraction } from "./events/onInteraction";
import { onReady } from "./events/onReady";
import { validateEvent } from "./utils/validateEnv";

(async () => {
    if (!validateEvent()) return;
    const BOT = new Client({ intents: IntentOptions });

    BOT.on("ready", async () => await onReady(BOT));
    // BOT.on("ready", () => console.log("Test haha"));
    BOT.on(
        "interactionCreate",
        async (interaction) => await onInteraction(interaction)
    );

    await connectDatabase();

    console.log("Connected to Discord!");
})();