module.exports = {
	name: "java_keyword",
	description: "java keyword",
	execute(message, args) {
		message.channel.send(
			"Here is a list of **``keywords``** in the Java programming language. You cannot use any of the following as identifiers in your programs. The **``keywords``** *``const``* and *``goto``* are reserved, even though they are not currently used. *``true``*, *``false``*, and *``null``* might seem like **``keywords``**, but they are actually *``literals``*; you cannot use them as identifiers in your programs.\n" +
				"```java\n" +
				"abstract\tcontinue\tfor\tnew\tswitch\n" +
				"assert\tdefault\tgoto\tpackage\tsynchronized\n" +
				"boolean\tdo\tif\tprivate\tthis\n" +
				"break\tdouble\timplements\tprotected\tthrow\n" +
				"byte\telse\timport\tpublic\tthrows\n" +
				"case\tenum\tinstanceof\treturn\ttransient\n" +
				"catch\textends\tint\tshort\ttry\n" +
				"char\tfinal\tinterface\tstatic\tvoid\n" +
				"class\tfinally\tlong\tstrictfp\tvolatile\n" +
				"const\tfloat\tnative\tsuper\twhile" +
				"```" +
				"\nMore info: https://docs.oracle.com/javase/tutorial/java/nutsandbolts/_keywords.html"
		);
	},
};
