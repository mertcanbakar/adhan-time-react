import Loader from "./Loader";

export default function AdhanTimes({ info }) {
  function isPastTime(timeString) {
    const currentTime = new Date();
    const [hours, minutes] = timeString.split(":");

    // Geçerli tarihi kullanarak saat ve dakikayı ayarla
    const timeToCheck = new Date();
    timeToCheck.setHours(hours, minutes, 0);

    return currentTime > timeToCheck;
  }
  return (
    <div className="adhan-container">
      {info.times ? (
        Object.entries(info.times).map(([date, times], index) => (
          <div className="adhans" key={index}>
            <div>
              {times.map((time, idx) => {
                return (
                  <div
                    key={idx}
                    className={`adhan ${isPastTime(time) && "yellow"}`}
                  >
                    {time}
                  </div>
                );
              })}
            </div>
          </div>
        ))
      ) : (
        <div className="error">
          {info.error ? "Lütfen geçerli bir şehir giriniz" : <Loader />}
        </div>
      )}
    </div>
  );
}
