const hello = require('./hello');

module.exports = [
  {
    cmd: "hello",
    description: "Say hello world!",
    func: (client, channel, tags) => hello(client, channel, tags)
  },
  {
    cmd: "hello",
    description: "See the streamer social networks!",
    func: (client, channel, tags) => hello(client, channel, tags)
  }
]