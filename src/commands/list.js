const hello = require('./hello');
const ban = require('./ban');
const clear = require('./clear');

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
    cmd: 'ban',
    description: 'Banir um úsuario do chat!',
    func: (client, channel, user) => ban(client, channel, user, owner)
  },
  {
    cmd: 'clear',
    description: 'Limpar as mensagens do chat!',
    func: (client, channel, user) => clear(client, channel, user, owner)
  }
]