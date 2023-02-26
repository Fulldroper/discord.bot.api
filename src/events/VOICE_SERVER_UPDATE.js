const WebSocket = await require("ws");
const MEDIA_GATEWAY = 'discord.media'
const MEDIA_GATEWAY_VERCION = 7

module.exports = function ({endpoint, guild_id, token}) {
  this.media || (this.media = [])

  const ws = new WebSocket(`wss://${endpoint}.${MEDIA_GATEWAY}/?v=${MEDIA_GATEWAY_VERCION}`)

  ws.reply = this.reply

  this.media.push(ws)

  const user_id = this.user.id
  const session_id = this.session_id

  ws.once('open',function () {
    this.reply({
      "op":0,
      "d":{
        "server_id": guild_id,
        user_id,
        session_id,
        token,
        "video":true,
        "streams":[{
          "type":"screen",
          "rid":"100",
          "quality":100
        }]
      }
    })
  })

  ws.on('message', function (msg) {
    
  })

  console.log(data);
  //
}