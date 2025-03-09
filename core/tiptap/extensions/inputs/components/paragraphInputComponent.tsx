import { NodeViewContent, NodeViewWrapper, type NodeViewProps } from "@tiptap/react";

const ParagraphInputComponent = ({ deleteNode, getPos }: NodeViewProps) => {

	return (
		<NodeViewWrapper>
			<NodeViewContent />
		</NodeViewWrapper>
	);
};

export default ParagraphInputComponent;
