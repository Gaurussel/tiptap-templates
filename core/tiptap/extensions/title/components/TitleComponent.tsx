import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Editor, NodeViewContent, NodeViewWrapper } from "@tiptap/react";
import { Button } from "~/components/ui/button";
import styled from "@emotion/styled";
import Divider from "core/utils/components/Divider";

const StyledDiv = styled.div`
	display: flex;
	justify-content: space-between;
	text-transform: uppercase;
	font-weight: 500;
	align-items: end;
	margin-bottom: 0.15em;

	.title-content {
		font-size: 1.15em;
	}
`;

const TitleComponent = ({ editor, getPos }: { editor: Editor; getPos: () => number }) => {
	const isEditable = editor.isEditable;

	const addNewInputBlock = () => {
		editor.chain().focus().insertContentAt(0, { type: "title" }).run();
	};

	return (
		<NodeViewWrapper>
			<StyledDiv>
				<div className="title-content">
					<NodeViewContent />
				</div>
				{isEditable && (
					<Button style={{ paddingTop: "0", paddingBottom: "0" }}>
						<FontAwesomeIcon icon={faPlus} />
						<span>Add Title</span>
					</Button>
				)}
			</StyledDiv>
			<Divider style={{ marginBottom: "0.25em" }} />
		</NodeViewWrapper>
	);
};

export default TitleComponent;
