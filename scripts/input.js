import elements from "./elements.js";

export function updateInputElement(ev) {
	// Update Custom Caret Position - Timeout Blinking
	const caret = elements.inputTextboxCaretElement;
	caret.style.left = ev.target.selectionStart + "ch";
	caret.classList.add("paused");
	clearTimeout(caret.pauseTimeout);
	caret.pauseTimeout = setTimeout(() => caret.classList.remove("paused"), 100);

	// Update the value inside our custom buffer - Highlighting keywords
	elements.inputTextboxBufferElement.innerHTML = ev.target.value;
}

async function _inputSyntaxHighlighting() {}

export function clearInputElement() {
	elements.inputField.value = "";
	elements.inputTextboxBufferElement.innerHTML = "";
	elements.inputTextboxCaretElement.style.left = 0;
}
