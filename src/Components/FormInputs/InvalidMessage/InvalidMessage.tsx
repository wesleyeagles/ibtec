import { FC } from "react";
import Alert from "react-bootstrap/Alert";
import { FiAlertCircle } from "react-icons/fi";

interface IInvalidMessageProps {
	message?: string;
	className?: string;
	type?: "text" | "alert";
}

const InvalidMessage: FC<IInvalidMessageProps> = ({ message, className, type = "text" }) => {
	if (!message) return null;

	if (type === "alert") {
		return (
			<Alert className={`invalid-input-alert ${className}`} variant="danger">
				<FiAlertCircle />
				{message}
			</Alert>
		);
	}

	return (
		<p className={`invalid-input-message ${className}`}>
			<FiAlertCircle />
			{message}
		</p>
	);
};

export default InvalidMessage;
