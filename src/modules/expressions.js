const expressions = require('../data/expressions.json');
const responses = require('../data/responses.json');

module.exports = (client, channel, message) => {
  const splitedMsg = message.toLowerCase().split(' ');

  for (let i = 0; i < expressions.length; i++) {
    for (let splitMsg of splitedMsg) {
      if (splitMsg === expressions[i]) {
        return client.say(channel, responses[i]);
      }
    }
  }

  return;
}