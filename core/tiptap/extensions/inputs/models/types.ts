import type { ComponentType } from "react";
import type { Attributes, NodeViewProps } from "@tiptap/core";
import DateInputComponent from "../components/DateInputComponent";
import BasicInputComponent from "../components/BasicInputComponent";

export enum InputType {
	paragraph = "paragraph",
	date = "date",
	bulletList = "bulletList",
	orderedList = "orderedList",
}

export enum InputBlockContent {
	paragraph = "paragraph paragraphInput",
	date = "paragraph dateInput",
	bulletList = "bulletListInput",
	orderedList = "orderedListInput",
}

export enum InputContent {
	paragraph = "paragraph",
	bulletList = "bulletList",
	orderedList = "orderedList",
}

export const InputComponents: Record<InputType, ComponentType<NodeViewProps>> = {
	[InputType.paragraph]: BasicInputComponent,
	[InputType.date]: DateInputComponent,
	[InputType.bulletList]: BasicInputComponent,
	[InputType.orderedList]: BasicInputComponent,
};

export const InputAttributes: Record<InputType, Attributes> = {
	[InputType.paragraph]: {},
	[InputType.bulletList]: {},
	[InputType.orderedList]: {},
	[InputType.date]: {
		date: {
			default: "",
		},
	},
};
