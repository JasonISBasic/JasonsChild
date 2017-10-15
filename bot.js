const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "!"
const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === prefix + 'HowToBuy') {
    msg.channel.send('```If you would like to buy type !Purchase if you need help ask a verified seller! (Bob, GtaPlayzzz, Wavy, Basic is a wanna be seller atm)```');
  }
});

client.on('message', msg => {
  if (msg.content === prefix + 'xboxcoder59 plays') {
    msg.channel.send('https://www.youtube.com/channel/UCOs-EbkN7JogISplpVoUIrg/featured');
  }
});

client.on('message', msg => {
  if (msg.content === prefix + 'gtayt') {
    msg.channel.send('http://www.youtube.com/c/GtaMasterYT');
  }
});

client.on('message', msg => {
  if (msg.content === 'killme') {
    msg.reply('I will kill you!');
  }
});

client.on('message', msg => {
  if (msg.content === prefix + 'Basic_Jason') {
    msg.reply('Check out Basic_Jason! (https://www.youtube.com/channel/UCDMlZxgtx4yPN05-itAPD4Q?view_as=subscriber)');
  }
});

client.on('message', msg => {
  if (msg.content === prefix + 'Purchase') {
    msg.author.send('Hi, Want to purchase? Say !confirm if yes or just remove the chat!');
  }
});

client.on('message', msg => {
  if (msg.content === prefix + 'confirm') {
    msg.author.send('Go here (https://rocketr.net/buy/ed3b708b1ad5) and purchase our resource after that please DM a Seller and they will check if you have bought and then they will DM you back with further instructions!');
  }
});

client.on('message', msg => {
  if (msg.content === prefix + 'donate') {
    msg.author.send('Want to donate? Just go here (https://rocketr.net/buy/d98f38ae3353) it will be appreciated! ');
  }
});

client.on('message', msg => {
  if (msg.content === 'fist me') {
    msg.reply('Hehe, Ill Fist YOU. https://giphy.com/gifs/sf-streetfighter-balrog-yoJC2R5uH2Z3tNi6s0');
  }
});

client.on('message', msg => {
  if (msg.content === prefix + 'help') {
    msg.author.send('```These are the commands: fist me, killme, Wavy is gay, !Purchase, !HowToBuy, !Basic_JasonYT, !gtayt, !xboxcoder59 plays```');
  }
});

client.on('message', msg => {
  if (msg.content === 'Wavy is gay') {
    msg.author.send('Hehehe, We know!! XD (Just kidding)');
  }
});

 if(command === "say") {
    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{});  
    message.channel.send(sayMessage);
  }




client.login(process.env.BOT_TOKEN);
