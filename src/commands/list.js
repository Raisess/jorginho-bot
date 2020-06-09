const hello = require('./hello');
const ban = require('./ban');
const clear = require('./clear');

module.exports = [
  {
    cmd: 'hello',
    description: 'Dizer Hello World!',
    func: (client, channel, user) => hello(client, channel, user)
  },
  {
    cmd: 'ban',
    description: 'Banir um úsuario do chat!',
    func: (client, channel, user, message) => ban(client, channel, user, message)
  },
  {
    cmd: 'clear',
    description: 'Limpar as mensagens do chat!',
    func: (client, channel, user) => clear(client, channel, user)
  }
]