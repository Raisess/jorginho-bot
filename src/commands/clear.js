module.exports = (client, channel, user) => {
  if (user.mod) {
    return client.clear(channel);
  }

  return client.say(channel, `@${user.username} você não é mod meu chapa...`);
};