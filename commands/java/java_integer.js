module.exports = {
	name: "java_integer",
	description: "java integer",
	execute(message, args) {
		message.channel.send(
			"An **``int``** is a *``primitive``*. The *``Integer``* *``class``* wraps a value of the *``primitive``* type **``int``** to an *``object``*. It can store values from -2 147 483 648 to 2 147 483 647.\nIt's size is 4 *``bytes``* (32 bits).\n" +
				"```java\n" +
				"int i = 9000;\n" +
				"i = Integer.MIN_VALUE; // i is now -2^31. (-2 147 483 648)\n" +
				"```" +
				"\nMore info: https://www.javatpoint.com/java-byte"
		);
	},
};
