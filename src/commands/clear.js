module.exports = (client, channel, user, streamer) => {
  if (user.mod || user.username.toLowerCase() === streamer) {
    return client.clear(channel);
  }

  return client.say(channel, `@${user.username} você não é mod meu chapa...`);
};