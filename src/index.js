const tmi = require("tmi.js");
// BOT config
const config = require("./config");

// twitch client instance
const client = new tmi.client(config);
// connect to twitch API
client.connect();