import { Appbar } from "../components/Appbar";
import { AppointmentForm } from "../components/AppointmentForm";

const Homepage = (): JSX.Element => {
	return (
		<div>
			<Appbar />
			<AppointmentForm />
		</div>
	);
};

export { Homepage };
