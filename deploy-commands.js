const {REST, Routes} = require("discord.js");
const {CLIENT_ID, BOT_TOKEN} = require("./config.json");
const fs = require('node:fs');
const path = require('node:path');

const commands = [];
// Grab all the command folders from the commands directory you created earlier
const foldersPath = path.join(__dirname, 'commands');
const commandFolders = fs.readdirSync(foldersPath);

for (const folder of commandFolders) {
	// Grab all the command files from the commands directory you created earlier
	const commandsPath = path.join(foldersPath, folder);
	const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
	// Grab the SlashCommandBuilder#toJSON() output of each command's data for deployment
	for (const file of commandFiles) {
		const filePath = path.join(commandsPath, file);
		const command = require(filePath);
		if ('data' in command && 'execute' in command) {
			commands.push(command.data.toJSON());
		} else {
			console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
		}
	}
}

const rest = new REST().setToken(BOT_TOKEN);

// Uncomment this and put in the command_ID to be deleted
// rest.delete(Routes.applicationCommand( CLIENT_ID, 'commandId'))
// 	.then(() => console.log('Successfully deleted application command'))
// 	.catch(console.error);

(async() => {
    try{
		
        console.log(`Started refreshing ${commands.length} application (/) commands.`);

        const data = await rest.put(
            Routes.applicationCommands(CLIENT_ID),
            {body:commands},
        );
        console.log(`Successfully reloaded ${data.length} application (/) commands.`);
    } catch(error){
        console.error(error);
    }
})();