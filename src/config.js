let username, password, channels;

// check the credencials file
if (require('./credencials.json')) {
  const { USERNAME, PASSWORD, CHANNELS } = require('./credencials.json');
  username = USERNAME;
  password = PASSWORD;
  channels = [...CHANNELS];
} else if (require('./credencials.template.json')) {
  const { USERNAME, PASSWORD, CHANNELS } = require('./credencials.template.json');
  username = USERNAME;
  password = PASSWORD;
  channels = [...CHANNELS];
} else {
  throw new Error('credencials file not found! [credencials.json || credencials.template.json]');
}

// export the bot options module
module.exports = {
  options: {
    debug: true
  },
  connection: {
    reconnect: true
  },
  identity: {
    username: username,
    password: `oauth:${password}`
  },
  channels: channels
};