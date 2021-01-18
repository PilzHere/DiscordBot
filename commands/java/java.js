module.exports = {
	name: "java_java",
	description: "java history",
	execute(message, args) {
		message.channel.send(
			"Java is an object oriented programming language that is built on C which uses a virtual machine (JVM) to read compiled java code (bytecode).\n" +
				"It was created by James Gosling who was working for Sun Microsystems and debuted the 23rd of May 1995. Today it is developed by Oracle.\n" +
				"Java's 3 main parts are: JVM, JRE and JDK."
		);
	},
};
