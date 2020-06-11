module.exports = (client, channel, user) => client.say(
  channel,
  `hello @${user.username}!`
);