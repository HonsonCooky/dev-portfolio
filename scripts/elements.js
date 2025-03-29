const elements = {
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
	inputTextboxAutoFillElement: document.getElementById(""),
	inputTextboxCaretElement: document.getElementById("caret"),
	inputTabHintElement: document.getElementById("tab-hint"),
};

((elements) => {
	for (let e in elements) {
		if (elements[e] === null) {
			throw Error(`Cannot find element: ${e}`);
		}
	}
})(elements);

export default elements;
