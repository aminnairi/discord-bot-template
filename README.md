# discord-bot-template

Discord Bot Written in JavaScript with the Node.js platform using ECMAScript Modules.

## 1. Install the requirements

- Node.js
- NPM

## 2. Install the Discord JavaScript module

```console
$ npm install --save-dev --save-exact discord.js
```

## 3. Create the Bot entrypoint

```console
$ touch index.mjs
```

## 3. Create the configuration file

```console
$ touch settings.json
```

***Warning**: this file should never be put in versionning or disclosed.*

## 3. Edit the configuration file

```json
{
  "token": "yourbottoken"
}
```

*Where `yourbottoken` is the token you copied from your Developer Portal's application bot.*

## 4. Edit the Bot entrypoint

Open the `index.mjs` file with your prefered text editor.

## 5. Steps

- [ ] Import the file system Node.js built-in module
- [ ] Import the Discord JavaScript library
- [ ] Read the content of the configuration file as raw text and then
- [ ] Parse the content of the configuration file as JSON
- [ ] Handle any parse errors
- [ ] Initialize the Discord client with the wanted intents
- [ ] Listen for when the bot is ready
- [ ] Listen for when a message is sent
- [ ] Login with the token
- [ ] Listen for when an error occurred
- [ ] Handle any configuration reading errors
- [ ] Handle any login errors
