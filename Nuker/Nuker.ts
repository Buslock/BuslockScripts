// Replacement for import {}
let Players = game.GetService("Players");
let ReplicatedStorage = game.GetService("ReplicatedStorage");
let RunService = game.GetService("RunService");

// Script
let lp = Players.LocalPlayer
let chr = lp.Character
let root = chr?.FindFirstChild("HumanoidRootPart") as Part
let digRemote = ReplicatedStorage.FindFirstChild("DigEvent") as RemoteEvent

interface ConfigInterface {
	strength: number
	incease: number
	yOffset: number
}

let Config: ConfigInterface = {
	strength: 25,
	incease: 5,
	yOffset: 3
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
	for (let x = 1; x < Config.strength; x += Config.incease)
	{
		for (let y = 1; y < Config.strength; y += Config.incease)
		{
			for (let z = 1; z < Config.strength; z += Config.incease)
			{
				DigBlock((Config.strength / 2) - x, (Config.strength / 2) - y, (Config.strength / 2) - z)
			}
		}
	}
}
