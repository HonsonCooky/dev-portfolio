export class TerminalInput extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		console.log("terminal");
	}
}

customElements.define("terminal-input", TerminalInput);
