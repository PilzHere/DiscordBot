module.exports = {
	name: "java_do_while_loop",
	description: "java do while loop",
	execute(message, args) {
		message.channel.send(
			"**``Do while loops``** will execute a block of code at least once, and then either repeatedly executes the block, or stops executing it, depending on a given boolean condition at the end of the block.\n" +
				"```java\n" +
				"int i = 1;\n" +
				"do {\n" +
				"\tSystem.out.println(i); // Will print 1, 2, 3, 4, 5 to the console.\n" +
				"\ti++;\n" +
				"}\n" +
				"while (i < 6);" +
				"```" +
				"\nMore info: https://www.geeksforgeeks.org/java-do-while-loop-with-examples/"
		);
	},
};
