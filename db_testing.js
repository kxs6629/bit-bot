const UserInfo = require('./models/UserInfo');

async function test(){
    const [userInfo,created] = await UserInfo.findOrCreate({where:{guild_id:'1112163571028201522',user_id:'267393535509135380'}});
    userInfo.decrement({'score': 50})

    // // console.log(created);
    // // console.log(userInfo);
    // // console.log(userInfo.id);
    // // console.log(userInfo.score);

    // // const testBoard = await UserInfo.findAll({where: {guild_id:312}, order:[['score','DESC']],limit:3},);
    // const testBoard = await UserInfo.findAll({where: {guild_id:312}, order:[['score','DESC']],limit:3},);
    // // const testBoard = await UserInfo.findAll({where: {guild_id:32}, order:[['score','DESC']],limit:3},);
    // if(testBoard.length > 0){
    //     let leaderboardString = "```\n"
    //     let x = 1
    //     testBoard.forEach(element => {
    //         leaderboardString+= `#${x}: ${element.user_id} | ${element.score}\n`
    //         x++;
    //     });
    //     leaderboardString+='```';
    //     console.log(leaderboardString);
    // }
    // else{
    //     console.log("No users have a score in this server (yet)")
    // }
    
}

test();