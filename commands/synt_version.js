module.exports = {
	name: "synt_version",
	description: "synt version",
	execute(message, args) {
		message.channel.send(
			"To use SyntHacks type **``synt``** followed by **``(name of programming language)``** followed by a **``word``**; describing what you want information or syntax for.\n" +
				"Examples:\n" +
				"**``synt java version``**\n" +
				"**``synt java for-loop``**\n" +
				"**``synt java classes``**\n" +
				"Type **``synt``** **``(name of progrmming language)``** **``words``** to see a wall of accepted words for said programming language.\n"
		);
	},
};
