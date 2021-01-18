module.exports = {
	name: "author",
	description: "author",
	execute(message, args) {
		message.channel.send(
			"**SyntHacks**\n" +
				'Created by **Christian "PilzHere" Pilz**.' +
				"\n\nWebsite: \t\t\t\t\thttps://wwww.christianpilz.com" +
				"\nGithub:\t\t\t\t\t\thttps://github.com/PilzHere" +
				"\nSyntHacks's repo: \thttps://github.com/PilzHere/SyntHacks" +
				"\nTwitter:   \t\t\t\t\thttps://twitter.com/PilzHere" +
				"\nMail:\t\t\t\t\t\t\t**svampodling at gmail dot com**"
		);
	},
};
