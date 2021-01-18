module.exports = {
	name: "java_abstract",
	description: "java abstract",
	execute(message, args) {
		message.channel.send(
			"An **``abstract``** *``class``* is a *``class``* that is declared **``abstract``**. It may or may not include *``abstract``* *``methods``*. **``Abstract``** *``classes``* cannot be instantiated, but they can be subclassed.\n" +
				"An **``abstract``** *``method``* is a *``method``* that is declared without an implementation (without braces, and followed by a semicolon), like this:\n" +
				"```java\n" +
				"public abstract void moveTo(double x, double y);\n" +
				"```\n" +
				"If a *``class``* includes **``abstract``** *``methods``*, then the *``class``* itself must be declared **``abstract``**, as in:\n" +
				"```java\n" +
				"public abstract class SomeObject {\n" +
				"\t// declare fields...\n" +
				"\t// decale non-abstract methods\n" +
				"\tabstract void draw();\n" +
				"}\n" +
				"```\n" +
				"When an **``abstract``** *``class``* is subclassed, the subclass usually provides implementations for all of the **``abstract``** *``methods``* in its parent *``class``*. However, if it does not, then the subclass must also be declared **``abstract``**.\n" +
				"More info: https://docs.oracle.com/javase/tutorial/java/IandI/abstract.html"
		);
	},
};
