module.exports = (client, channel, user, message, owner) => {
  const msgSplited = message.toLowerCase().split(' ');
  const userToBan = msgSplited[1];
  const reason = msgSplited[2];

  if (user.mod || user.username.toLowerCase() === owner) {
    return client.ban(channel, userToBan, reason)
      .then(data => client.say(channel, `@${data[1]} banido por ${data[2]}`))
      .catch(err => client.say(channel, 'não foi possivel realizar o comando... ;-;'));
  }

  return client.say(channel, `@${user.username} você não é mod meu chapa...`);
}