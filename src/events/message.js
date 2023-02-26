const { appendFileSync } = require("node:fs")
const { unpack } = require('etf.js');

module.exports = async function(data) {
  // unpacking input data
  const { t, event, op, d } = unpack(data);
  // logging input data  
  appendFileSync(
    `logs/${new Date().getTime()}.${t || 'ACK'}.json`,
    JSON.stringify(d)
  )
  // set heatBeat
  op === 10 && this.heatBeat(d)
  // emmit client events
  this.emit(t,d)
}