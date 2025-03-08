import { mergeAttributes, Node } from "@tiptap/core";
import { ReactNodeViewRenderer } from "@tiptap/react";
import TitleBlockComponent from "../components/TitleBlockComponent";

const TitleBlock = Node.create({
	name: "titleblock",
	group: "block",
	content: "title inputs+",

	parseHTML() {
		return [{ tag: "titleblock-react-component" }];
	},

	renderHTML({ HTMLAttributes }) {
		return ["titleblock-react-component", mergeAttributes(HTMLAttributes)];
	},

	addNodeView() {
		return ReactNodeViewRenderer(TitleBlockComponent);
	},
});

export default TitleBlock;
