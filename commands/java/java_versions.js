module.exports = {
	name: "java_versions",
	description: "java versions",
	execute(message, args) {
		message.channel.send(
			"The latest version of java is version 15.\n" +
				"It is recommended to use the LTS (Long Time Support) versions of Java in projects, as these versions will have support for a longer time than non-LTS versions will have.\n" +
				"The current LTS versions are:\n" +
				"8 and 11.\n" +
				"The next LTS version will be version 17."
		);
	},
};
