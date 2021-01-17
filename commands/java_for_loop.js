module.exports = {
	name: "java_for_loop",
	description: "java for loop",
	execute(message, args) {
		message.channel.send(
			"```java\n" +
				"// (Initialization condition; testing condition; increment/decrement).\n" +
				"for (int i = 0; i < 10; i++) {\n" +
				"\t System.out.println(i); // Will print 0, 1, 2, 3, 4, 5, 6, 7, 8, 9.\n" +
				"}\n\n" +
				"// Reverse for loop.\n" +
				"for (int i = 10; i > 0; i--) {\n" +
				"\t System.out.println(i); // Will print 10, 9, 8, 7, 6, 5, 4, 3, 2, 1.\n" +
				"}" +
				"```" +
				"\nMore info: https://www.geeksforgeeks.org/loops-in-java/"
		);
	},
};
