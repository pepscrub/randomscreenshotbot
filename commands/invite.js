const discord = require('discord.js');
module.exports.invite = (msg) =>
{
    try
    {
        const embed = new discord.MessageEmbed()
        .setTitle(`Invite me to your server! (Click here)`)
        .setURL(`https://discord.com/api/oauth2/authorize?client_id=${msg.client.user.id}&permissions=116736&scope=bot`)
        .setTimestamp();
        msg.channel.send(embed);
    }catch(e)
    {
        console.error(e);
    }
}