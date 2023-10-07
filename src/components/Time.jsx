import { useEffect, useState } from "react";

const Time = ({ info }) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  const hours = currentTime.getHours().toString().padStart(2, "0");
  const minutes = currentTime.getMinutes().toString().padStart(2, "0");
  const seconds = currentTime.getSeconds().toString().padStart(2, "0");

  useEffect(() => {
    setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
  }, []);
  return (
    <div className="time">
      {info.place && <h2>{info.place.city}</h2>}
      <h1>{`${hours}:${minutes}:${seconds}`}</h1>
    </div>
  );
};

export default Time;
