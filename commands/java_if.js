module.exports = {
	name: "java_if",
	description: "java if statement",
	execute(message, args) {
		message.channel.send(
			"```java\n" +
				"boolean condition = true;\n\n" +
				"if (condition == true) { // If condition is true...\n" +
				'\tSystem.out.println("Condition is " + condition + "."); // Prints: Condition is true.\n' +
				"}\n\n" +
				"if (condition == false) { // If condition is false...\n" +
				'\tSystem.out.println("Condition is " + condition + "."); // Will not execute because condition is true.\n' +
				"}\n\n" +
				"//Shorter versions:\n" +
				"if (condition) // If condition is true...\n" +
				'\tSystem.out.println("Condition is true!"); // This only works if the code inside the scope is 1 row.\n' +
				"\n\n" +
				"if (!condition) // If condition is false...\n" +
				'\tSystem.out.println("Condition is false!"); // This only works if the code inside the scope is 1 row.\n' +
				"// If the code is more than 1 row, all other rows will act as outside the if-statament." +
				"```" +
				"\nMore info: https://www.geeksforgeeks.org/java-if-statement-with-examples/"
		);
	},
};
