module.exports = function (msg) {
  const { content = false } = msg;
  if (!content) return;

  switch (content) {
    case "join":
      this.reply({
        op: 4,
        d: {
          guild_id: process.env.TEST_GUILD,
          channel_id: process.env.TEST_VOICE,
          self_mute: true,
          self_deaf: true,
          self_video: false,
        },
      });
      break;
    case "disconnect":
      break;
    case "voice":
      this.reply({
        op: 4,
        d: {
          guild_id: process.env.TEST_GUILD,
          channel_id: process.env.TEST_VOICE,
          self_mute: false,
          self_deaf: true,
          self_video: true,
        },
      });
    break;
    case "camera":
      this.reply({
        op: 4,
        d: {
          guild_id: process.env.TEST_GUILD,
          channel_id: process.env.TEST_VOICE,
          self_mute: true,
          self_deaf: true,
          self_video: true,
        },
      });
    break;

    default:
      return;
  }
};
