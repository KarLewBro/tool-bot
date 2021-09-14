
const name = 'profanity';
const profanity = 'damn,fuck,shit,nigg,faggot,slut,whore,cunt, ass,bitch'.split(',');

function profReact(msg) {
  for (word of profanity) {
    if (msg.content.toLowerCase().includes(word)) {
      let monkeyArr = '🙈,🙉,🙊'.split(',');
      let monkey = monkeyArr[Math.floor(Math.random()*monkeyArr.length)]
      msg.react(monkey);
    }
  }
}

module.exports = { name, profReact }
