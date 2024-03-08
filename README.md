# Bit Bot
Simple Discord bot that allows users to rank users by their bits

## Criteria
* Users can start a vote to +1 or -1 someone's bit
* After 30 seconds, the vote ends and the results are posted
* The resulting score is totaled into the user's overall funny score
* Users can view a leaderboard when a command is given
* Users can view specific member's score

## Installation
To install and run this discord bot on your machine, follow the steps below:

1. Clone this repository onto desired host machine
```C:Users:Namehere\> git clone [repolink]```

2.  Download the required packages through NPM
```npm i``` 

3. Create a config.json file in the root directory of the project and populate it with the following information:
```
{
    "BOT_TOKEN":"[YOUR_TOKEN_HERE]",
    "CLIENT_ID":"[CLIENT_ID_HERE]",
    "GUILD_ID":"[TEST_GUILD_ID_HERE]"
}
```

4.  Start the bot through the index.js file
``` node ./index.js```