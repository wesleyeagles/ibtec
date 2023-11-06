import { ReactNode, useState } from "react";
import { Accordion, Card } from "react-bootstrap";
import { FaPlus, FaMinus } from "react-icons/fa";

interface iAccordion {
	title?: string;
	content?: ReactNode;
}

const AccordionSingle = ({ title, content }: iAccordion) => {
	const [isExpanded, setExpanded] = useState(false);

	const handleAccordionToggle = () => {
		setExpanded(!isExpanded);
	};

	return (
		<Accordion flush activeKey={isExpanded ? "0" : ""}>
			<Card>
				<Accordion.Button className="accordion-heading" as={Card.Header} eventKey="0" onClick={handleAccordionToggle}>
					<span>{title}</span>
					<div className="container-btn-plus">{isExpanded ? <FaMinus color="#FFF" /> : <FaPlus color="#FFF" />}</div>
				</Accordion.Button>
				<Accordion.Collapse eventKey="0">
					<Card.Body>{content}</Card.Body>
				</Accordion.Collapse>
			</Card>
		</Accordion>
	);
};

export default AccordionSingle;
