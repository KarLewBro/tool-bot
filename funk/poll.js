
const name = 'poll';

function poll(msg, args) {
  if(!args[1]) {
    msg.channel.send('To start a poll use \"!poll\" followed by a yes or no question');
  } else {
    let question = args.slice(1).join(' ');
    msg.channel.send(`📋**${question}**`).then(messageReaction => {
      messageReaction.react('👍');
      messageReaction.react('👎');
      msg.delete(5000);
    });
  }
}

module.exports = { name, poll }
