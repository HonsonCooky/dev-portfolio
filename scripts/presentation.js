export const elements = {
	titleElement: document.querySelector("title"),
	inputField: document.querySelector("input"),
	outputElement: document.getElementById("output"),
	inputElement: document.getElementById("input"),
	inputPromptElement: document
		.getElementById("input")
		.querySelector(".prompt"),
	inputPromptCwdElement: document.getElementById("cwd-path"),
	inputTextboxElement: document.getElementById("textbox"),
	inputTextboxBufferElement: document
		.getElementById("textbox")
		.querySelector(".buffer"),
	inputTextboxAutoFillElement: document.getElementById("auto-fill-hint"),
	inputTextboxCaretElement: document.getElementById("caret"),
	inputTabHintElement: document.getElementById("tab-hint"),
};

// Verify each element is valid from the HTML - just makes life easier.
((elements) => {
	for (let e in elements) {
		if (elements[e] === null) {
			throw Error(`Cannot find element: ${e}`);
		}
	}
})(elements);

/**
 * Force focus onto the invisible input field - the only interface for user
 * interactions.
 */
function focusInputField() {
	elements.inputField.focus();
}

/**
 * Get an array of strings representing the tokens currently in the input
 * buffer.
 * @returns
 */
function getCurrentTokens() {
	const tokens = Array.from(
		elements.inputTextboxBufferElement.querySelectorAll(".token")
	);

	return tokens.map((e) => e.innerText);
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
 * Evaluate the user input - be that a keydown, keyup, or other input like caret
 * movement.
 * @param {Event | KeyboardEvent} ev - The generated event.
 */
function userInput(ev) {
	// Evaluate command entered.
	if (ev.key === "Enter") {
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

/**
 * Enure that at all times, the invisible input field is focused.
 * Respond to any and all events from the user in this input field.
 */
export function initDomListeners() {
	document.addEventListener("focus", focusInputField);
	document.addEventListener("focusin", focusInputField);
	document.addEventListener("focusout", focusInputField);
	elements.inputField.addEventListener("focusout", focusInputField);
	elements.inputField.addEventListener("keydown", userInput);
	elements.inputField.addEventListener("input", userInput);
	focusInputField();
}
