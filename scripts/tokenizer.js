import commands from "./commands.js"

/**
 * Given a string, generate an array of HTML elements, where each element
 * is a keyword, or series of whitespace characters.
 * @param {string} value
 * @returns
 */
export function generateTokenElements(value) {
	let tokenIndex = 0;
	return value
		.split(/(\S+)|(\s+)/)
		.filter(Boolean)
		.map((word) => {
			const e = document.createElement("pre");
			e.innerText = word;
			if (word.match(/(\s+)/)) {
				e.className = "whitespace";
			} else {
				e.className = "token";
				e.tokenIndex = tokenIndex;
				tokenIndex++;
			}
			return e;
		});
}

/**
 * Given an HTML command token, update the classList to include the relevant
 * syntax highlighting component. You must provide the positional index of the
 * token, as a command is not valid if it's not the first token.
 * @param {HTMLPreElement} token
 */
export function syntaxHighlight(token) {
	if(token.tokenIndex === undefined) return;

	// If this is the first token, it has to be a command.
	if(token.tokenIndex === 0){
		const isCmd = commands[token.innerText]
	}
}
