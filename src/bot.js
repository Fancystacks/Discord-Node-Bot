require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
    if (message.author.bot) 
        return;
    console.log(`[${message.author.tag}] : ${message.content}`);
    if (message.content === 'Ping') {
      message.reply('Pong!');
    } else if (message.content == "Hello") {
        message.reply(`Hi, there, ${message.author.username}!`);
    }
});

client.login(process.env.DISCORD_BOT);