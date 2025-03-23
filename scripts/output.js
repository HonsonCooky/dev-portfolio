import elements from "./elements.js";

export function printCommand() {
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
	outputResult.id = `result-${elements.outputElement.historyCount}`;

	elements.outputElement.appendChild(outputSection);
}

export function printCommandOutput() {}
