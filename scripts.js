const rootDir = "C:\\HarrisonCook";
const inBufEle = document.getElementById("buffer");
const inBufCar = document.getElementById("caret");
let inBufArr = [];
let inBufCarPos = 0;

const fileStructure = {
	profile: ["overview.txt", "traits.txt"],
	quests: {
		main_quests: ["xero.txt", "z-energy.txt", "raygun.txt", "vic-uni.txt"],
		side_quests: ["vim.txt", "aoc.txt", "mmcam.txt"],
	},
	inventory: {
		education: ["be-eng.txt", "ncea.txt"],
		toolbox: ["languages.txt", "frameworks.txt", ""],
	},
};

const cmds = {
	":help": ["Display a list available commands.", "Usage: [CMD] :help"],
	cat: {
		":help": [
			"Concatenate a single FILE to standard output.",
			"Usage: cat $FILE",
		],
		isParam: function (value) {
			return typeof value === "string";
		},
		exec: function (filePath) {
			console.log("cat", filePath);
		},
	},
	cd: {
		":help": ["Change the current directory to DIR.", "Usage: cd $DIR"],
		isParam: function (value) {
			return typeof value === "string";
		},
		exec: function (params) {
			console.log("cd", params);
		},
	},
	ls: {
		":help": [
			"List information about the files in the DIR. DIR is the cwd by default.",
			"Usage: ls [DIR]",
		],
		isParam: function (value) {
			return false;
		},
		exec: function (params) {
			return typeof value === "string";
		},
	},
	whoami: {
		":help": [
			"Print infomation about the current effective user ID (HonsonCooky).",
			"Usage: whoami",
		],
		isParam: function (value) {
			return false; // No Params
		},
		exec: function (_) {
			console.log("whoami", params);
		},
	},
};

document.addEventListener("keydown", onKeyDown);

/** @param {KeyboardEvent} ev */
function onKeyDown(ev) {
	switch (ev.key) {
		case "Backspace":
			let bsDiff = ev.ctrlKey ? getCtrlBackspaceDiff() : 1;
			inBufCarPos = Math.max(0, inBufCarPos - bsDiff);
			inBufArr.splice(inBufCarPos, bsDiff);
			break;
		case "Delete":
			let delDiff = ev.ctrlKey ? getCtrlDeleteDiff() : 1;
			inBufArr.splice(inBufCarPos, delDiff);
			break;
		case "ArrowLeft":
			inBufCarPos = Math.max(0, inBufCarPos - 1);
			break;
		case "ArrowRight":
			inBufCarPos = Math.min(inBufArr.length, inBufCarPos + 1);
			break;
		case "Enter":
			evaluateCmd();
			// Clear Buffer
			inBufArr = [];
			inBufCarPos = 0;
			break;
		default:
			if (inBufArr.length >= 64) {
				alert("Too Much Input (64 char limit)");
				break;
			}
			if (ev.key.length > 1 || ev.ctrlKey) {
				console.log(`Unmapped Input ${ev.key}`);
				break;
			}
			inBufArr.splice(inBufCarPos, 0, ev.key.toLowerCase());
			inBufCarPos += ev.key.length;
	}

	// Tokenize, Evaluate, and Render characters.
	ev.preventDefault();
}

/**
 * Returns the difference from the current cursor position to previous
 * white char.
 */
function getCtrlBackspaceDiff() {
	let i = inBufCarPos - 1;
	while (i > 0) {
		if (inBufArr[i] === " ") break;
		i--;
	}
	return inBufCarPos - i;
}

/**
 * Returns the difference from the current possiton to the next white
 * char.
 */
function getCtrlDeleteDiff() {
	let i = inBufCarPos + 1;
	while (i < inBufArr.length) {
		if (inBufArr[i] === " ") break;
		i++;
	}
	return i - inBufCarPos;
}
