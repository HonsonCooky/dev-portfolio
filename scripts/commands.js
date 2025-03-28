async function fileContentDiv(fileName) {
	const fileContent = await (await fetch(`../pages/${fileName}`)).text();
	if (!fileContent) throw Error(`Unable to find file ${fileName}`);
	const fileDiv = document.createElement("div");
	fileDiv.innerHTML = fileContent;
	return fileDiv;
}

const whoamiLong = fileContentDiv("whoami.html");

const commands = {
	whoami: {
		default: whoamiLong,
	},
};

export default commands;
