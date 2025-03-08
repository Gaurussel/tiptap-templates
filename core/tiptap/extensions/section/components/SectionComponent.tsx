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

	p {
		cursor: pointer;
	}

	p:not(.has-focus) {
		transition: background-color 0.1s ease-in-out;
	}

	p:not(.has-focus):hover {
		background-color: oklch(0.97 0 0);
	}

	p.has-focus {
		cursor: text;
	}
`;

const Section = ({ deleteNode, editor }: NodeViewProps) => {
	const { isEditable } = editor;

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

export default Section;
