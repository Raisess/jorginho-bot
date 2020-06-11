module.exports = (client, channel, user, streamer) => {
  if (user.mod || user.username.toLowerCase() === streamer) {
    client.clear(channel);

    return client.say(
      channel,
      `@${user.username} me pediu para limpar o chat!
    `);
  }

  return client.say(
    channel,
    `@${user.username} você não é mod meu chapa...`
  );
};