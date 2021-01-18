module.exports = {
	name: "java_float",
	description: "java float",
	execute(message, args) {
		message.channel.send(
			"A **``float``** is a *``primitive``*. The *``Float``* *``class``* wraps a value of the *``primitive``* type **``float``** to an *``object``*. It can store values in range from 1.40129846432481707e-45 to 3.40282346638528860e+38.\nIt's size is 4 *``bytes``* (32 bits).\n" +
				"It is not a good approach to use **``floats``** for precise values." +
				"```java\n" +
				"float f = 3.14f; // Notice the (f) at the end.\n" +
				"```" +
				"\nMore info: https://www.javatpoint.com/float-keyword-in-java"
		);
	},
};
