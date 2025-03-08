import styled from "@emotion/styled";
import { Button } from "~/components/ui/button";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Icon from "./Icon";
import { cn } from "~/lib/utils";

const ButtonWrapper = styled.div`
	opacity: 0;
	height: 100%;
	transition: opacity 0.1s ease-in-out;

	&:not(.absolute) {
		width: 3em;
		text-align: end;
	}

	&.absolute {
		display: flex;
		justify-content: end;
		width: 3em;
		position: absolute;
		right: 0;
		top: -4px;
		margin-right: -2.8em;
		text-align: end;
	}
`;

interface NodeDeleteButtonProps {
	deleteNode: () => void;
	absolute?: boolean;
	className?: string;
}

const NodeDeleteButton = ({ deleteNode, absolute, className }: NodeDeleteButtonProps) => {
	const onClick = (e: React.MouseEvent<HTMLDivElement>) => {
		e.stopPropagation();
		e.preventDefault();
		deleteNode();
	};

	return (
		<ButtonWrapper className={cn(className, absolute && "absolute")} onClick={onClick}>
			<div className="node-delete-button-wrapper">
				<Button variant="ghost" size="icon">
					<Icon icon={faTrash} />
				</Button>
			</div>
		</ButtonWrapper>
	);
};

export default NodeDeleteButton;
