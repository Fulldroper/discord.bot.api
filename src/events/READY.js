module.exports = function ({session_id, user}) {
  this.session_id = session_id
  this.user_id = user.id
  console.log({session_id, user});
  // this.reply({
  //   "op":4,"d":{
  //     "guild_id":"986835945452105728",
  //     "channel_id":"986835945452105732",
  //     "self_mute":true,
  //     "self_deaf":true,
  //     "self_video":true
  //   }
  // })  
}