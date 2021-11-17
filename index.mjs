// https://slides.com/aminnairi/discord
import fs from "fs";
import * as Discord from "discord.js";

fs.promises.readFile("./settings.json").then((buffer) => {
  const settings = JSON.parse(buffer.toString());

  const client = new Discord.Client({
    intents: [
      Discord.Intents.FLAGS.GUILDS,
      Discord.Intents.FLAGS.GUILD_MESSAGES
    ]
  });

  client.on("ready", () => {
    console.log("Le bot est prêt");
  });

  client.on("messageCreate", () => {
    console.log("Un message a été crée");
  });

  client.login(settings.token);
}).catch((error) => {
  console.log(error.message);
});
