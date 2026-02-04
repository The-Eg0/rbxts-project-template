import { ReplicatedStorage } from "@rbxts/services";
import { Storybook } from "@rbxts/ui-labs";

const UserInterface = ReplicatedStorage.WaitForChild("UI") as Folder;
const Stories = UserInterface.WaitForChild("Stories") as Folder;

const storybook: Storybook = {
	name: "Stories",
	storyRoots: [
	   Stories.FindFirstChild("Components") as Folder,
	   Stories.FindFirstChild("Interfaces") as Folder,
	],

	groupRoots: true
 };

 export = storybook;
