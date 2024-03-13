import { useState, useEffect } from "react";

const TimePicker = ({ selectedTime, onSelectTime }) => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);

  useEffect(() => {
    if (selectedTime) {
      const selectedHours = selectedTime.getHours();
      const selectedMinutes = selectedTime.getMinutes();
      setHours(selectedHours);
      setMinutes(selectedMinutes);
    }
  }, [selectedTime]);

  const handleHourChange = (e) => {
    setHours(parseInt(e.target.value, 10));
    onSelectTime(new Date(0, 0, 0, parseInt(e.target.value, 10), minutes));
  };

  const handleMinuteChange = (e) => {
    setMinutes(parseInt(e.target.value, 10));
    onSelectTime(new Date(0, 0, 0, hours, parseInt(e.target.value, 10)));
  };

  return (
    <div className="flex items-center">
      <label className="mr-2">Time:</label>
      <select value={hours} onChange={handleHourChange} className="mr-2">
        {[...Array(24).keys()].map((hour) => (
          <option key={hour} value={hour}>
            {hour.toString().padStart(2, "0")}
          </option>
        ))}
      </select>
      <span className="mr-2">:</span>
      <select value={minutes} onChange={handleMinuteChange}>
        {[...Array(60).keys()].map((minute) => (
          <option key={minute} value={minute}>
            {minute.toString().padStart(2, "0")}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TimePicker;
