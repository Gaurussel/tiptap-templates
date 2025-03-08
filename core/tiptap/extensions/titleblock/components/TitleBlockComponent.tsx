import { NodeViewContent, NodeViewWrapper, type NodeViewProps } from "@tiptap/react";
import styled from "@emotion/styled";
import NodeDeleteButton from "core/utils/components/NodeDeleteButton";

const TitleBlockWrapper = styled.div`
	display: flex;
	margin: 0 0 0 1.25em;

	&:hover .title-block-button {
		opacity: 1;
	}
`;

const TitleBlockContentWrapper = styled.div`
	width: -webkit-fill-available;
`;

const TitleBlockComponent = ({ deleteNode, editor }: NodeViewProps) => {
	const { isEditable } = editor;

	const addParagraphBlock = () => {
		editor.chain().focus().insertContentAt(0, { type: "paragraph" }).run();
	};

	return (
		<NodeViewWrapper>
			<TitleBlockWrapper>
				<TitleBlockContentWrapper>
					<NodeViewContent />
				</TitleBlockContentWrapper>
				{isEditable && <NodeDeleteButton deleteNode={deleteNode} className="title-block-button" />}
			</TitleBlockWrapper>
		</NodeViewWrapper>
	);
};

export default TitleBlockComponent;
