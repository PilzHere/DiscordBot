module.exports = {
	name: "java_boolean",
	description: "java boolean",
	execute(message, args) {
		message.channel.send(
			"A **``boolean``** is a *``primitive``*. It can either be *``true``* (1) or *``false``* (0). A **``boolean``** is 1 bit in size.\n" +
				"An object of type *``Boolean``* contains a single field, whose type is **``boolean``**.\n" +
				"```java\n" +
				"boolean b = true;\n" +
				"b = Boolean.FALSE; // b is now false.\n" +
				"```" +
				"\nMore info: https://www.geeksforgeeks.org/java-lang-boolean-class-java/"
		);
	},
};
