declare namespace syn { // Synapse const (Wont compile!)
    function request(url: string): void;
}

// Replacement for import {}
let Players = game.GetService("Players");
let ReplicatedStorage = game.GetService("ReplicatedStorage");
let RunService = game.GetService("RunService");

class VersonStruct {
	magor = 1;
	minor = 0;
	bugfix = 0;
	beta = 0;
	toString = () => `${this.magor}.${this.minor}.${this.bugfix}.${this.beta}`;
	constructor(magor: number, minor: number, bugfix: number, beta: number = 0) {
		this.magor = magor
		this.minor = minor
		this.bugfix = bugfix
		this.beta = beta
	}
}

let Config = {
	prefix: ".",
	loopDelay: 0.03,
	version: new VersonStruct(0, 1, 0, 1)
}

function connection(msg: string) {
	if (string.sub(msg.lower(), 0, Config.prefix.size() + 4) === Config.prefix + "cmds") {
		print('\
one\
two\
three')
	}
}

Players.LocalPlayer.Chatted.Connect(connection)
