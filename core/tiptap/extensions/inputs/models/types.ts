import type { ComponentType } from "react";
import DateInputComponent from "../components/dateInputComponent";
import ParagraphInputComponent from "../components/paragraphInputComponent";
import type { NodeViewProps } from "@tiptap/core";

export enum InputType {
	Paragraph = "paragraph",
	Date = "date",
}

export enum InputContent {
	Paragraph = "paragraph",
	Date = "paragraph",
}

export const InputComponents: Record<InputType, ComponentType<NodeViewProps>> = {
	[InputType.Paragraph]: ParagraphInputComponent,
	[InputType.Date]: DateInputComponent,
};
