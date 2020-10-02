require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();
const PREFIX = "$";

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', async message => {
    // message from user exempt '$' including spaces
    if (message.author.bot) 
        return;
    if (message.content.startsWith(PREFIX)) {
        const [commandName, ...args] = message.content
        .trim()
        .substring(PREFIX.length)
        .split(/\s+/);
        // allowing bot permissions to kick someone in lower heirarchy
        if (commandName === 'kick') {
            if (!message.member.hasPermission("KICK_MEMBERS")) 
                return message.reply("You do not possess permissions");
            if (args.length === 0) 
            return message.reply("Please provide an ID.");
            const member = message.guild.members.cache.get(args[0]);
            if (member) {
                member
                    .kick()
                    .then((member) => message.channel.send(`${member} was kicked.`))
                    .catch((err) => message.channel.send("I don't have permissions to kick :("));
            } else {
                message.channel.send("Sorry, member not found.");
            }
            // banning a user if permissions allow
        } else if (commandName === 'ban') {
            if (!message.member.hasPermission("BAN_MEMBERS")) 
            return message.reply("You do not possess permissions.");
        if (args.length === 0) 
        return message.reply("Please provide an ID.");
        
        try {
           const user = await message.guild.members.ban(args[0]);
           message.channel.send("User was banned.");
        } catch (err) {
            console.log(err);
            message.channel.send("An error occured. I may not have permissions, or the user was not found.");
        }
    }
 }

    console.log(`[${message.author.tag}] : ${message.content}`);
    if (message.content === 'Ping') {
      message.reply('Pong!');
    } else if (message.content === "Hello" || message.content === "Hi") {
        message.reply(`Hi there, ${message.author.username}!`);
    } else if (message.content === "Marco") {
        message.reply("Polo!"); 
    }
    });

client.login(process.env.DISCORD_BOT);