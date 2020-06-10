// bot commands
const hello = require('./hello');
const ban = require('./ban');
const clear = require('./clear');
const color = require('./color');
const colorList = require('./colorList');

// bot owner
let owner;

// check the credencials file
if (require('../credencials.json')) {
  const { OWNER } = require('../credencials.json');
  owner = OWNER;
} else if (require('../credencials.template.json')) {
  const { OWNER } = require('../credencials.template.json');
  onwer = OWNER;
} else {
  throw new Error('credencials file not found! [credencials.json || credencials.template.json]');
}

module.exports = [
  {
    cmd: 'hello',
    description: 'Dizer Hello World!',
    func: (client, channel, user) => hello(client, channel, user)
  },
  {
    cmd: 'color',
    description: 'Mudar a cor do bot',
    func: (client, channel, user, message) => color(client, channel, user, message)
  },
  {
    cmd: 'colorlist',
    description: 'Ver a lista de cores do bot',
    func: (client, channel) => colorList(client, channel)
  },
  {
    cmd: 'ban',
    description: 'Banir um úsuario do chat!',
    func: (client, channel, user, message) => ban(client, channel, user, message, owner)
  },
  {
    cmd: 'clear',
    description: 'Limpar as mensagens do chat!',
    func: (client, channel, user) => clear(client, channel, user, owner)
  }
]