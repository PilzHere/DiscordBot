module.exports = {
	name: "java_class",
	description: "java class",
	execute(message, args) {
		message.channel.send(
			"A **``class``** is a blueprint or prototype from which objects are created.\n" +
				"A **``class``** contains a *``Modifier``*, *``class keyword``*, *``Class name``*, *``Superclass``* (if any), *``Interfaces``* (if any) and the *``Body``*.\n" +
				"Here's a basic structure of a **``class``** named **Animal**:" +
				"```java\n" +
				"public class Animal {\n" +
				"\t// Body begins...\n" +
				"\tprotected String name;\n\n" +
				"\tpublic Animal(String name) {\n" +
				"\t\tthis.name = name;\n" +
				"\t}\n\n" +
				"\tprotected void eat() {\n" +
				"\t\t// Add more code here...\n" +
				"\t}\n" +
				"\t// Body ends.\n" +
				"}" +
				"```" +
				"\nHere's a more advanced **``class``**: **Dog** that **extends the Animal class** and **implements the Bark interface**:\n" +
				"```java\n" +
				"public class Dog extends Animal implements Bark {\n" +
				"\tpublic Dog(String name) {\n" +
				"\t\tsuper(name);\n" +
				"\t}\n\n" +
				"\t@Override\n" +
				"\tpublic void bark() {\n" +
				'\t\tSystem.out.println("Woof!"); // An interface does not contain code, so we implement our own.\n' +
				"\t}\n\n" +
				"\t@Override\n" +
				"\tprotected void eat() {\n" +
				"\t\tsuper.eat(); // Run the code in Animal class's eat method.\n\n" +
				"\t\t// Add even more code here...\n" +
				"\t}\n" +
				"}" +
				"```" +
				"\nMore info: https://www.geeksforgeeks.org/classes-objects-java/"
		);
	},
};
