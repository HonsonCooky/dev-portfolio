import commands from "./commands.js";
import elements from "./elements.js";

export function updateTextbox(ev) {
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

	const words = ev.target.value.split(" ");
	let cmd = commands[words[0]];

	if (!cmd) {
		const unknownText = document.createElement("span");
		unknownText.innerText = ev.target.value;
		if (words.length > 1) unknownText.classList.add("unknown");

		elements.inputTextboxBufferElement.appendChild(unknownText);
		return;
	}

	const commandText = document.createElement("span");
	commandText.innerText = words[0];
	commandText.classList.add("cmd");
	elements.inputTextboxBufferElement.appendChild(commandText);

	const params = words.slice(1);
	const paramsText = document.createElement("span");
	paramsText.id = "parameters";
	params.forEach((p, i) => {
		const paramText = document.createElement("span");
		paramText.innerText = p;
		paramsText.appendChild(paramText);

		if (cmd[p]) paramText.classList.add("param");
		else if (i != params.length - 1) paramText.classList.add("unknown");
	});
	elements.inputTextboxBufferElement.appendChild(paramsText);
}

export function clearTextbox() {
	elements.inputField.value = "";
	elements.inputTextboxBufferElement.innerHTML = "";
	elements.inputTextboxCaretElement.style.left = 0;
	elements.inputTextboxCaretElement.scrollIntoView();
}
