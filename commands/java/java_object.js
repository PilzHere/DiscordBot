module.exports = {
	name: "java_object",
	description: "java object",
	execute(message, args) {
		message.channel.send(
			"An **``object``** is an instantiated *``class``* allocated in memory.\n" +
				"It is the *``new``* operator that instantiates the *``class``*.\n" +
				"```java\n" +
				"public class Main {\n" +
				"\tpublic static void main(String[] args) {\n" +
				'\t\tDog dog = new Dog("Baxter"); // An object of the class Dog is now in the computer\'s memory.\n' +
				"\t\tdog.bark();\n" +
				"\t}\n" +
				"}" +
				"```" +
				"\nMore info: https://www.geeksforgeeks.org/classes-objects-java/"
		);
	},
};
