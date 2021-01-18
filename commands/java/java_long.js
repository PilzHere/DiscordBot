module.exports = {
	name: "java_long",
	description: "java long",
	execute(message, args) {
		message.channel.send(
			"A **``long``** is a *``primitive``*. The *``Long``* *``class``* wraps a value of the *``primitive``* type **``long``** to an *``object``*. It can store values in range from -9 223 372 036 854 775 808 to 9 223 372 036 854 775 807.\nIt's size is 8 *``bytes``* (64 bits).\n" +
				"```java\n" +
				"long g = 78989729834L;\n // Notice the (L) at the end." +
				"```" +
				"\nMore info: https://www.javatpoint.com/long-keyword-in-java"
		);
	},
};
