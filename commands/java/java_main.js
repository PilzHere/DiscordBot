module.exports = {
	name: "java_main",
	description: "java main",
	execute(message, args) {
		message.channel.send(
			"The **``main``** *``method``* is the *``method``* the *``JVM``* should read first in your program. When running or debuging a program you want the *``JVM``* to run the *``class``* containing the **``main``** *``method``*." +
				"```java\n" +
				"public class Main { // Class name does not need to be Main.\n" +
				"\tpublic static void main(String[] args) { // The main method can take input arguments when you run your program.\n" +
				"\t\t// This is the main method. Should always be the first method to be run in your program.\n" +
				"\t}\n" +
				"}" +
				"```"
		);
	},
};
