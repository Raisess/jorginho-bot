module.exports = (client, channel, user, message) => {
  const msgSplited = message.toLowerCase().split(' ');
  const color = msgSplited[1];

  return client.color(color)
    .then(data => true)
    .catch(err => client.say(channel, 'algo deu errando enquanto eu mudava de cor... ;-;'));
}