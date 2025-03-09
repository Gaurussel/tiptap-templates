import { Editor } from "@tiptap/core";
import { InputType, InputBlockContent } from "../models/types";
import getInputName from "./getInputName";
import type { Node, Schema } from "@tiptap/pm/model";

const parseContentTypes = (content: string) => {
	const contentTypes = content?.replace(/[+*]/g, "")?.split(" ");
	return contentTypes;
};

const aliases = {
	inline: () => {
		return;
	},
	block: () => {
		return;
	},
};

const createNodeWithContent = (nodeName: string, schema: Schema): Node => {
	const nodeSpec = schema.nodes[nodeName].spec;
	const defaultAttrs = nodeSpec.attrs ? {} : null;

	if (nodeSpec.content) {
		const allowedContent = parseContentTypes(nodeSpec.content);
		if (allowedContent.length > 0) {
			const children = allowedContent
				.map((childType) =>
					aliases[childType] ? aliases[childType](schema) : createNodeWithContent(childType, schema),
				)
				.filter((child) => child);
			return schema.nodes[nodeName].create(defaultAttrs, children);
		}
	}

	return schema.nodes[nodeName].create(defaultAttrs);
};

const handleInputContent = (type: InputType, editor: Editor): Node => {
	const inputBlockName = getInputName(type, true);
	const schema = editor.state.schema;

	const parsedInputBlockContent = parseContentTypes(InputBlockContent[type]);
	const input = parsedInputBlockContent.map((contentType) => createNodeWithContent(contentType, schema));

	const inputBlock = schema.nodes[inputBlockName].create(null, [...input]);

	return inputBlock;
};

const createInputContent = (type: InputType, editor: Editor): Node => {
	return handleInputContent(type, editor);
};

export default createInputContent;
