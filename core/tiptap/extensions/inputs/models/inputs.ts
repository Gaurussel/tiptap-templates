import { Node } from "@tiptap/core";
import { InputType, InputComponents, InputContent, InputAttributes } from "./types";
import { ReactNodeViewRenderer } from "@tiptap/react";
import getInputName from "../logic/getInputName";

const getInputsModels = (): Node[] => {
	return Array.from(Object.entries(InputType)).map(([key, value]) => {
		const inputContent = InputContent[key];
		const content = inputContent ? `paragraph ${inputContent}` : "paragraph";
		const name = getInputName(value);
		const ReactComponent = InputComponents[value];

		return Node.create({
			name,
			group: "block inputs",
			content,

			addAttributes() {
				return InputAttributes[value];
			},

			addNodeView() {
				return ReactNodeViewRenderer(ReactComponent);
			},
		});
	});
};

export default getInputsModels;
