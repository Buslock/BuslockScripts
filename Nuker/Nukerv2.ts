let Config = {
	strength: 25,
	incease: 5,
	yOffset: 3
}

// Replacement for import {}
let Players = game.GetService("Players");
let ReplicatedStorage = game.GetService("ReplicatedStorage");
let RunService = game.GetService("RunService");

// Script
let lp = Players.LocalPlayer
let chr = lp.Character
let root = chr?.FindFirstChild("HumanoidRootPart") as Part
let digRemote = ReplicatedStorage.FindFirstChild("DigEvent") as RemoteEvent

function For(action: (c: number) => any) { // function compiles into smaller lua
	let i = 1
	while (i < Config.strength) {
		action(i);
		i += Config.incease
	}
}

function DigBlock(x: number, y: number, z: number)
{
	let pos = root.Position
	let calc = new Vector3(pos.X + x, pos.Y + y, pos.Z + z)
	digRemote.FireServer(calc)
}

while (true)
{
	wait(0.25)
	For((x: number) => {
		For((y: number) => {
			For((z: number) =>
			{
				DigBlock((Config.strength / 2) - x, (Config.strength / 2) - y, (Config.strength / 2) - z)
			})
		})
	})
}
