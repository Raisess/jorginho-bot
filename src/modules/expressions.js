const expressions = require('../data/expressions.json');
const responses = require('../data/responses.json');

module.exports = (client, channel, user, message) => {
  for (let i = 0; i < expressions.length; i++) {
    if (message.toLowerCase() === expressions[i]) {
      client.say(channel, responses[i]);
    }
  }
}