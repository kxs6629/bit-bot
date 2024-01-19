const {REST, Routes} = require("discord.js");

const {CLIENT_ID, BOT_TOKEN} = require("./config.json");
const rest = new REST().setToken(BOT_TOKEN);

rest.put(Routes.applicationCommands(CLIENT_ID), { body: [] })
	.then(() => console.log('Successfully deleted all application commands.'))
	.catch(console.error);