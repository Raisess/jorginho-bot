module.exports = (client, channel, user, owner) => {
  if (user.mod || user.username.toLowerCase() === owner) {
    return client.clear(channel);
  }

  return client.say(channel, `@${user.username} você não é mod meu chapa...`);
};