module.exports = (client, channel, user, owner) => {
  if (user.mod || user.username.toLowerCase() === owner) {
    return client.say(channel, 'true');
  }

  return client.say(channel, 'false');
}