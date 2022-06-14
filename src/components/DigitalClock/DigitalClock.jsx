import React, { useState } from "react";
import "./DigitalClock.css";
import months from "../../data";

function DigitalClock() {
  const [hourDigital, setHourDigital] = useState("");
  const [minutesDigital, setMinutesDigital] = useState("");
  const [amPm, setAmPm] = useState("");
  const [dayNow, setDayNow] = useState("");
  const [monthNow, setMonthNow] = useState("");
  const [yearNow, setYearNow] = useState("");

  const clockText = () => {
    let date = new Date();

    let hh = date.getHours(),
      mm = date.getMinutes(),
      day = date.getDate(),
      month = date.getMonth(),
      year = date.getFullYear(),
      ampm;

    if (hh >= 12) {
      hh = hh - 12;
      ampm = "PM";
    } else {
      ampm = "AM";
    }

    if (hh === 0) hh = 12;
    if (hh < 10) hh = `0${hh}`;
    if (mm < 10) mm = `0${mm}`;

    setHourDigital(hh);
    setMinutesDigital(mm);
    setAmPm(ampm);
    setDayNow(day);
    setMonthNow(months[month]);
    setYearNow(year);
  };
  setInterval(clockText, 1000);

  return (
    <div>
      <div className="clock__text">
        <div className="clock__text-hour">{`${hourDigital}:`}</div>
        <div className="clock__text-minutes">{minutesDigital}</div>
        <div className="clock__text-ampm">{amPm}</div>
      </div>

      <div className="clock__date">
        <span>{`${dayNow} `}</span>
        <span>{`${monthNow} , `}</span>
        <span>{yearNow}</span>
      </div>
    </div>
  );
}

export default DigitalClock;
