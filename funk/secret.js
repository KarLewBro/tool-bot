
const name = 'secret';
const prefix = process.env.PREFIX;

function secret(msg, args) {
  msg.channel.send(`Here is the secret menu my dude:\n${prefix} - hit you with that alert\n${prefix}thanks - with your ungrateful ass\n${prefix}rachel - a nice little message for your boss rachel`);
}

module.exports = { name, secret }
