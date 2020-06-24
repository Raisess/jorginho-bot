const expressions = require('../data/expressions.json');
const responses = require('../data/responses.json');

module.exports = (client, channel, message) => {
  for (let i = 0; i < expressions.length; i++) {
    if (message.toLowerCase() === expressions[i]) {
      return client.say(channel, responses[i]);
    }
  }

  return;
}