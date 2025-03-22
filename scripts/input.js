import elements from "./elements.js";

function _focusInputField(_ev) {
	elements.inputField.focus();
}

function _inputUpdateHighlight(ev) {
	_inputUpdate(ev);
}

function _inputUpdate(ev) {
	if (ev.key === "Enter" && elements.inputField.value.length ){
		_evaluateInput(ev);
		return;
	}

	// Update Custom Caret Position - Timeout Blinking
	const caret = elements.inputTextboxCaretElement;
	caret.style.left = ev.target.selectionStart + "ch";
	caret.classList.add("paused");
	clearTimeout(caret.pauseTimeout);
	caret.pauseTimeout = setTimeout(() => caret.classList.remove("paused"), 100);

	// Update the value inside our custom buffer - Highlighting keywords
	elements.inputTextboxBufferElement.innerHTML = ev.target.value;
}

function _evaluateInput(ev) {
	console.log(ev);
	// Output Section
	elements.outputElement.historyCount = (elements.outputElement.historyCount ?? 0) + 1;

	const outputSection = document.createElement("section");
	outputSection.id = `history-${elements.outputElement.historyCount}`;

	const outputPrompt = document.createElement("div");
	outputPrompt.id = `prompt-${elements.outputElement.historyCount}`;
	outputPrompt.appendChild(elements.inputPromptElement.cloneNode(true));
	outputPrompt.appendChild(elements.inputTextboxBufferElement.cloneNode(true));
	outputSection.appendChild(outputPrompt);

	const outputResult = document.createElement("div");
	outputResult.id = `result-${elements.outputElement.historyCount}`

	elements.outputElement.appendChild(outputSection);

	// Clear out for next input
	elements.inputField.value = "";
	// Technically these aren't necessary - but it removes some visual lag artifacts.
	elements.inputTextboxBufferElement.innerHTML = "";
	elements.inputTextboxCaretElement.style.left = 0;
}

document.addEventListener("focus", _focusInputField);
document.addEventListener("focusin", _focusInputField);
document.addEventListener("focusout", _focusInputField);
elements.inputField.addEventListener("focusout", _focusInputField);
elements.inputField.addEventListener("keydown", _inputUpdate);
elements.inputField.addEventListener("input", _inputUpdateHighlight);
elements.inputField.addEventListener("keyup", _inputUpdate);
_focusInputField();
