import { useEffect, useState } from "react";
import { format, startOfMonth, addMonths, subMonths, isToday, addDays, getDaysInMonth } from "date-fns";
import { ptBR } from "date-fns/locale";
import { zonedTimeToUtc } from "date-fns-tz";
import "./styles.scss";
import axios from "axios";
import { IEventModel } from "../Eventos/Eventos";

interface Event {
	data: string;
	imagem: string;
}

function Calendar() {
	const [currentDate, setCurrentDate] = useState<Date>(new Date());
	const [selectedDate, setSelectedDate] = useState<Date | null>(null);
	const [events, setEvents] = useState<Event[]>([]);
	const [eventImage, setEventImage] = useState<string | null>(null);

	useEffect(() => {
		const fetchEvents = async () => {
			try {
				const response = await axios.get("https://backend-production-9a06.up.railway.app/api/event/ultimos-events");

				const mappedResponse = response.data.map((event: IEventModel) => ({
					imagem: event.imagem,
					data: format(addDays(new Date(event.data), 1), "dd/MM/yyyy"),
				}));

				if (response) {
					setEvents(mappedResponse);
				}
			} catch (err) {
				console.log(err);
			}
		};

		fetchEvents();
	}, []);

	const daysInMonth: Date[] = [];
	const startOfCurrentMonth: Date = startOfMonth(currentDate);

	const daysCount = getDaysInMonth(startOfCurrentMonth);

	const currentMonth: number = startOfCurrentMonth.getMonth();

	const hasEvent = (date: Date) => {
		return events.some((event) => format(date, "dd/MM/yyyy") === event.data);
	};

	const findClosestEvent = () => {
		const today = new Date();
		let closestEvent = null;
		let closestDateDiff = Number.MAX_VALUE;

		for (const event of events) {
			const eventDate = zonedTimeToUtc(addDays(new Date(event.data), 1), "America/Sao_Paulo");
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
			const eventDate = zonedTimeToUtc(new Date(closestEvent.data), "America/Sao_Paulo");
			setSelectedDate(eventDate);
			setEventImage(closestEvent.imagem);
		}

		console.log("Events", events);
	}, [events]);

	const handleDayClick = (date: Date) => {
		setSelectedDate(date);
		if (hasEvent(date)) {
			const event = events.find((event) => format(date, "dd/MM/yyyy") === event.data);
			setEventImage(event?.imagem || null);
		} else {
			setEventImage(null);
		}
	};

	let startDay = startOfCurrentMonth.getDay();
	if (startDay === 0) startDay = 7;

	for (let i = 1 - startDay; i <= daysCount; i++) {
		const day = new Date(startOfCurrentMonth);
		day.setDate(i);

		daysInMonth.push(day);
	}

	const allDays = daysInMonth;

	return (
		<div className="calendar">
			<div className="calendario">
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
			</div>
			<div className="imagem">
				{eventImage ? (
					<div className="event-image">
						<img src={`https://dev.ibtec.org.br/dev/blog/${eventImage}`} alt="Evento" />
					</div>
				) : (
					<div className="no-event">
						<span>Nenhum evento para o dia selecionado</span>
					</div>
				)}
			</div>
		</div>
	);
}

export default Calendar;
