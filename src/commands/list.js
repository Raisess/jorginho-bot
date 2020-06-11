// bot commands
const hello = require('./hello');
const ban = require('./ban');
const clear = require('./clear');
const color = require('./color');
const colorList = require('./colorList');
const dice = require('./dice');
const social = require('./social');

// bot owner
let streamer, socials;

// check the credencials file
if (require('../credencials.json')) {
  const { STREAMER, SOCIALS } = require('../credencials.json');
  streamer = STREAMER;
  socials = SOCIALS;
} else if (require('../credencials.template.json')) {
  const { STREAMER, SOCIALS } = require('../credencials.template.json');
  streamer = STREAMER;
  socials = SOCIALS;
} else {
  throw new Error('credencials file not found! [credencials.json || credencials.template.json]');
}

module.exports = [
  {
    cmd: 'hello',
    description: 'Dizer hello!',
    func: (client, channel, user) => hello(client, channel, user)
  },
  {
    cmd: 'color',
    description: 'Mudar a cor do bot.',
    func: (client, channel, user, message) => color(client, channel, user, message)
  },
  {
    cmd: 'colorlist',
    description: 'Ver a lista de cores do bot.',
    func: (client, channel) => colorList(client, channel)
  },
  {
    cmd: 'dice',
    description: 'Girar um dado de seis lados.',
    func: (client, channel, user) => dice(client, channel, user)
  },
  {
    cmd: 'ban',
    description: 'Banir um úsuario do chat!',
    func: (client, channel, user, message) => ban(client, channel, user, message, streamer)
  },
  {
    cmd: 'clear',
    description: 'Limpar as mensagens do chat!',
    func: (client, channel, user) => clear(client, channel, user, streamer)
  },
  {
    cmd: 'social',
    description: 'Redes sociais do streamer.',
    func: (client, channel) => social(client, channel, socials)
  }
]