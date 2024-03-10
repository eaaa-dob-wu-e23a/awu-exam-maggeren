import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { useState } from "react";

class CalendarClass {
  constructor() {
    this.currentDate = new Date();
    this.selectedDate = null;
  }

  getDaysInMonth(year, month) {
    return new Date(year, month + 1, 0).getDate();
  }

  getFirstDayOfMonth(year, month) {
    return new Date(year, month, 1).getDay();
  }

  generateMonthMatrix(year, month) {
    const daysInMonth = this.getDaysInMonth(year, month);
    const firstDayOfMonth = this.getFirstDayOfMonth(year, month);
    const matrix = [];

    const lastDayOfPrevMonth = new Date(year, month, 0).getDate();

    for (let i = firstDayOfMonth - 1; i >= 0; i--) {
      const day = lastDayOfPrevMonth - i;
      const date = new Date(year, month - 1, day);
      matrix.push({
        day,
        date,
        isCurrentMonth: false,
      });
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      const isSelected =
        this.selectedDate &&
        this.selectedDate.toISOString().split("T")[0] ===
          date.toISOString().split("T")[0];

      const isToday =
        today.toISOString().split("T")[0] === date.toISOString().split("T")[0];

      matrix.push({
        day,
        date,
        isSelected: this.selectedDate ? isSelected : false,
        isCurrentMonth: true,
        isToday,
      });
    }

    return matrix;
  }

  nextMonth() {
    this.currentDate.setMonth(this.currentDate.getMonth() + 1);
  }

  prevMonth() {
    this.currentDate.setMonth(this.currentDate.getMonth() - 1);
  }

  selectDate(date) {
    this.selectedDate = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate()
    );
  }
}

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Calendar({ onDateClick }) {
  const [calendar, setCalendar] = useState(new CalendarClass());

  const days = calendar.generateMonthMatrix(
    calendar.currentDate.getFullYear(),
    calendar.currentDate.getMonth()
  );

  const handleNextMonth = () => {
    setCalendar((prevCalendar) => {
      const newCalendar = new CalendarClass();
      newCalendar.currentDate = new Date(prevCalendar.currentDate);
      newCalendar.nextMonth();
      return newCalendar;
    });
  };

  const handlePrevMonth = () => {
    setCalendar((prevCalendar) => {
      const newCalendar = new CalendarClass();
      newCalendar.currentDate = new Date(prevCalendar.currentDate);
      newCalendar.prevMonth();
      return newCalendar;
    });
  };

  const handleDateClick = (date) => {
    setCalendar((prevCalendar) => {
      const newCalendar = new CalendarClass();
      newCalendar.currentDate = new Date(prevCalendar.currentDate);
      newCalendar.selectDate(date);
      return newCalendar;
    });
    onDateClick(date);
  };

  return (
    <div className="w-full ml-10">
      <div className="flex items-center">
        <h2 className="flex-auto text-sm font-semibold text-gray-900 text-center">
          {calendar.currentDate.toLocaleString("default", { month: "long" })}{" "}
          {calendar.currentDate.getFullYear()}
        </h2>
        <button
          type="button"
          className="-my-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
          onClick={handlePrevMonth}
        >
          <span className="sr-only">Previous month</span>
          <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
        </button>
        <button
          type="button"
          className="-my-1.5 -mr-1.5 ml-2 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
          onClick={handleNextMonth}
        >
          <span className="sr-only">Next month</span>
          <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>
      <div className="mt-10 grid grid-cols-7 text-center text-xs leading-6 text-gray-500">
        <div>M</div>
        <div>T</div>
        <div>W</div>
        <div>T</div>
        <div>F</div>
        <div>S</div>
        <div>S</div>
      </div>
      <div className="mt-2 grid grid-cols-7 text-sm">
        {days.map((day, dayIdx) => (
          <div
            key={day.date}
            className={classNames(
              dayIdx > 6 && "border-t border-gray-200",
              "py-2"
            )}
          >
            <button
              type="button"
              className={classNames(
                day?.isSelected && "text-white",
                !day.isSelected && day.isToday && "text-indigo-600",
                !day.isSelected &&
                  !day.isToday &&
                  day.isCurrentMonth &&
                  "text-gray-900",
                !day.isSelected &&
                  !day.isToday &&
                  !day.isCurrentMonth &&
                  "text-gray-400",
                day.isSelected && day.isToday && "bg-indigo-600",
                day.isSelected && !day.isToday && "bg-gray-900",
                !day.isSelected && "hover:bg-gray-200",
                (day.isSelected || day.isToday) && "font-semibold",
                "mx-auto flex h-8 w-8 items-center justify-center rounded-full"
              )}
              onClick={() => handleDateClick(day.date)}
            >
              <time dateTime={day.date.toISOString()}>
                {day.date.getDate().toString().padStart(2, "0")}
              </time>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
