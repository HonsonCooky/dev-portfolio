import elements from "./elements.js";
import {
	generateTokenElements,
	getCurrentTokens,
	syntaxHighlight,
} from "./tokenizer.js";

let historyCommands = [];
let historyIndex = 0;

/**
 * Force focus onto the invisible input field - the only interface for user
 * interactions.
 */
function focusInputField() {
	elements.inputField.focus();
}

/**
 * Updates the position of our custom text caret, based on the location of the
 * caret in the invisible input field
 */
function updateCaret() {
	// Move
	const caret = elements.inputTextboxCaretElement;
	caret.style.left = elements.inputField.selectionStart + "ch";

	// Pause Animation
	caret.classList.add("paused");
	clearTimeout(caret.pauseTimeout);
	caret.pauseTimeout = setTimeout(
		() => caret.classList.remove("paused"),
		100
	);

	// Ensure On Screen
	caret.scrollIntoView();
}

/**
 * Update the contents of our custom textbox, to match the value of the
 * invisible input field that the user is secretly inputing to.
 * @returns
 */
function updateTextbox() {
	elements.inputTextboxBufferElement.innerHTML = "";
	generateTokenElements(elements.inputField.value).forEach((token) => {
		elements.inputTextboxBufferElement.appendChild(token);
		syntaxHighlight(token);
	});

	// If the textbox needed updating, so too will the caret.
	updateCaret();
}

/**
 * Clear the invisible input field, and update the custom textbox render.
 * Truly nothing special - but in the case this element changes, might as well
 * have these behaviours isolated to some space.
 */
function clearTextbox() {
	elements.inputField.value = "";
}

/**
 * Pull in a command from the history of commands entered.
 * @param {number} indexDirection (-1 or 1)
 */
function navigateHistory(indexDirection) {
	if (indexDirection != -1 && indexDirection != 1)
		throw Error("Expected value from list [-1, 1].");
	historyIndex += indexDirection;
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
function evaluateCmd() {
	const tokens = getCurrentTokens();
}

/**
 * Evaluate the user input - be that a keydown, keyup, or other input like caret
 * movement.
 * @param {Event | KeyboardEvent} ev - The generated event.
 */
function userInput(ev) {
	// Evaluate command entered.
	if (ev.key === "Enter") {
		// Append to the history
		historyCommands.push(elements.inputField.value);
		evaluateCmd();
		clearTextbox();
	}

	// Quick clear the textbox.
	else if (ev.key === "Escape") {
		historyIndex = 0;
		clearTextbox();
	}

	// Navigate History - Backwards
	else if (ev.key === "ArrowUp") {
		navigateHistory(1);
		ev.preventDefault();
	}

	// Navigate History - Forwards
	else if (ev.key === "ArrowDown") {
		navigateHistory(-1);
		ev.preventDefault();
	}

	// Impose limitations on input.
	else if (elements.inputField.value.length >= 64 && ev.key?.length === 1) {
		alert("Maximum Character Limit Reached");
		ev.preventDefault();
	}

	// Update the text and caret in our custom text box.
	updateTextbox();
}

/** ============================================================================
 * EVENTS:
 * - Enure that at all times, the invisible input field is focused. 
 * - Respond to any and all events from the user in this input field.
 ============================================================================ */
document.addEventListener("focus", focusInputField);
document.addEventListener("focusin", focusInputField);
document.addEventListener("focusout", focusInputField);
elements.inputField.addEventListener("focusout", focusInputField);
elements.inputField.addEventListener("keydown", userInput);
elements.inputField.addEventListener("input", userInput);
focusInputField();
