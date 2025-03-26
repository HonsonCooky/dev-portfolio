import commands from "./commands.js";
import elements from "./elements.js";
import { printCommand, printCommandOutput } from "./output.js";

/** Force focus onto the invisible input field - the only way users can interact with the document */
function focusInputField(_ev) {
	elements.inputField.focus();
}

/** Create an HTML Element token for a word */
function wordToken(word, type) {
	const spanElement = document.createElement("pre");
	spanElement.className = type ?? "";
	spanElement.innerText = word;
	return spanElement;
}

/** Evaluate the users keyboard input */
async function updateInput(ev) {
	// Saftey Clear
	elements.inputTextboxBufferElement.innerHTML = "";

	// {cmd} {param1} {param2}
	const words = ev.target.value.split(" ");

	if (words.length < 2) {
		const textElement = wordToken(ev.target.value);
		elements.inputTextboxBufferElement.appendChild(textElement);
		return;
	}

	const firstWord = words[0];
	const cmd = commands[firstWord];

	// If the first word is an unknown cmd, then the whole thing is unknown
	if (!cmd) {
		const token = wordToken(ev.target.value, "unknown");
		elements.inputTextboxBufferElement.appendChild(token);
		return;
	}

	// We have a command - do we have correct parameters
	const cmdToken = wordToken(firstWord, "cmd");
	elements.inputTextboxBufferElement.appendChild(cmdToken);

	const paramsToken = wordToken(ev.target.value.split(firstWord)[1], "param");
	elements.inputTextboxBufferElement.appendChild(paramsToken);
}

async function updateCaret() {
	const caret = elements.inputTextboxCaretElement;
	caret.style.left = elements.inputField.selectionStart + "ch";
	caret.classList.add("paused");
	clearTimeout(caret.pauseTimeout);
	caret.pauseTimeout = setTimeout(() => caret.classList.remove("paused"), 100);
	caret.scrollIntoView();
}

function updateTextbox(ev) {
	if (ev.target.value.length > 64 && ev.key.length === 1) {
		alert("Maximum Character Limit Reached");
		ev.preventDefault();
		return;
	}

	updateInput(ev);
	updateCaret();
}

function clearTextbox(ev) {
	elements.inputField.value = "";
	updateTextbox(ev);
}

function userInput(ev) {
	if (ev.key === "Enter" && elements.inputField.value.length) {
		printCommand();
		printCommandOutput();
		clearTextbox(ev);
		return;
	}

	updateTextbox(ev);
}

document.addEventListener("focus", focusInputField);
document.addEventListener("focusin", focusInputField);
document.addEventListener("focusout", focusInputField);
elements.inputField.addEventListener("focusout", focusInputField);
elements.inputField.addEventListener("keydown", userInput);
elements.inputField.addEventListener("input", userInput);
elements.inputField.addEventListener("keyup", userInput);
focusInputField();
