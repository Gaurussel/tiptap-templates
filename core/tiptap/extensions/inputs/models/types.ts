import type { ComponentType } from "react";
import type { Attributes, NodeViewProps } from "@tiptap/core";
import DateInputComponent from "../components/dateInputComponent";
import ParagraphInputComponent from "../components/paragraphInputComponent";

export enum InputType {
	Paragraph = "paragraph",
	Date = "date",
}

export enum InputContent {
	Paragraph = "paragraph",
}

export const InputComponents: Record<InputType, ComponentType<NodeViewProps>> = {
	[InputType.Paragraph]: ParagraphInputComponent,
	[InputType.Date]: DateInputComponent,
};

export const InputAttributes: Record<InputType, Attributes> = {
	[InputType.Paragraph]: {},
	[InputType.Date]: {
		date: {
			default: "",
		},
	},
};
