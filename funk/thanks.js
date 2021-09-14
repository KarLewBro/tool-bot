
const name = 'thanks';

function thanks(msg, args) {
  let respArr = 'You are very welcome, You\'re welcome, You bet, I\'m happy to help, No problem, No sweat, Think nothing of it, My pleasure, No thank you, Anytime'.split(',');
  let resp = respArr[Math.floor(Math.random()*respArr.length)]
  msg.channel.send(resp);
}

module.exports = { name, thanks }
