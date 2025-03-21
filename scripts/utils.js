import elements from "./elements.js";

function updateTitle() {
    elements.titleElement.textContent = elements.inputPromptElement.textContent;
}

updateTitle();
