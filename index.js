const version = "1.0.0";
const debug = true; // SET TO FALSE BEFORE PUSH/RELEASE.

const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
client.commands = new Discord.Collection();

readCommandsFromFiles();

client.once("ready", () => {
	console.log("SyntHacks is online!");
});

client.on("message", (message) => {
	const prefix = "synt ";

	const noMatchPostfix = "No match for postfix.";
	//const noMatchCommand = "No match for command.";

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

	if (postfix === null || postfix === "") {
		// postfix is empty because no command given.
		console.log("command *actually postfix* is empty!");
		if (command === "author")
			client.commands.get("synt_author").execute(message, tempArgs2);
		else if (command === "version")
			message.channel.send(
				"This is SyntHacks version: **" + version + "**."
			);
		else client.commands.get("synt_help").execute(message, tempArgs2);
		return;
	}

	switch (postfix) {
		case "help":
			client.commands.get("synt_help").execute(message, tempArgs2);
			break;
		case "java":
			languageJava(postfix, command, message, tempArgs2);
			break;
		case "c":
			languageC(postfix, command, message, tempArgs2);
			break;
		default:
			console.log(noMatchPostfix);
			client.commands
				.get("synt_unknown_postfix")
				.execute(message, tempArgs2);
			break;
	}
});

client.off("message", (message) => {
	console.log("SyntHacks signing off.");
});

if (debug) {
	const token = fs.readFileSync("./token.txt", "utf8");
	client.login(token); // Has to be last line read in file.
} else {
	client.login(process.env.SYNTHACKS_TOKEN); // Has to be last line read in file.
}

function languageJava(postfix, command, message, args) {
	const registeredCommands = new Map([
		["java", "java_java"],
		["version", "java_versions"],
		["versions", "java_versions"],
		["main", "java_main"],
		["null", "java_null"],
		["heap", "java_heap"],
		["if", "java_if"],
		["loop", "java_for_loop"],
		["loops", "java_for_loop"],
		["for-loop", "java_for_loop"],
		["for-loops", "java_for_loop"],
		["forloop", "java_for_loop"],
		["forloops", "java_for_loop"],
		["for", "java_for_loop"],
		["loop", "java_for_loop"],
		["for-each-loop", "java_for_each_loop"],
		["for-each-loops", "java_for_each_loop"],
		["foreach-loop", "java_for_each_loop"],
		["foreach-loops", "java_for_each_loop"],
		["foreachloop", "java_for_each_loop"],
		["foreachloops", "java_for_each_loop"],
		["foreach", "java_for_each_loop"],
		["for-each", "java_for_each_loop"],
		["while", "java_while_loop"],
		["while-loop", "java_while_loop"],
		["while-loops", "java_while_loop"],
		["whileloop", "java_while_loop"],
		["whileloops", "java_while_loop"],
		["do", "java_do_while_loop"],
		["do-while", "java_do_while_loop"],
		["dowhile", "java_do_while_loop"],
		["do-while-loop", "java_do_while_loop"],
		["do-while-loops", "java_do_while_loop"],
		["do-whileloop", "java_do_while_loop"],
		["do-whileloops", "java_do_while_loop"],
		["dowhile-loop", "java_do_while_loop"],
		["dowhile-loops", "java_do_while_loop"],
		["dowhileloop", "java_do_while_loop"],
		["dowhileloops", "java_do_while_loop"],
		["class", "java_class"],
		["classes", "java_class"],
		["object", "java_object"],
		["objects", "java_object"],
		["method", "java_method"],
		["methods", "java_method"],
		["modifier", "java_modifier"],
		["modifiers", "java_modifier"],
		["function", "java_method"],
		["functions", "java_method"],
		["literal", "java_literal"],
		["literals", "java_literal"],
		["keyword", "java_keyword"],
		["keywords", "java_keyword"],
		["identifier", "java_identifier"],
		["identifiers", "java_identifier"],
		["private", "java_private"],
		["public", "java_public"],
		["protected", "java_protected"],
		["default", "java_default"],
		["lambda", "java_lambda"],
		["lambdas", "java_lambda"],
		["lamb", "java_lambda"],
		["lambs", "java_lambda"],
		["static", "java_static"],
		["abstract", "java_abstract"],
		["final", "java_final"],
		["switch", "java_switch"],
		["super", "java_super"],
		["super-class", "java_superclass"],
		["superclass", "java_superclass"],
		["interface", "java_interface"],
		["interfaces", "java_interface"],
		["enum", "java_enum"],
		["enums", "java_enum"],
		["array", "java_array"],
		["arrays", "java_array"],
		["array-list", "java_arraylist"],
		["array-lists", "java_arraylist"],
		["arraylist", "java_arraylist"],
		["arraylists", "java_arraylist"],
		["linked_list", "java_linkedlist"],
		["linked_lists", "java_linkedlist"],
		["linkedlist", "java_linkedlist"],
		["linkedlists", "java_linkedlist"],
		["map", "java_map"],
		["maps", "java_map"],
		["hashmap", "java_hashmap"],
		["hashmaps", "java_hashmap"],
		["boolean", "java_boolean"],
		["booleans", "java_boolean"],
		["bool", "java_boolean"],
		["byte", "java_byte"],
		["bytes", "java_byte"],
		["char", "java_char"],
		["chars", "java_char"],
		["short", "java_short"],
		["shorts", "java_short"],
		["int", "java_integer"],
		["ints", "java_integer"],
		["integer", "java_integer"],
		["integers", "java_integer"],
		["float", "java_float"],
		["floats", "java_float"],
		["floating-point", "java_float"],
		["floating-points", "java_float"],
		["floatingpoint", "java_float"],
		["floatingpoints", "java_float"],
		["long", "java_long"],
		["longs", "java_long"],
		["double", "java_double"],
		["doubles", "java_double"],
		["string", "java_string"],
		["strings", "java_string"],
		["escape-sequence", "java_escape_sequence"],
		["escape", "java_escape_sequence"],
		["sequence", "java_escape_sequence"],
		["generic", "java_generic"],
		["generics", "java_generic"],
		["singleton", "java_singleton"],
		["singletons", "java_singleton"],
		["serialize", "java_serialization"],
		["serializable", "java_serialization"],
		["deserialize", "java_deserialization"],
		["stream", "java_stream"],
		["streams", "java_stream"],
	]);

	if (registeredCommands.get(command)) {
		//console.log("Found in hashmap!");
		//console.log(registeredCommands.get(command));
		client.commands
			.get(registeredCommands.get(command))
			.execute(message, args);
	} else if (command === "words" || command === "word") {
		const words = [];
		registeredCommands.forEach((value, key) => {
			words.push(key.toString());
		});

		message.channel.send(
			"Accepted **``words``** for **Java** are:\n" + words.join("\t")
		);
	} else {
		client.commands.get("synt_unknown_command").execute(message, args);
	}

	return;

	// Old code.
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
	} else if (command === "words" || command === "word") {
		const words = [];
		registeredCommands.forEach((value, key) => {
			words.push(key.toString());
		});

		message.channel.send(
			"Accepted **``words``** for **C** are:\n" + words.join("\t")
		);
	} else {
		client.commands.get("synt_unknown_command").execute(message, args);
	}

	return;

	// Old code.
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

function readCommandsFromFiles() {
	// Load all command files and set commands for client.
	const commandFilesSynt = fs
		.readdirSync("./commands/")
		.filter((file) => file.endsWith(".js"));

	for (const file of commandFilesSynt) {
		const command = require(`./commands/${file}`);
		client.commands.set(command.name, command);
	}

	const commandFilesC = fs
		.readdirSync("./commands/c/")
		.filter((file) => file.endsWith(".js"));

	for (const file of commandFilesC) {
		const command = require(`./commands/c/${file}`);
		client.commands.set(command.name, command);
	}

	const commandFilesJava = fs
		.readdirSync("./commands/java/")
		.filter((file) => file.endsWith(".js"));

	for (const file of commandFilesJava) {
		const command = require(`./commands/java/${file}`);
		client.commands.set(command.name, command);
	}
	// End loading command files.
}
