module.exports = {
	name: "help",
	description: "help",
	execute(message, args) {
		message.channel.send(
			"To use SyntHacks type name of programming language, followed by a word; describing what you want information or syntax for.\n" +
				"For example:\n" +
				"**``synt java versions``**\n" +
				"or\n" +
				"**``synt c versions``**"
		);
	},
};
