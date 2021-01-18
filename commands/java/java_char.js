module.exports = {
	name: "java_char",
	description: "java char",
	execute(message, args) {
		message.channel.send(
			"A **``char``** is a *``primitive``*. It can store character representation of *``ASCII``* values 0 to 65,535. It's size is 2 *``bytes``* (16 bits).\n" +
				"It may also store escape sequences such as " +
				"*``\\t``*, *``\\b``*, *``\\n``*, *``\\r``*, *``\\f``*, " +
				"*``\\'``*, " +
				'*``\\"``* ' +
				"and " +
				"*``\\" +
				"\\``*" +
				"." +
				"```java\n" +
				"char c = 's'; // Use (') before and after the content in the char.\n" +
				"System.out.println(c) // Prints s to the console.\n" +
				"```" +
				"\nMore info: https://www.tutorialspoint.com/java/java_characters.htm"
		);
	},
};
