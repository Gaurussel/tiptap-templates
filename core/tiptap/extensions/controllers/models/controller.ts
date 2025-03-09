import { Extension } from "@tiptap/core";
// import inputController from "../logic/inputController";

const Controller = Extension.create({
	name: "controllesr",

	addProseMirrorPlugins() {
		return [];
	},
});

export default Controller;
