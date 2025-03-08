import { Node } from "@tiptap/core";
import { InputType, InputComponents, InputContent } from "./types";
import { ReactNodeViewRenderer } from "@tiptap/react";

const getInputsModels = (): Node[] => {
	return Array.from(Object.entries(InputType)).map(([key, value]) => {
		const inputContent = InputContent[key];
		const content = inputContent ? `paragraph ${inputContent}` : "paragraph";
		const name = `${value}Input`;
		const ReactComponent = InputComponents[value];

		return Node.create({
			name,
			group: "block inputs",
			content,

			addNodeView() {
				return ReactNodeViewRenderer(ReactComponent);
			},
		});
	});
};

export default getInputsModels;
