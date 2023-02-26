module.exports = function() {
  this.reply({
    op: 2,
    d: {
      token: process.env.TOKEN,
      properties: {
        os: "Windows",
        browser: "Firefox"
      }
    },
  })
}