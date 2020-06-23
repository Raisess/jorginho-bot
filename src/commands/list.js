// bot commands
const hello = require('./hello');
const ban = require('./ban');
const clear = require('./clear');
const color = require('./color');
const colorList = require('./colorList');
const dice = require('./dice');
const social = require('./social');
const git = require('./git');
const bot = require('./bot');
const dead = require('./dead');

// bot owner
let streamer, socials, gitLink;

// check the credencials file
if (require('../credencials.json')) {
  const { STREAMER, SOCIALS, GIT } = require('../credencials.json');
  streamer = STREAMER;
  socials = SOCIALS;
  gitLink = GIT;
} else if (require('../credencials.template.json')) {
  const { STREAMER, SOCIALS, GIT } = require('../credencials.template.json');
  streamer = STREAMER;
  socials = SOCIALS;
  gitLink = GIT;
} else {
  throw new Error('credencials file not found! [credencials.json || credencials.template.json]');
}

// COMMAND TEMPLATE
// callback function params (client, channel, user, message)
/*
/ {
/   cmd: '<command-name>',
/   description: '<command-description>',
/
/   callback function
/   func: (client, channel) => commandFunction(
/     client, <default-param>
/     channel <default-param>
/   )
/ }
*/

// commands export
module.exports = [
  {
    cmd: 'hello',
    description: 'Dizer hello!',
    func: (client, channel, user) => hello(
      client,
      channel,
      user
    )
  },
  {
    cmd: 'color',
    description: 'Mudar a cor do bot.',
    func: (client, channel, user, message) => color(
      client,
      channel,
      user,
      message
    )
  },
  {
    cmd: 'colorlist',
    description: 'Ver a lista de cores do bot.',
    func: (client, channel) => colorList(
      client,
      channel
    )
  },
  {
    cmd: 'dice',
    description: 'Girar um dado de seis lados.',
    func: (client, channel, user) => dice(
      client,
      channel,
      user
    )
  },
  {
    cmd: 'ban',
    description: 'Banir um úsuario do chat!',
    func: (client, channel, user, message) => ban(
      client,
      channel,
      user,
      message,
      streamer
    )
  },
  {
    cmd: 'clear',
    description: 'Limpar as mensagens do chat!',
    func: (client, channel, user) => clear(
      client,
      channel,
      user,
      streamer
    )
  },
  {
    cmd: 'social',
    description: 'Redes sociais do streamer.',
    func: (client, channel) => social(
      client,
      channel,
      socials
    )
  },
  {
    cmd: 'git',
    description: 'GitHub do streamer.',
    func: (client, channel) => git(
      client,
      channel
    )
  },
  {
    cmd: 'jorge',
    description: 'Link para baixar o bot jorginho.',
    func: (client, channel) => bot(
      client,
      channel
    )
  },
  {
    cmd: 'morreu',
    description: 'Vezes que o streamer morreu.',
    func: (client, channel) => dead(
      client,
      channel,
      streamer
    )
  }
]