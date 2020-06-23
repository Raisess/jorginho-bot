let dead = 0;

module.exports = (client, channel, streamer) => {
  dead++;

  return client.say(channel, `@${streamer} já morreu ${dead} vezes!`);
}