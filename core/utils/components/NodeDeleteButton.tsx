import styled from "@emotion/styled";
import { Button } from "~/components/ui/button";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Icon from "./Icon";
import { cn } from "~/lib/utils";

const ButtonWrapper = styled.div`
	margin-left: 1em;
	opacity: 0;
	height: 100%;

	&.absolute {
		position: absolute;
		right: -3em;
		top: -4px;
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
			<Button variant="ghost" size="icon">
				<Icon icon={faTrash} />
			</Button>
		</ButtonWrapper>
	);
};

export default NodeDeleteButton;
