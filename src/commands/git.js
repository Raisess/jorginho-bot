module.exports = (client, channel, streamer, gitLink) => client.say(
  channel,
  `GitHub do ${streamer}: https://github.com/${gitLink}`
);