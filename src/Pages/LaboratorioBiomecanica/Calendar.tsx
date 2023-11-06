import { useEffect, useState } from "react";
import { format, startOfMonth, addMonths, subMonths, isToday } from "date-fns";
import { ptBR } from "date-fns/locale";
import { zonedTimeToUtc } from "date-fns-tz";
import "./styles.scss";

interface Event {
	date: string;
	image: string;
}

function Calendar() {
	const [currentDate, setCurrentDate] = useState<Date>(new Date());
	const [selectedDate, setSelectedDate] = useState<Date | null>(null);
	const [events, setEvents] = useState<Event[]>([
		{ date: "05/10/2023", image: "evento1.jpg" },
		{ date: "15/10/2023", image: "evento2.jpg" },
		{ date: "20/10/2023", image: "evento3.jpg" },
		{ date: "29/10/2023", image: "evento2.jpg" },
	]);
	const [eventImage, setEventImage] = useState<string | null>(null);

	const daysInMonth: Date[] = [];
	const startOfCurrentMonth: Date = startOfMonth(currentDate);

	const lastDayOfMonth: Date = new Date(startOfCurrentMonth.getFullYear(), startOfCurrentMonth.getMonth() + 1, 0);

	const currentMonth: number = startOfCurrentMonth.getMonth();

	const hasEvent = (date: Date) => {
		return events.some((event) => format(date, "dd/MM/yyyy") === event.date);
	};

	const findClosestEvent = () => {
		const today = new Date();
		let closestEvent = null;
		let closestDateDiff = Number.MAX_VALUE;

		for (const event of events) {
			const eventDate = zonedTimeToUtc(new Date(event.date), "America/Sao_Paulo");
			const dateDiff = Math.abs(eventDate.getTime() - today.getTime());

			if (dateDiff < closestDateDiff) {
				closestDateDiff = dateDiff;
				closestEvent = event;
			}
		}

		return closestEvent;
	};

	useEffect(() => {
		const closestEvent = findClosestEvent();
		if (closestEvent) {
			const eventDate = zonedTimeToUtc(new Date(closestEvent.date), "America/Sao_Paulo");
			setSelectedDate(eventDate);
			setEventImage(closestEvent.image);
		}
	}, [events]);

	const handleDayClick = (date: Date) => {
		setSelectedDate(date);
		if (hasEvent(date)) {
			const event = events.find((event) => format(date, "dd/MM/yyyy") === event.date);
			setEventImage(event?.image || null);
		} else {
			setEventImage(null);
		}
	};

	for (let i = 1; i <= lastDayOfMonth.getDate(); i++) {
		const day = new Date(startOfCurrentMonth);
		day.setDate(i);

		daysInMonth.push(day);
	}

	const allDays = daysInMonth;

	return (
		<div className="calendar">
			<div className="header">
				<div className="month-year">{format(currentDate, "MMMM yyyy", { locale: ptBR })}</div>
				<div className="arrow-buttons">
					<button onClick={() => setCurrentDate(subMonths(currentDate, 1))}>{"<"}</button>
					<button onClick={() => setCurrentDate(addMonths(currentDate, 1))}>{">"}</button>
				</div>
			</div>
			<div className="week-days">
				{["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"].map((day, index) => (
					<div key={index} className="day-name">
						{day}
					</div>
				))}
			</div>
			<div className="days-container">
				{allDays.map((day, index) => (
					<div
						key={index}
						className={`calendar-day ${day.getMonth() === currentMonth ? "current-month" : "other-month"} ${hasEvent(day) ? "has-event" : ""} ${isToday(day) ? "today" : ""} ${
							selectedDate && format(selectedDate, "dd/MM/yyyy") === format(day, "dd/MM/yyyy") ? "selected has-event" : ""
						}`}
						onClick={() => handleDayClick(day)}
					>
						{format(day, "dd")}
					</div>
				))}
			</div>

			{eventImage && (
				<div className="event-image">
					<img src={eventImage} alt="Evento" />
				</div>
			)}
		</div>
	);
}

export default Calendar;
