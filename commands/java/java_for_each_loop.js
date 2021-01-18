module.exports = {
	name: "java_for_each_loop",
	description: "java for each loop",
	execute(message, args) {
		message.channel.send(
			"**``For-each loops``** are great when you need to iterate over *EVERY* element in an array as they are faster than a *``for loop``*.\n" +
				"Don't use **``for-each loops``** when you need to modify the array. Use a *``for loop``* instead.\n" +
				"```java\n" +
				"int[] numbers = {1, 2, 3, 4, 5};\n\n" +
				"// (type name : array).\n" +
				"for (int number : numbers) {\n" +
				"\tSystem.out.println(number); // Will print 1, 2, 3, 4, 5.\n" +
				"}" +
				"```" +
				"\nMore info: https://www.geeksforgeeks.org/for-each-loop-in-java/"
		);
	},
};
