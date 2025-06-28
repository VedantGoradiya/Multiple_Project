import React, { useEffect, useState } from "react";
import './style.css'

const AnalogClock = () => {

    const [time, setTime] = useState(null)

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

  }, [time]);

  const hour = time?.getHours() %12
  const minutes = time?.getMinutes()
  const seconds = time?.getSeconds()

  return <div>
    <div className="hand hour" style={{transform: `rotate(${hour * 30 + minutes / 2}deg)`}}></div>
    <div className="hand minutes" style={{transform: `rotate(${minutes*6}deg)`}}></div>
    <div className="hand seconds" style={{transform: `rotate(${seconds*6}deg)`}}></div>
  </div>;
};

export default AnalogClock;
