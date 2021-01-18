module.exports = {
	name: "java_short",
	description: "java short",
	execute(message, args) {
		message.channel.send(
			"A **``short``** is a *``primitive``*. It can store values from -32,768 to 32,767. It's size is 2 *``bytes``* (16 bits).\n" +
				"An *``object``* of type *``Short``* contains methods for comparing **``short``** with other *``primitives``*.\n" +
				"```java\n" +
				"short s = -37268;\n" +
				"s = Short.MAX_VALUE; // s is now 37267.\n" +
				"```" +
				"\nMore info: https://www.geeksforgeeks.org/data-types-in-java/"
		);
	},
};
