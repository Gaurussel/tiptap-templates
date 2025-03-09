import type { ComponentType } from "react";
import type { Attributes, NodeViewProps } from "@tiptap/core";
import DateInputComponent from "../components/DateInputComponent";
import ParagraphInputComponent from "../components/ParagraphInputComponent";

export enum InputType {
	paragraph = "paragraph",
	date = "date",
}

export enum InputBlockContent {
	paragraph = "paragraphInput",
	date = "dateInput",
}

export enum InputContent {
	paragraph = "paragraph",
}

export const InputComponents: Record<InputType, ComponentType<NodeViewProps>> = {
	[InputType.paragraph]: ParagraphInputComponent,
	[InputType.date]: DateInputComponent,
};

export const InputAttributes: Record<InputType, Attributes> = {
	[InputType.paragraph]: {},
	[InputType.date]: {
		date: {
			default: "",
		},
	},
};
