
const name = 'schedule';
const prefix = process.env.PREFIX;
const sun = '☀️:Sunday';
const mon = '🌕:Monday';
const tue = '🌮:Tuesday';
const wed = '🐸:Wednesday';
const thu = '🍺:Thursday';
const fri = '🥡:Friday';
const sat = '🪐:Saturday';

function remove(x, arr){
  let i = arr.indexOf(x);
  arr.splice(i,1);
}

function schedule(msg, args) {
  let week = [sun, mon, tue, wed, thu, fri, sat];
  if(!args[1] || !args[1].split('').some(Number)) {
    msg.channel.send(`Please provide a date within the week in question. E.g. \"${prefix}schedule 4/20/2020\" Additionally you can remove days from the options with \"-su -mo\" etc.`);
  } else {
    if(msg.content.toLowerCase().includes('-')) {
      if(msg.content.toLowerCase().includes('-su')) {remove(sun, week)}
      if(msg.content.toLowerCase().includes('-mo')) {remove(mon, week)}
      if(msg.content.toLowerCase().includes('-tu')) {remove(tue, week)}
      if(msg.content.toLowerCase().includes('-we')) {remove(wed, week)}
      if(msg.content.toLowerCase().includes('-th')) {remove(thu, week)}
      if(msg.content.toLowerCase().includes('-fr')) {remove(fri, week)}
      if(msg.content.toLowerCase().includes('-sa')) {remove(sat, week)}
    }
    msg.channel.send(`️️️🗓️**What day(s) are you available during the week of ${args[1]}?**\n${week.join(' ')}`).then(messageReaction => {
      if(!msg.content.toLowerCase().includes('-su')) {messageReaction.react('☀️')}
      if(!msg.content.toLowerCase().includes('-mo')) {messageReaction.react('🌕')}
      if(!msg.content.toLowerCase().includes('-tu')) {messageReaction.react('🌮')}
      if(!msg.content.toLowerCase().includes('-we')) {messageReaction.react('🐸')}
      if(!msg.content.toLowerCase().includes('-th')) {messageReaction.react('🍺')}
      if(!msg.content.toLowerCase().includes('-fr')) {messageReaction.react('🥡')}
      if(!msg.content.toLowerCase().includes('-sa')) {messageReaction.react('🪐')}
      msg.delete(5000);
    });
  }
}

module.exports = { name, schedule }
