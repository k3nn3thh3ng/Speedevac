import { useState } from "react";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateTimePicker from "@mui/lab/MobileDateTimePicker";

type BasicDateTimePickerProps = {
	label: string;
} & React.RefAttributes<HTMLDivElement>;

const BasicDateTimePicker = ({
	label,
	...rest
}: BasicDateTimePickerProps): JSX.Element => {
	const [value, setValue] = useState<Date | null>(new Date());

	return (
		<LocalizationProvider dateAdapter={AdapterDateFns}>
			<DateTimePicker
				renderInput={(props) => <TextField {...props} label={label} />}
				label="DateTimePicker"
				value={value}
				onChange={(newValue) => {
					console.log(newValue);
					setValue(newValue);
				}}
				{...rest}
			/>
		</LocalizationProvider>
	);
};

export { BasicDateTimePicker };
