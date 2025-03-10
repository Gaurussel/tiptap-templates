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
		console.log({ parentName, nodeName });

		if (parentName === "sectionTitle" && nodeName === "paragraph") return "Write a title...";
		if (parentName === "paragraphBlockInput" && nodeName === "paragraph") return "Write a paragraph...";
		if (parentName === "paragraphInput" && nodeName === "paragraph") return "Write a value...";
		if (parentName === "dateBlockInput" && nodeName === "paragraph") return "Write a date...";
		if (parentName === "listItem" && nodeName === "paragraph") return "Write something in a list...";

		return;
	},
	emptyEditorClass: "is-empty",
	includeChildren: true,
	showOnlyCurrent: false,
});

export default newPlaceholder;
