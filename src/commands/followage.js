const fetch = require('node-fetch');

module.exports = (client, channel, user, streamer) => {
  return fetch(`https://api.2g.be/twitch/followage/${streamer}/${user.username}?format=mwdhms`)
    .then(res => res.text())
    .then(text => client.say(channel, `@${user.username} está seguindo a ${text}`))
    .catch(() => client.say(channel, 'algo de errado não está certo, não consigo ver a quanto tempo vc segue...'));
}