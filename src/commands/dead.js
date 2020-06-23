let dead = 0;

module.exports = (client, channel, streamer) => {
  dead++;

  if (dead === 1) {
    return client.say(channel, `@${streamer} já morreu ${dead} vez!`);
  }

  return client.say(channel, `@${streamer} já morreu ${dead} vezes!`);
}