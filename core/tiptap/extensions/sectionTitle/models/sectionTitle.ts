import { mergeAttributes, Node } from "@tiptap/core";
import { ReactNodeViewRenderer } from "@tiptap/react";
import SectionTitleComponent from "../components/SectionTitleComponent";

const SectionTitle = Node.create({
	name: "sectionTitle",
	group: "block",
	content: "paragraph",

	parseHTML() {
		return [{ tag: "section-title-react-component" }];
	},

	renderHTML({ HTMLAttributes }) {
		return ["section-title-react-component", mergeAttributes(HTMLAttributes)];
	},

	addNodeView() {
		return ReactNodeViewRenderer(SectionTitleComponent);
	},
});

export default SectionTitle;
