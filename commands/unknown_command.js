module.exports = {
	name: "unknown_command",
	description: "unknown command",
	execute(message, args) {
		message.channel.send(
			"**``" +
				args[1] +
				"``**" +
				" Is not a known command in " +
				args[0] +
				".\n" +
				"Example: **``version``**."
		);
	},
};
