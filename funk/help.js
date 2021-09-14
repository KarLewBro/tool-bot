
const name = 'help';
const prefix = process.env.PREFIX;

function help(msg, args) {
  msg.channel.send({embed: {
    color: 15844367,
    title: 'I can respond to the following inquiries:',
    fields: [{
      name: `${prefix}help`,
      value: 'You already know this one.',
    },
    {
      name: `${prefix}poll`,
      value: 'Starts a simple yes or no poll for the question following the command.',
    },
    {
      name: `${prefix}roll`,
      value: 'Rolls some dice with in the format of \"10d6.\"',
    },
    {
      name: `${prefix}schedule`,
      value: 'Starts a weekday availability poll. Provide a date after the command and remove days with \"-su -mo\" etc.',
    },
    {
      name: `${prefix}donate`,
      value: 'Toss a coin to your witcher.',
    // },
    // {
    //   name: ``,
    //   value: '',
    }]
  }});
}

module.exports = { name, help }
