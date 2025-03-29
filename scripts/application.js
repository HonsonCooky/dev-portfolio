import { commands } from "./domain";

/**
 * Given a string, generate an array of HTML elements, where each element
 * is a keyword, or series of whitespace characters.
 * @param {string} value
 * @returns
 */
export function generateTokens(value) {
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
 * @param {boolean} isFirst 
 * @param {boolean} isError 
 */
export function syntaxHighlightToken(token, isFirst, isError) {
	if (isFirst) {
		token.classList.add(commands[token.innerText] ? "cmd" : "unknown");
		return;
	}

	if (isError) {
		token.classList.add("unknown");
		return;
	}

	token.classList.add("param");
}

/**
 * TODO: Token Hints
 * - Autocomplete "suggestions"
 * - Ambiguity, show list of options
 */
export function provideTabHints() {}


/**
 * Pull in a command from the history of commands entered.
 * @param {number} indexDirection (-1 or 1)
 */
export function navigateHistory(indexDirection) {
	if (indexDirection != -1 && indexDirection != 1)
		throw Error("Expected value from list [-1, 1].");

	const historyIndex = indexDirection;
	if (historyIndex === 0) {
		elements.inputField.value = "";
	} else if (historyIndex < 0) {
		historyIndex = 0;
	} else if (historyIndex > historyCommands.length) {
		historyIndex = historyCommands.length;
	} else {
		elements.inputField.value =
			historyCommands[historyCommands.length - historyIndex];
	}
}

/** */
export function evaluateCmd() {
}
