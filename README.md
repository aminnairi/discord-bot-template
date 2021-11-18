# discord-bot-template

Discord Bot Written in JavaScript with the Node.js platform using ECMAScript Modules.

## 1. Install the requirements

- Node.js
- NPM

## 2. Install the Discord JavaScript module

```console
$ npm install
```

## 3. Create the configuration file

```console
$ touch settings.json
```

***Warning**: this file should never be put in versionning or disclosed.*

## 4. Edit the configuration file

```json
{
  "token": "yourbottoken"
}
```

*Where `yourbottoken` is the token you copied from your Developer Portal's application bot.*

## 5. Start the bot

```console
$ npm start
```

## 5. TODO

- [X] Import the file system Node.js built-in module
- [X] Import the Discord JavaScript library
- [X] Read the content of the configuration file as raw text and then
- [X] Handle any configuration reading errors
- [X] Parse the content of the configuration file as JSON
- [X] Handle any parse errors
- [X] Initialize the Discord client with the wanted intents
- [X] Listen for when the bot is ready
- [X] Login with the token
- [X] Listen for when a message is sent
- [ ] Listen for when an error occurred
- [ ] Handle any login errors
