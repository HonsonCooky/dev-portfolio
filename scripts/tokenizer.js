export function generateTokenElements(value) {
	return value
		.split(/(\S+)|(\s+)/)
		.filter((word) => !!word)
		.map((word) => {
			const e = document.createElement("pre");
			e.innerText = word;
			if (word.match(/(\s+)/)) e.className = "whitespace";
			return e;
		});
}

export function syntaxHighlight() {
	console.log("syntax highlight");
}
