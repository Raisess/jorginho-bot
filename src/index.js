const tmi = require("tmi.js");
// BOT config
const config = require("./config");

// twitch client instance
const client = new tmi.client(config);
// connect to twitch API
client.connect();

// command list
const list = require('./commands/list');

client.on('message', (channel, tags, message, self) => {
  if (self) return;

  for (let item of list) {
    if (message.toLowerCase() === `!${item.cmd}`) {
      item.func(client, channel, tags);
    }
  }

  if (message.toLowerCase() === '!help') {
    let str = [];

    for (let item of list) {
      str.push(`cmd: !${item.cmd} - description: ${item.description}\n`)
    }

    client.say(channel, str.join(' '));
  }
});