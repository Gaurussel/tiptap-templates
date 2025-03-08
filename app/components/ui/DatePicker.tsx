import { format } from "date-fns";
import { cn } from "~/lib/utils";
import { Calendar } from "~/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "~/components/ui/popover";
import { useState } from "react";

interface DatePickerProps {
	onChange?: (date: Date) => void;
	initialDate?: Date;
}

const DatePicker = ({ onChange, initialDate }: DatePickerProps) => {
	const [date, setDate] = useState<Date>(initialDate);

	const saveData = (date: Date) => {
		setDate(date);
		onChange?.(date);
	};

	return (
		<Popover>
			<PopoverTrigger asChild>
				<p
					className={cn(!date && "is-empty", "custom-paragraph-input")}
					data-placeholder="Pick a date..."
					style={{ height: "100%" }}
					contentEditable={false}
				>
					{date && format(date, "PPP")}
				</p>
			</PopoverTrigger>
			<PopoverContent className="w-auto p-0">
				<Calendar mode="single" selected={date} onSelect={saveData} initialFocus />
			</PopoverContent>
		</Popover>
	);
};

export default DatePicker;
