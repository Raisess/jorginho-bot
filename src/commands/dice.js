const dice = () => {
  const num = Math.round(Math.random() * 6);

  if (num === 0) {
    dice();
  }

  return num;
};


module.exports = (client, channel, user) => client.say(
  channel,
  `@${user.username} 🎲: ${dice()}`
);