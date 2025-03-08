import StarterKit from "@tiptap/starter-kit";
import Focus from "@tiptap/extension-focus";
import { Document } from "@tiptap/extension-document";
import TitleBlock from "../extensions/titleblock/models/titleblock";
import getInputsModels from "../extensions/inputs/models/inputs";
import Title from "../extensions/title/models/title";
import Placeholder from "../extensions/placeholder/models/placeholder";

const getExtensions = () => {
	return [
		StarterKit,
		Focus,
		Placeholder,

		Title,
		TitleBlock,

		Document.extend({ content: "titleblock" }),

		...getInputsModels(),
	];
};
export default getExtensions;
