module.exports = {
	name: "java_while_loop",
	description: "java while loop",
	execute(message, args) {
		message.channel.send(
			"**``While loops``** are used when you want to run part of your code over and over again, until a specific condition is met (or forever!).\n" +
				"```java\n" +
				"boolean condition = true;\n" +
				"while (condition == true) {\n" +
				'\tSystem.out.println("I\'m a while looop!"); // This will print out "I\'m a while loop!" to the console until condition is false.\n' +
				"}\n\n" +
				"// An endless While loop:\n" +
				"while (true) {\n" +
				'\tSystem.out.println("I\'m an endless while looop!"); // Will print forever.\n' +
				"}" +
				"```" +
				"\nMore info: https://www.geeksforgeeks.org/java-while-loop-with-examples/"
		);
	},
};
