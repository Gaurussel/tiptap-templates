import StarterKit from "@tiptap/starter-kit";
import Focus from "@tiptap/extension-focus";
import { Document } from "@tiptap/extension-document";
import Section from "../extensions/section/models/section";
import getInputsModels from "../extensions/inputs/models/inputs";
import Title from "../extensions/sectionTitle/models/sectionTitle";
import Placeholder from "../extensions/placeholder/models/placeholder";
import Controller from "../extensions/controllers/models/controller";

const getExtensions = () => {
	return [
		StarterKit.configure({
			document: false,
		}),
		Focus,
		Placeholder,

		Controller,
		Title,
		Section,

		Document.extend({ content: "section" }),

		...getInputsModels(),
	];
};
export default getExtensions;
