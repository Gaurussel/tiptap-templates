import { NodeViewContent, NodeViewWrapper, type NodeViewProps } from "@tiptap/react";

const BasicInputComponent = ({}: NodeViewProps) => {
	return (
		<NodeViewWrapper>
			<NodeViewContent />
		</NodeViewWrapper>
	);
};

export default BasicInputComponent;
