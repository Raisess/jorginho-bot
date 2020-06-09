const expressions = require('../data/expressions.json');

module.exports = (client, channel, user, message) => {
  for (let expression of expressions) {
    if (message.toLowerCase() === expression) {
      client.say(channel, `@${user.username}${expression}`);
    }
  }
}