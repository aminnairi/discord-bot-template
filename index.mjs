// https://slides.com/aminnairi/discord

/**
 * Importation de la librairie native pour gérer le système de fichier
 * @see https://nodejs.org/api/fs.html
 */
import fs from "fs";

/**
 * Importation de la librairie JavaScript pour Discord
 * @see https://discord.js.org/#/
 */
import * as Discord from "discord.js";

/**
 * Lecture du fichier des paramètres au format texte
 * @see https://nodejs.org/api/fs.html#fspromisesreadfilepath-options
 * @see https://nodejs.org/api/buffer.html
 */
fs.promises.readFile("./settings.json").then((buffer) => {
  /**
   * @const {JSON} settings Le fichier texte transformé en JSON
   * @see https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse
   */
  const settings = JSON.parse(buffer.toString());

  /**
   * Initialisation du client Discord pour pouvoir communiquer avec l'API
   * Initialisation des intentions du Bot (permissions)
   * @see https://discord.js.org/#/docs/main/stable/class/Client
   * @see https://discord.js.org/#/docs/main/stable/class/Intents?scrollTo=s-FLAGS
   */
  const client = new Discord.Client({
    intents: [
      Discord.Intents.FLAGS.GUILDS,
      Discord.Intents.FLAGS.GUILD_MESSAGES
    ]
  });

  /**
   * Écoute l'événement du Bot lorsque ce dernier est prêt
   * @see https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-ready
   */
  client.on("ready", () => {
    console.log("Le bot est prêt");
  });

  /**
   * Écoute l'événement du serveur lorsqu'un message est envoyé sur un canal
   * @see https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-messageCreate
   */
  client.on("messageCreate", (message) => {
    console.log(`Nouveau message : ${message.content}`);
  });

  /**
   * Connecte le bot au serveur Discord permettant d'écouter les événements de la guilde
   * @see https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-messageCreate
   */
  client.login(settings.token);
}).catch((error) => {
  console.log(error.message);
});
