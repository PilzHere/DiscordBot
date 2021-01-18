module.exports = {
	name: "java_string",
	description: "java string",
	execute(message, args) {
		message.channel.send(
			'A **``String``** is an *``object``* containing an *``array``* of *``chars``*. It can store values such as "I am a String! 123" or "Java".\n' +
				"```java\n" +
				'private String greet = "Hello human!"; // Use (") before and after the content for the String.\n' +
				"System.out.println(greet); // This will print: Hello human! into the console.\n" +
				"```" +
				"\nMore info: https://www.geeksforgeeks.org/strings-in-java/"
		);
	},
};
