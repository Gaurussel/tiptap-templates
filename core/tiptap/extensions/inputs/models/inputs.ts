import { Node } from "@tiptap/core";
import { InputType, InputComponents, InputContent } from "./types";
import { ReactNodeViewRenderer } from "@tiptap/react";

const getInputsModels = (): Node[] => {
	return Array.from(Object.entries(InputType)).map(([key, value]) => {
		const inputContent = InputContent[key as keyof typeof InputContent];
		const content = inputContent ? `paragraph ${inputContent}` : "paragraph";
		const name = `${value}Input`;
		return Node.create({
			name,
			group: "block inputs",
			content,

			addNodeView() {
				return ReactNodeViewRenderer(InputComponents[value]);
			},
		});
	});
};

export default getInputsModels;
