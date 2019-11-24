const Discord = require('discord.js');
const client = new Discord.Client();
const auth = require('./auth.json');

client.on('ready', () => {
    console.log('Logged in as ${client.user.tag}!');
});

client.on('message', msg => {
    if(msg.content == 'doki'){
        msg.reply('Just Monika');
    }
});

client.login(auth.token);

