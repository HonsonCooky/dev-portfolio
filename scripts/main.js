import elements from "./elements.js";
import { clearTextbox, updateTextbox } from "./input.js";
import { printCommand, printCommandOutput } from "./output.js";

function _focusInputField(_ev) {
	elements.inputField.focus();
}

function _userInput(ev) {
	if (ev.key === "Enter" && elements.inputField.value.length) {
		printCommand();
		printCommandOutput();
		clearTextbox();
		return;
	}

	updateTextbox(ev);
}

document.addEventListener("focus", _focusInputField);
document.addEventListener("focusin", _focusInputField);
document.addEventListener("focusout", _focusInputField);
elements.inputField.addEventListener("focusout", _focusInputField);
elements.inputField.addEventListener("keydown", _userInput);
elements.inputField.addEventListener("input", _userInput);
elements.inputField.addEventListener("keyup", _userInput);
_focusInputField();
