import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useForm, Controller, SubmitHandler, Control } from "react-hook-form";
import { BasicDateTimePicker } from "./BasicDateTimePicker";

type FormValues = {
	nric: string;
	passportNumber: string;
	dateOfBirth: Date;
	nationality: string;
	gender: string;
	flightNumber: string;
	flightDate: Date;
	flightDestination: string;
	appointmentDate: Date;
	testType: string;
	address: string;
	mobileNumber: string;
	email: string;
};

type formInputs = {
	type: string;
	id: keyof FormValues;
	label: string;
};

const arrayOfInputs: formInputs[] = [
	{ type: "TextField", id: "nric", label: "IC / FIN" },
	{ type: "TextField", id: "passportNumber", label: "Passport" },
	{ type: "DateTimePicker", id: "dateOfBirth", label: "Date of birth" },
	{ type: "TextField", id: "nationality", label: "Nationality" },
	{ type: "TextField", id: "gender", label: "Gender" },
	{ type: "TextField", id: "flightNumber", label: "Flight number" },
	{ type: "DateTimePicker", id: "flightDate", label: "Flight date" },
	{ type: "TextField", id: "flightDestination", label: "Flight destination" },
	{
		type: "DateTimePicker",
		id: "appointmentDate",
		label: "Appointment date"
	},
	{ type: "TextField", id: "testType", label: "Test type" },
	{ type: "TextField", id: "address", label: "Address" },
	{ type: "TextField", id: "mobileNumber", label: "Mobile" },
	{ type: "TextField", id: "email", label: "Email" }
];

const AppointmentForm = (): JSX.Element => {
	const { control, handleSubmit } = useForm<FormValues>({
		defaultValues: {
			nric: "",
			passportNumber: "",
			dateOfBirth: undefined,
			nationality: "Singaporean",
			gender: "",
			flightNumber: "",
			flightDate: undefined,
			flightDestination: "",
			appointmentDate: undefined,
			testType: "",
			address: "",
			mobileNumber: "",
			email: ""
		}
	});

	const onSubmit: SubmitHandler<FormValues> = (data) => {
		alert(JSON.stringify(data));
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Container
				maxWidth="lg"
				sx={{
					display: "flex",
					flexDirection: "column"
				}}
			>
				{generateFormInputs(control, arrayOfInputs)}
				<Button type="submit" variant="contained">
					Submit
				</Button>
			</Container>
		</form>
	);
};

export { AppointmentForm };

const generateFormInputs = (
	control: Control<FormValues, object>,
	arrayOfInputs: formInputs[]
): JSX.Element => {
	return (
		<>
			{arrayOfInputs.map((input) => {
				if (input.type === "TextField") {
					return (
						<Box
							sx={{
								display: "flex",
								flexDirection: "column",
								margin: "10px 0px"
							}}
						>
							<Controller
								name={input.id}
								control={control}
								render={({ field }) => (
									<TextField
										id="outlined-basic"
										label={input.label}
										variant="outlined"
										{...field}
									/>
								)}
							/>
						</Box>
					);
				} else if (input.type === "DateTimePicker") {
					return (
						<Box
							sx={{
								display: "flex",
								flexDirection: "column",
								margin: "10px 0px"
							}}
						>
							<Controller
								name={input.id}
								control={control}
								render={({ field }) => (
									<BasicDateTimePicker
										label={input.label}
										{...field}
									/>
								)}
							/>
						</Box>
					);
				}
			})}
		</>
	);
};
