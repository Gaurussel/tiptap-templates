import type { ComponentType } from "react";
import type { NodeViewProps } from "@tiptap/core";
import DateInputComponent from "../components/dateInputComponent";
import ParagraphInputComponent from "../components/paragraphInputComponent";

export enum InputType {
	Paragraph = "paragraph",
	Date = "date",
}

export const InputComponents: Record<InputType, ComponentType<NodeViewProps>> = {
	[InputType.Paragraph]: ParagraphInputComponent,
	[InputType.Date]: DateInputComponent,
};
