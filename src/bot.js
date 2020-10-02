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
            const member = message.guild.members.cache
            message.channel.send('Kicked the user.');
        } else if (commandName === 'ban') {
            message.channel.send("Banned the user.");
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