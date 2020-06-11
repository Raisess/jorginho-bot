const colorsList = [
  "Blue",
  "BlueViolet",
  "CadetBlue",
  "Chocolate",
  "Coral",
  "DodgerBlue",
  "Firebrick",
  "GoldenRod",
  "Green",
  "HotPink",
  "OrangeRed",
  "Red",
  "SeaGreen",
  "SpringGreen",
  "YellowGreen"
];

const msg = colorsList.join(' | ');

module.exports = (client, channel) => client.say(
  channel,
  `list de cores: ${msg}`
);