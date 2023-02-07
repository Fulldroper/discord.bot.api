// application runner
(async () => {
  // configure env
  process.env.NODE_ENV || (await require("dotenv").config({debug:false}))
  // extract values from env
  const { TOKEN, WS_GATEWAY, WS_VERSION, WS_ENCODING, WS_COMMPRES} = process.env;
  // register ws Cass
  const WebSocket = await require("ws")
  // register event class
  const bot = new (await require("node:events"))()
  // open ws connection
  const ws = new WebSocket(`wss://${WS_GATEWAY}?v=${WS_VERSION}&encoding=${WS_ENCODING}`)
  // register payload data
  const PAYLOAD = JSON.stringify({
    op: 2,
    d: {
      token: TOKEN,
      properties: {
        os: 'Linux',
        browser: 'Firefox'
      }
    }
  })
  // register connection heartbeat
  const heartbeat = ({heartbeat_interval}) => setInterval(() => ws.send(`{"op":2,"d":null}`), heartbeat_interval);
  // create connection hand shake
  ws.on('open', () => ws.send(PAYLOAD));
  // connection event processor
  ws.on('message', data => {
    // parse input date
    const {t, event, op, d} = JSON.parse(data);
    // init heartbeat
    if (op === 10) {
      heartbeat(d);
      return;
    };
    // emmit events
    console.log(t);
  })


})()