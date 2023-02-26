// aplication runner
(async () => {
  // env configuration
  process.env.NODE_ENV || (await require("dotenv").config({ debug: false }));
  // register constant varible
  const GATEWAY = 'wss://gateway.discord.gg/'
  const VERSION = 6
  // require dependencies
  const WebSocket = await require("ws");
  const { pack } = await require('etf.js');
  const importer = await require('fd-importer');
  // const { EventEmitter } = await require('node:events')
  // const zlib = require('zlib')
  // Bigint to JSON
  BigInt.prototype.toJSON = function() { return this.toString() }
  // open WebSocket connection
  //&compress=zlib-stream
  const ws = new WebSocket(`${GATEWAY}?v=${VERSION}&encoding=etf`);
  // creting reply method
  ws.reply = function (x) {this.send(pack(x))}
  // create heatBeat method
  ws.heatBeat = function ({heartbeat_interval}) {
    this.HBI = setInterval(() => this.reply({"op":2, "d": null}), heartbeat_interval);
  }
  // import events modules
  const events = await importer('src/events/')
  // register events handlers
  for (const event in events) {
    ws.on(event, events[event].bind(ws))
  }
})();
