import { mergeAttributes, Node } from "@tiptap/core";
import { ReactNodeViewRenderer } from "@tiptap/react";
import SectionComponent from "../components/SectionComponent";

const Section = Node.create({
	name: "section",
	group: "block",
	content: "sectionTitle inputBlocks+",

	parseHTML() {
		return [{ tag: "section-react-component" }];
	},

	renderHTML({ HTMLAttributes }) {
		return ["section-react-component", mergeAttributes(HTMLAttributes)];
	},

	addNodeView() {
		return ReactNodeViewRenderer(SectionComponent);
	},
});

export default Section;
