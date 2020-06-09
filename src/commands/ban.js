module.exports = (client, channel, user, message) => {
  if (user.mod) {
    client.say(channel, 'true');
  } else {
    client.say(channel, 'false');
  }
}