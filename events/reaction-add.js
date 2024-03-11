const { Events } = require('discord.js');
const UserInfo = require('../models/UserInfo');

module.exports = {
    name: Events.MessageReactionAdd,
    async execute(reaction, user){
        if(reaction.partial){
            try{
                await reaction.fetch();
            } catch(err){
                console.error(err);
                return;
            }
        }
        if(reaction._emoji.name === "Plusone"){
            const [judgedOne,created] = await UserInfo.findOrCreate({where:{user_id: reaction.message.author,guild_id: reaction.message.guildId}});
            judgedOne.increment({'score':1})
            console.log("plus one!")
            // console.log(reaction._emoji.name);
        }
        if(reaction._emoji.name === "Mlnusone"){
            const [judgedOne,created] = await UserInfo.findOrCreate({where:{user_id: reaction.message.author,guild_id: reaction.message.guildId}});
            judgedOne.decrent({'score':1})
            console.log("minus one!")
            // console.log(reaction._emoji.name);
        }
        // console.log(reaction.message)
        // console.log(reaction.message.guildId);
        // console.log(reaction.message.author.id);
        // console.log(reaction._emoji.name);
    }
}