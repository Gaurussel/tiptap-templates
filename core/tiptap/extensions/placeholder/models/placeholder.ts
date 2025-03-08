import { Editor } from "@tiptap/core";
import Placeholder from "@tiptap/extension-placeholder";
import { Node } from "@tiptap/pm/model";

const getParentNode = (editor: Editor, pos: number) => {
	const $pos = editor.state.doc.resolve(pos);
	const parent = $pos.parent;

	return parent;
};

const newPlaceholder = Placeholder.configure({
	placeholder: ({ node, pos, editor }: { node: Node; pos: number; editor: Editor }): string => {
		const parentNode = getParentNode(editor, pos);
		const parentName = parentNode.type.name;
		const nodeName = node.type.name;

		if (parentName === "sectionTitle" && nodeName === "paragraph") return "Write a title...";
		if (parentName === "paragraphInput" && nodeName === "paragraph") return "Write a paragraph...";

		return "";
	},
	emptyEditorClass: "is-empty",
	includeChildren: true,
	showOnlyCurrent: false,
});

export default newPlaceholder;
