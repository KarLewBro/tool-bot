require('dotenv').config();
const Discord = require('discord.js');
const prefix = process.env.PREFIX;
const fs = require('fs');
const client = new Discord.Client();
client.commands = new Discord.Collection();

const commFiles = fs.readdirSync('./funk/').filter(file => file.endsWith('.js'));
for(const file of commFiles){
  const command = require(`./funk/${file}`);
  client.commands.set(command.name, command);
}

//Client Login
client.once('ready', () => console.log(`${client.user.username} is online!`));

//Message Listener
client.on('message', msg => {
  //Profanity Listener
  // client.commands.get('profanity').profReact(msg);
  //Ignore self
  if(msg.author.bot) return;
  //Ignore non-commands
  if(msg.content.indexOf(prefix) !== 0) return;
  //Slice args
  var args = msg.content.slice(prefix.length).trim().split(' ');

  //!Command Structure
  switch (args[0].toLowerCase()) {
    case 'help':
    case 'h':
    client.commands.get('help').help(msg, args);
    break;
    // case 'secret':
    //   client.commands.get('secret').secret(msg, args);
    //   break
    case 'donate':
    case 'd':
    client.commands.get('donate').donate(msg, args);
    break
    case 'thanks':
    client.commands.get('thanks').thanks(msg, args);
    break;
    case 'roll':
    case 'r':
    client.commands.get('roll').roll(msg, args);
    break
    // case 'rachel':
    //   client.commands.get('rachel').rachel(msg, args);
    //   break;
    case 'poll':
    case 'p':
    client.commands.get('poll').poll(msg, args);
    break;
    case 'schedule':
    case 's':
    client.commands.get('schedule').schedule(msg, args);
    break;
    case '':
    msg.channel.send('...');
    //TODO: giphy api money
    //msg.channel.send({files: ['./media/alert.png']});
    break
    default:
    client.commands.get('default').def(msg, args);
    break;
  }


});

client.login(process.env.BOT_TOKEN);
