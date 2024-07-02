The purpose of the project was to create a Discord bot using the native Discord API and a custom implementation for handling and processing requests.

The project is useful as it demonstrates how to interact directly with the Discord API and create custom handling for various types of requests, providing flexibility and control.

## How the project works

The bot connects to a Discord server and uses the native Discord API to listen for events and handle requests. Custom logic is implemented to process these requests and respond accordingly.

### Repository Link and Installation

You can find the repository and installation instructions at the following link:
[Discord Bot API](https://github.com/Fulldroper/discord.bot.api)

### Algorithm and Code Examples

1. **Connecting to Discord Server**
```javascript
const https = require('https');

const botToken = 'YOUR_BOT_TOKEN';

const options = {
  hostname: 'discord.com',
  port: 443,
  path: '/api/v9/gateway/bot',
  method: 'GET',
  headers: {
    'Authorization': `Bot ${botToken}`
  }
};

https.request(options, res => {
  res.on('data', d => {
    process.stdout.write(d);
  });
}).on('error', error => {
  console.error(error);
}).end();
```

2. **Listening for Events**
```javascript
const WebSocket = require('ws');
const ws = new WebSocket('wss://gateway.discord.gg/?v=9&encoding=json');

ws.on('open', () => {
  ws.send(JSON.stringify({
    op: 2,
    d: {
      token: botToken,
      intents: 513,
      properties: {
        $os: 'linux',
        $browser: 'my_library',
        $device: 'my_library'
      }
    }
  }));
});

ws.on('message', data => {
  const payload = JSON.parse(data);
  const { t, event } = payload;

  if (t === 'MESSAGE_CREATE') {
    handleMessage(event);
  }
});

function handleMessage(event) {
  console.log(event);
  // Custom logic for handling messages
}
```

## Skills Acquired

- Advanced JavaScript and Node.js programming
- Working directly with the Discord API
- Implementing WebSocket connections
- Creating custom request handling and processing logic

