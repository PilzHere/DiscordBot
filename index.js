const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
client.commands = new Discord.Collection();

const commandFiles = fs
	.readdirSync("./commands/")
	.filter((file) => file.endsWith(".js"));
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.once("ready", () => {
	console.log("Synthacks is online!");
});

const noMatchPostfix = "No match for postfix.";
const noMatchCommand = "No match for command.";

client.on("message", (message) => {
	const prefix = "synt ";

	// Make sure message starts with prefix bore anything else.
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	// get commands after prefix.
	let args = message.content.slice(prefix.length).split("/ +/");
	// to lowercase.
	const tempArgs = args.map((string) => string.toLowerCase());
	args = tempArgs;

	const postfix = args[0].substring(0, args[0].indexOf(" "));
	const command = args[0].substring(args[0].indexOf(" ") + 1);

	//console.log("postfix: = ", postfix);
	//console.log("command: = ", command);

	const tempArgs2 = [postfix, command];

	//let keepGoing = true;
	if (postfix === null || postfix === "") {
		// postfix is empty because no command given.
		console.log("command *actually postfix* is empty!");
		client.commands.get("help").execute(message, tempArgs2);
		return;
		//keepGoing = false;
	}

	//if (keepGoing) {
	switch (postfix) {
		case "help":
			client.commands.get("help").execute(message, tempArgs2);
			break;
		case "java":
			languageJava(postfix, command, message, tempArgs2);
			break;
		case "c":
			languageC(postfix, command, message, tempArgs2);
			break;
		default:
			console.log(noMatchPostfix);
			client.commands.get("unknown_postfix").execute(message, tempArgs2);
			break;
	}
	//}
});

function languageJava(postfix, command, message, args) {
	const registeredCommands = new Map([
		["java", "java_java"],
		["version", "java_versions"],
		["versions", "java_versions"],
		["if", "java_if"],
		["for-loop", "java_for_loop"],
		["foreach-loop", "java_for_each_loop"],
		["class", "java_class"],
		["method", "java_method"],
		["function", "java_method"],
		["private", "java_private"],
		["public", "java_public"],
		["protected", "java_protected"],
		["default", "java_default"],
		["lambda", "java_lambda"],
		["static", "java_static"],
		["abstract", "java_abstract"],
		["final", "java_final"],
		["switch", "java_switch"],
		["while-loop", "java_while_loop"],
		["do-while-loop", "java_do_while_loop"],
		["interface", "java_interface"],
		["enum", "java_enum"],
		["array", "java_array"],
		["arraylist", "java_arraylist"],
		["linkedlist", "java_linkedlist"],
		["map", "java_map"],
		["hashmap", "java_map"],
		["boolean", "java_boolean"],
		["byte", "java_byte"],
		["short", "java_short"],
		["int", "java_int"],
		["float", "java_float"],
		["long", "java_long"],
		["double", "java_double"],
	]);

	if (registeredCommands.get(command)) {
		//console.log("Found in hashmap!");
		//console.log(hashmap.get(command));
		client.commands
			.get(registeredCommands.get(command))
			.execute(message, args);
	}

	return;

	switch (command) {
		case "java":
			client.commands.get(postfix + "_" + command).execute(message, args);
			break;
		case "version":
			client.commands
				.get(postfix + "_" + command + "s")
				.execute(message, args);
			break;
		case "versions":
			client.commands.get(postfix + "_" + command).execute(message, args);
			break;
		default:
			console.log(noMatchCommand);
			client.commands.get("unknown_command").execute(message, args);
			break;
	}
}

function languageC(postfix, command, message, args) {
	const registeredCommands = new Map([
		["c", "c_c"],
		["version", "c_versions"],
		["versions", "c_versions"],
	]);

	if (registeredCommands.get(command)) {
		//console.log("Found in hashmap!");
		//console.log(hashmap.get(command));
		client.commands
			.get(registeredCommands.get(command))
			.execute(message, args);
	}

	return;

	switch (command) {
		case "c":
			client.commands.get(postfix + "_" + command).execute(message, args);
			break;
		case "version":
			client.commands
				.get(postfix + "_" + command + "s")
				.execute(message, args);
			break;
		case "versions":
			client.commands.get(postfix + "_" + command).execute(message, args);
			break;
		default:
			console.log(noMatchCommand);
			client.commands.get("unknown_command").execute(message, args);
			break;
	}
}

const token = fs.readFileSync("./token.txt", "utf8");
// Has to be last line in file.
client.login(token);
