const { Events } = require('discord.js');
const UserInfo = require('../models/UserInfo');

module.exports = {
    name: Events.MessageReactionRemove,
    async execute(reaction, user){
        if(reaction.partial){
            try{
                await reaction.fetch();
            } catch(err){
                console.error(err);
                return;
            }
        }
        if(reaction._emoji.name === "Minusone"){
            const [userInfo, created] = await UserInfo.findOrCreate({where:{guild_id:reaction.message.guildId, user_id:reaction.message.author.id}});
            userInfo.increment({'score': 1})
        }
        if(reaction._emoji.name === "Plusone"){
            const [userInfo, created] = await UserInfo.findOrCreate({where:{guild_id:reaction.message.guildId, user_id:reaction.message.author.id}});            
            userInfo.decrement({'score': 1})
        }
        
    }
}