import { NodeViewContent, NodeViewWrapper } from "@tiptap/react";
import Group from "./utils/Group";
import NodeDeleteButton from "core/utils/components/NodeDeleteButton";
import styled from "@emotion/styled";

const TitleBlockWrapper = styled.div<{ pos: number }>`
	position: relative;
	display: flex;

	&:hover .block-input-button-${({ pos }) => pos} {
		opacity: 1;
	}
`;

const BlockComponent = ({ deleteNode, getPos }: { deleteNode: () => void; getPos: () => number }) => {
	const pos = getPos();

	return (
		<NodeViewWrapper>
			<TitleBlockWrapper pos={pos}>
				<Group>
					<NodeViewContent />
				</Group>
				<NodeDeleteButton deleteNode={deleteNode} absolute className={`block-input-button-${pos}`} />
			</TitleBlockWrapper>
		</NodeViewWrapper>
	);
};

export default BlockComponent;
