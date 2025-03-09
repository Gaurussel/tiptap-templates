import { Node } from "@tiptap/core";
import { InputType, InputComponents, InputBlockContent, InputContent, InputAttributes } from "./types";
import { ReactNodeViewRenderer } from "@tiptap/react";
import getInputName from "../logic/getInputName";
import BlockComponent from "../components/BlockComponent";

const getInputsModels = (): Node[] => {
	const nodes: Node[] = [];

	for (const [key, value] of Object.entries(InputType)) {
		const inputContent = InputBlockContent[key];
		const content = inputContent ? `paragraph ${inputContent}` : "paragraph";
		const name = getInputName(value, true);

		nodes.push(
			Node.create({
				name,
				group: "block inputBlocks",
				content,

				addNodeView() {
					return ReactNodeViewRenderer(BlockComponent);
				},
			}),
		);
	}

	for (const [key, value] of Object.entries(InputType)) {
		const inputContent = InputContent[key];
		const content = inputContent ? inputContent : undefined;
		const name = getInputName(value);
		const ReactComponent = InputComponents[value];

		nodes.push(
			Node.create({
				name,
				group: "block inputs",
				content,

				addAttributes() {
					return InputAttributes[value];
				},

				addNodeView() {
					return ReactNodeViewRenderer(ReactComponent);
				},
			}),
		);
	}

	return nodes;
};

export default getInputsModels;
