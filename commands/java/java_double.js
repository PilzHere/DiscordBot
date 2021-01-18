module.exports = {
	name: "java_double",
	description: "java double",
	execute(message, args) {
		message.channel.send(
			"A **``double``** is a *``primitive``*. The *``Double``* *``class``* wraps a value of the *``primitive``* type **``double``** to an *``object``*. It can store values in range from 4.9E-324 to 1.7976931348623157E308.\nIt's size is 8 *``bytes``* (64 bits).\n" +
				"It is not a good approach to use **``doubles``** for precise values." +
				"```java\n" +
				"double z = 1.1700007d;\n // Notice the (d) at the end." +
				"```" +
				"\nMore info: https://www.javatpoint.com/double-keyword-in-java"
		);
	},
};
