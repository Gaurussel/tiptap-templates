import { Button } from "~/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "~/components/ui/popover";
import styled from "@emotion/styled";
import { InputType } from "../../inputs/models/types";
import { faCalendar, faParagraph } from "@fortawesome/free-solid-svg-icons";
import Icon from "core/utils/components/Icon";

const PopoverContentWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5em;
`;

const PopoverSelector = ({ trigger, onClick }: { trigger: React.ReactNode; onClick: (type: InputType) => void }) => {
	return (
		<Popover>
			<PopoverTrigger asChild>{trigger}</PopoverTrigger>
			<PopoverContent className="w-72">
				<div className="space-y-2 mb-4">
					<h4 className="font-medium leading-none">Add new input</h4>
					<p className="text-sm text-muted-foreground">Choose the type of input you want to add.</p>
				</div>
				<PopoverContentWrapper>
					<Button variant="ghost" onClick={() => onClick(InputType.paragraph)}>
						<Icon icon={faParagraph} />
						<span>Add text input</span>
					</Button>
					<Button variant="ghost" onClick={() => onClick(InputType.date)}>
						<Icon icon={faCalendar} />
						<span>Add date input</span>
					</Button>
				</PopoverContentWrapper>
			</PopoverContent>
		</Popover>
	);
};

export default PopoverSelector;
