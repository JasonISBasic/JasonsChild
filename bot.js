const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "!"

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

[Command("Clear")]
        public async Task clear([Remainder] int Delete = 0)
        {
            IGuildUser Bot = await Context.Guild.GetUserAsync(Context.Client.CurrentUser.Id);
            if (!Bot.GetPermissions(Context.Channel as ITextChannel).ManageMessages)
            {
                await Context.Channel.SendMessageAsync("`Bot does not have enough permissions to manage messages`");
                return;
            }
            await Context.Message.DeleteAsync();
            var GuildUser = await Context.Guild.GetUserAsync(Context.User.Id);
            if (!GuildUser.GetPermissions(Context.Channel as ITextChannel).ManageMessages)
            {
                await Context.Channel.SendMessageAsync("`You do not have enough permissions to manage messages`");
                return;
            }
            if (Delete == null)
            {
                await Context.Channel.SendMessageAsync("`You need to specify the amount | !clear (amount) | Replace (amount) with anything`");
            }
            int Amount = 0;
            foreach (var Item in await Context.Channel.GetMessagesAsync(Delete).Flatten())
            {

                    Amount++;
                    await Item.DeleteAsync();
                
            }
            await Context.Channel.SendMessageAsync($"`{Context.User.Username} deleted {Amount} messages`");
        }





client.login(process.env.BOT_TOKEN);
