const fetch = require('node-fetch');

module.exports = (client, channel, streamer) => {
  return fetch(`https://decapi.me/twitch/uptime?channel=${streamer}`)
    .then(res => res.text())
    .then(text => client.say(channel, `@${streamer} está online a ${text}`))
    .catch(() => client.say(channel, 'algo de errado não está certo, não consigo ver o tempo da live...'));
}