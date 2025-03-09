import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Editor, NodeViewContent, NodeViewWrapper } from "@tiptap/react";
import { Button } from "~/components/ui/button";
import styled from "@emotion/styled";
import Divider from "core/utils/components/Divider";
import PopoverSelector from "./PopoverSelector";
import { InputContent, type InputType } from "../../inputs/models/types";
import getInputName from "../../inputs/logic/getInputName";
import createInputContent from "../../inputs/logic/createInputContent";

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

const SectionTitleComponent = ({ editor, getPos }: { editor: Editor; getPos: () => number }) => {
	const isEditable = editor.isEditable;

	const addNewInputBlock = (type: InputType) => {
		const pos = getPos();
		const $pos = editor.state.doc.resolve(pos);
		const endPos = $pos.end();
		const schema = editor.state.schema;
		const inputBlockName = getInputName(type, true);
		const inputName = getInputName(type);

		editor
			.chain()
			.focus()
			.insertContentAt(endPos, createInputContent(type, editor))
			.focus(endPos + 2)
			.run();
	};

	return (
		<NodeViewWrapper>
			<StyledDiv>
				<div className="title-content">
					<NodeViewContent />
				</div>
				{isEditable && (
					<PopoverSelector
						onClick={addNewInputBlock}
						trigger={
							<Button style={{ paddingTop: "0", paddingBottom: "0" }} contentEditable={false}>
								<FontAwesomeIcon icon={faPlus} />
								<span>Input</span>
							</Button>
						}
					/>
				)}
			</StyledDiv>
			<Divider style={{ marginBottom: "0.25em" }} />
		</NodeViewWrapper>
	);
};

export default SectionTitleComponent;
