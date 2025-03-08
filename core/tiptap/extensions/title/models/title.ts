import { mergeAttributes, Node } from "@tiptap/core";
import { ReactNodeViewRenderer } from "@tiptap/react";
import TitleComponent from "../components/TitleComponent";

const Title = Node.create({
	name: "title",
	group: "block",
	content: "paragraph",

	parseHTML() {
		return [{ tag: "title-react-component" }];
	},

	renderHTML({ HTMLAttributes }) {
		return ["title-react-component", mergeAttributes(HTMLAttributes)];
	},

	addNodeView() {
		return ReactNodeViewRenderer(TitleComponent);
	},
});

export default Title;
