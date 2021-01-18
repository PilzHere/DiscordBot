module.exports = {
	name: "java_byte",
	description: "java byte",
	execute(message, args) {
		message.channel.send(
			"A **``byte``** is a *``primitive``*. It can store values from -128 to 127. It's size is 1 *``byte``* (8 bits).\n" +
				"When converting or comparing with a **``byte``** it can be useful to use an object of type *``Byte``*.\n" +
				"```java\n" +
				"byte b = 127;\n" +
				"b = Byte.MIN_VALUE; // b is now -128.\n" +
				"```" +
				"\nMore info: https://www.javatpoint.com/java-byte"
		);
	},
};
