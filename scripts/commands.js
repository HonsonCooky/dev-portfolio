async function printFile(fileName) {
	const fileContent = await (await fetch(`../pages/${fileName}`)).text();
	if(!fileContent) throw Error(`Unable to find file ${fileName}`);
	return function () {
		const fileDiv = document.createElement("div");
		fileDiv.innerHTML = fileContent;
		
	};
}

const commands = {
	whoami: {
		eval: printFile()
	},
};

export default commands;
