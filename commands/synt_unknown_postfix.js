module.exports = {
	name: "unknown_postfix",
	description: "unknown postfix",
	execute(message, args) {
		message.channel.send(
			"**``" +
				args[0] +
				"``**" +
				" Is not a known programming language.\n" +
				"Example: **``java``**."
		);
	},
};
