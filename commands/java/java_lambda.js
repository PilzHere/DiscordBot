module.exports = {
	name: "java_lambda",
	description: "java lambda",
	execute(message, args) {
		message.channel.send(
			"**``Lambda``** expressions basically express instances of functional *``interfaces``* (An *``interface``* with single *``abstract``* *``method``* is called functional *``interface``*). **``Lambda``** expressions implement the only *``abstract``* method and therefore implement functional *``interfaces``*.\n\n" +
				"**``Lambda``** functionalities:\n" +
				"\tEnable to treat functionality as a *``method``* *``argument``*, or code as data.\n" +
				"\tA *``method``* that can be created without belonging to any *``class``*.\n" +
				"\tA **``lambda``** expression can be passed around as if it was an *``object``* and executed on demand.\n" +
				"```java\n" +
				"interface FuncInterface {\n" +
				"\tvoid abstractFun(int x);\n\n" +
				"\tdefault void normalFun() {\n" +
				'\t\tSystem.out.println("This is normaly fun!.");\n' +
				"\t}\n" +
				"}\n\n" +
				"class Test {\n" +
				"\tpublic static void main(String[] args) {\n" +
				"\t\tFuncInterface fobj = (int x)->System.out.println(2*x);\n\n" +
				"\t\tfobj.abstractFun(5); // Calls the above lambda expression and prints 10.\n" +
				"\t}\n" +
				"}" +
				"```"
		);
	},
};
