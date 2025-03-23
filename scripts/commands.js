export default {
	whoami: {
		"--short": { _file: "whoami-short.txt" },
		"-s": { _file: "whoami-short.txt" },
		"--long": { _file: "whoami.txt" },
		"-l": { _file: "whoami.txt" },
		default: "--long",
	},
};
