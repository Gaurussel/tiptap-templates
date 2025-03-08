import { NodeViewContent, NodeViewWrapper, type NodeViewProps } from "@tiptap/react";
import Group from "./utils/Group";
import styled from "@emotion/styled";
import NodeDeleteButton from "core/utils/components/NodeDeleteButton";

const TitleBlockWrapper = styled.div<{ pos: number }>`
	position: relative;
	display: flex;

	&:hover .paragraph-input-button-${({ pos }) => pos} {
		opacity: 1;
	}
`;

const ParagraphInputComponent = ({ deleteNode, getPos }: NodeViewProps) => {
	const pos = getPos();

	return (
		<NodeViewWrapper>
			<TitleBlockWrapper pos={pos}>
				<Group>
					<NodeViewContent />
				</Group>
				<NodeDeleteButton deleteNode={deleteNode} absolute className={`paragraph-input-button-${pos}`} />
			</TitleBlockWrapper>
		</NodeViewWrapper>
	);
};

export default ParagraphInputComponent;
