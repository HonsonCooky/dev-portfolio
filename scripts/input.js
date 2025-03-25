import commands from "./commands.js";
import elements from "./elements.js";

export function updateTextbox(ev) {
	if(ev.target.value.length > 64 && ev.key.length === 1) {
		alert("Maximum Character Limit Reached");
		ev.preventDefault();
		return;
	}

	_updateCaret(ev);
	_updateInput(ev);
}

async function _updateCaret(ev) {
	const caret = elements.inputTextboxCaretElement;
	caret.style.left = ev.target.selectionStart + "ch";
	caret.classList.add("paused");
	clearTimeout(caret.pauseTimeout);
	caret.pauseTimeout = setTimeout(() => caret.classList.remove("paused"), 100);
	caret.scrollIntoView();
}

async function _updateInput(ev) {
	// Saftey Clear
	elements.inputTextboxBufferElement.innerHTML = "";

	// {cmd} {param1} {param2}
	const words = ev.target.value.split(" ");

	if (words.length < 2) {
		const textElement = _wordToken(ev.target.value);
		elements.inputTextboxBufferElement.appendChild(textElement);
		return;
	}

	const firstWord = words[0];
	const cmd = commands[firstWord];

	// If the first word is unknown, then the whole thing is an error
	if (!cmd) {
		const token = _wordToken(ev.target.value, "unknown");
		elements.inputTextboxBufferElement.appendChild(token);
		return;
	}

	// We have a command - do we have correct parameters
	const cmdToken = _wordToken(firstWord, "cmd");
	elements.inputTextboxBufferElement.appendChild(cmdToken);

	const paramsToken = _wordToken(ev.target.value.split(firstWord)[1], "param");
	elements.inputTextboxBufferElement.appendChild(paramsToken);
}

function _wordToken(word, type) {
	console.log(word);
	const spanElement = document.createElement("pre");
	spanElement.className = type ?? "";
	spanElement.innerText = word;
	return spanElement;
}

export function clearTextbox() {
	elements.inputField.value = "";
	elements.inputTextboxBufferElement.innerHTML = "";
	elements.inputTextboxCaretElement.style.left = 0;
	elements.inputTextboxCaretElement.scrollIntoView();
}
