import axios from "axios";
import { useState } from "react";
import Time from "./Time";
import AdhanTimes from "./AdhanTimes";

const Container = () => {
  const [info, setInfo] = useState([]);
  const [city, setCity] = useState("");
  const formattedCity =
    city.charAt(0).toLocaleUpperCase("tr") +
    city.slice(1).toLocaleLowerCase("tr");

  async function getResponse() {
    try {
      const response = await axios.get(
        `https://namaz-vakti.vercel.app/api/timesFromPlace?country=Turkey&region=${formattedCity}&city=${formattedCity}&days=1&timezoneOffset=180&calculationMethod=Turkey`
      );
      setInfo(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  const handleSubmit = () => {
    event.preventDefault();
    if (city !== "") {
      getResponse();
      setCity("");
    }
  };

  return (
    <div className="container">
      <form action="submit" className="form-area" onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setCity(e.target.value)}
          value={city}
          placeholder="Şehir giriniz."
        />
        <button type="submit">Ara</button>
      </form>
      <Time info={info} />
      <AdhanTimes info={info} />
    </div>
  );
};

export default Container;
