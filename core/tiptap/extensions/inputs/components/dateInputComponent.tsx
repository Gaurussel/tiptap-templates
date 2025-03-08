import { NodeViewContent, NodeViewWrapper, type NodeViewProps } from "@tiptap/react";
import Group from "./utils/Group";
import NodeDeleteButton from "core/utils/components/NodeDeleteButton";
import styled from "@emotion/styled";
import DatePicker from "~/components/ui/DatePicker";

const TitleBlockWrapper = styled.div<{ pos: number }>`
	position: relative;
	display: flex;

	&:hover .paragraph-input-button-${({ pos }) => pos} {
		opacity: 1;
	}
`;

const DateInputComponent = ({ deleteNode, getPos, updateAttributes, node }: NodeViewProps) => {
	const pos = getPos();

	const onChangeDate = (date: Date) => {
		updateAttributes({ date: date.toISOString() });
	};

	return (
		<NodeViewWrapper>
			<TitleBlockWrapper pos={pos}>
				<Group inline>
					<NodeViewContent />
					<DatePicker onChange={onChangeDate} initialDate={node.attrs.date && new Date(node.attrs.date)} />
				</Group>
				<NodeDeleteButton deleteNode={deleteNode} absolute className={`paragraph-input-button-${pos}`} />
			</TitleBlockWrapper>
		</NodeViewWrapper>
	);
};

export default DateInputComponent;
