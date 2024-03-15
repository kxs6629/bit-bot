# Bit Bot v1.0.0
Simple Discord bot that allows users to rank users by their bits

## Criteria
* Users can start a vote to +1 or -1 someone's bit
* Users can view a leaderboard when a command is given
* Users can view specific member's score

## Installation
The required dependencies for this project:
* Node.js - v16 or later
* Sqlite - v3.44 or later

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

4. Run the syncdb.js file to populate PostSQL DB
```node ./syncdb.js```

5.  Start the bot through the index.js file
``` node ./index.js```

## Future Functionality
* G a m b l i n g