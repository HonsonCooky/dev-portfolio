import { commands } from "./environment.js";
import elements from "./elements.js";

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
	if (token.tokenIndex === undefined) return;

	// If this is the first token, it has to be a command.
	if (token.tokenIndex === 0) {
		if (commands[token.innerText]) {
			token.classList.add("cmd");
		}
		return;
	}

	const cmdToken = elements.inputTextboxBufferElement.querySelector(".cmd");

	// Should be a cmd token first. If not, the whole thing is borked.
	if (!cmdToken) {
		Array.from(
			elements.inputTextboxBufferElement.querySelectorAll(".token")
		).forEach((e) => {
			e.classList.add("unknown");
		});
		return;
	}

	token.classList.add("param");
}

/**
 * Get an array of strings representing the tokens currently in the input
 * buffer.
 * @returns
 */
export function getCurrentTokens() {
	const tokens = Array.from(
		elements.inputTextboxBufferElement.querySelectorAll(".token")
	);

	return tokens.map((e) => e.innerText);
}

/**
 * TODO: Token Hints
 * - Autocomplete "suggestions"
 * - Ambiguity, show list of options
 */
export function provideTabHints() {}
