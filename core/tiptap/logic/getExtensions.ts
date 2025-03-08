import StarterKit from "@tiptap/starter-kit";
import Focus from "@tiptap/extension-focus";
import { Document } from "@tiptap/extension-document";
import Section from "../extensions/section/models/section";
import getInputsModels from "../extensions/inputs/models/inputs";
import Title from "../extensions/title/models/title";
import Placeholder from "../extensions/placeholder/models/placeholder";

const getExtensions = () => {
	return [
		StarterKit,
		Focus,
		Placeholder,

		Title,
		Section,

		Document.extend({ content: "section" }),

		...getInputsModels(),
	];
};
export default getExtensions;
