const tmi = require("tmi.js");
// BOT config
const config = require('./config');
// BOT prefix
let prefix;

if (require('./credencials.json')) {
  const { PREFIX } = require('./credencials.json');

  prefix = PREFIX;
} else if (require('./credencials.template.json')) {
  const { PREFIX } = require('./credencials.template.json');

  prefix = PREFIX;
} else {
  throw new Error('credencials file not found! [credencials.json || credencials.template.json]');
}

// twitch client instance
const client = new tmi.client(config);
// connect to twitch API
client.connect();

// command list
const list = require('./commands/list');
// chat expressions module
const expressions = require('./modules/expressions');

client.on('chat', (channel, user, message, self) => {
  if (self) return;

  expressions(client, channel, user, message);

  const msgSplited = message.toLowerCase().split(' ');
  const cmd = msgSplited[0];

  for (let item of list) {
    if (cmd === `${prefix}${item.cmd}`) {
      item.func(client, channel, user, message);
    }
  }

  if (message.toLowerCase() === '!help') {
    let str = [];

    for (let item of list) {
      str.push(`cmd: !${item.cmd} - description: ${item.description} | `);
    }

    client.say(channel, str.join(' '));
  }
});

client.on('connected', () => {
  client.say(config.channels[0], 'Hello World! JorginhoBOT is on!');
});

setInterval(() => {
  client.say(config.channels[0], 'Se vc tbm quer o JorginhoBOT na sua live, digite !jorge para baixar e usar!!! by danillu_');
}, 5 * 60000);