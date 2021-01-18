module.exports = {
	name: "synt_unknown_postfix",
	description: "synt unknown postfix",
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
