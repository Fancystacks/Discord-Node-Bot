require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();
const PREFIX = "$";

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
    if (message.author.bot) 
        return;
    if (message.content.startsWith(PREFIX)) {
        const [commandName, ...args] = message.content
        .trim()
        .substring(PREFIX.length)
        .split(/\s+/);

        if (commandName === 'kick') {
            if (args.length === 0) 
            return message.reply("Please provide an ID.");
            const member = message.guild.members.cache.get(args[0]);
            if (member) {
                member
                    .kick()
                    .then((member) => message.send(`${member} was kicked.`))
                    .catch((error) => message.channel.send("I don't have permissions to kick :("));
                message.channel.send('Kicked the user.');
            } else {
                message.channel.send("Sorry, member not found.");
            }

        } 
    }

    console.log(`[${message.author.tag}] : ${message.content}`);
    if (message.content === 'Ping') {
      message.reply('Pong!');
    } else if (message.content == "Hello") {
        message.reply(`Hi there, ${message.author.username}!`);
    }
});

client.login(process.env.DISCORD_BOT);