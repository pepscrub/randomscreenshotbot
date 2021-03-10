const discord = require('discord.js');
const client = new discord.Client();
const fetch = require('node-fetch')
const { getImage } = require('./commands/getimg.js');
const { invite } = require('./commands/invite.js');
require('dotenv').config();

client.on('ready', async ()=>
{
    try{
        client.user.setPresence({activity:{name: ".rs",type: "LISTENING"},status: "online"})
    }catch(e)
    {
        console.error(e);
    }
})

client.login(process.env.TOKEN)

client.on('message', msg=>
{
    try
    {
        const prefix = process.env.PREFIX;
        const args = msg.content.split(" ");                            // Split based on space e.g. !play" "link" "volume
        if(args.length == 0 || args[0].charAt(0) !== prefix) return;
        const command = args.shift().substr(1);
        switch(command)
        {
            case 'random': case 'rs':
                getImage(msg);
            break;
            case 'invite':
                invite(msg);
            break;
        }
    }catch(e)
    {
        console.error(e);
    }
})