const fetch = require('node-fetch');
const discord = require('discord.js');

module.exports.getImage = async (msg) =>
{
    const geturl = await fetch(`https://rainbowunicorn.cz/v1/screenshots/random`);
    const data = await geturl.json();
    const slug = data['payload']['slug'].replace(/\-/gi, ' ');
    const url = data['payload']['screenUrl'];

    const embed = new discord.MessageEmbed()
    .setColor('#e64a27')
    .setTitle(slug)
    .setImage(url)
    .setTimestamp()

    msg.channel.send(embed)
}