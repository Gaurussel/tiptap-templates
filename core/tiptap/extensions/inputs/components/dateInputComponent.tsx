import { NodeViewWrapper, type NodeViewProps } from "@tiptap/react";
import DatePicker from "~/components/ui/DatePicker";
import { useEffect, useState } from "react";

const DateInputComponent = ({ selected, node, updateAttributes, getPos, editor }: NodeViewProps) => {
	const [isOpen, setIsOpen] = useState(false);

	const closeDatePicker = () => {
		setIsOpen(false);
		const pos = getPos();
		editor.commands.focus(pos - 1);
	};

	const onChangeDate = (date: Date) => {
		updateAttributes({ date: date.toISOString() });
		closeDatePicker();
	};

	useEffect(() => {
		setIsOpen(selected);
	}, [selected]);

	useEffect(() => {
		const onKeyDown = (event: KeyboardEvent) => {
			if (event.key === "Escape") {
				closeDatePicker();
			}
		};
		window.addEventListener("keydown", onKeyDown);
		return () => window.removeEventListener("keydown", onKeyDown);
	}, []);

	return (
		<NodeViewWrapper>
			<DatePicker
				onChange={onChangeDate}
				initialDate={node.attrs.date && new Date(node.attrs.date)}
				isOpen={isOpen}
			/>
		</NodeViewWrapper>
	);
};

export default DateInputComponent;
