import { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WeatherBox from "./component/WeatherBox";
import WeatherButton from "./component/WeatherButton";
import ClipLoader from "react-spinners/ClipLoader";

// 1.앱이 실행되자마자 현재위치기반의 날씨가 보인다
// 2. 도시, 섭씨, 화씨, 날씨 상태정보가 보인다
// 3. 5개의 버튼이 있다 (1개는 현재위치, 나머지는 다른 도시)
//4. 도시버튼을 누를때마다 해당 도시 정보가 나타난다.
//5 현재 위치 기반 날씨버튼을 클릭하면 다시 현재위치 기반으로 돌아온다
//6. 데이터를 들고오는 동안 로딩스피너가 돈다

function App() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(true);
  const cities = ["paris", "new york", "london", "seoul"];
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getWeatherByCurrentLocation(lat, lon);
    });
  };

  const getWeatherByCurrentLocation = async (lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=ae9eee43fc282637a0cf709ef0ceda52&&units=metric`;
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data);
  };

  const getWeatherByCity = async () => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ae9eee43fc282637a0cf709ef0ceda52&&units=metric`;
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data);
  };

  useEffect(() => {
    if (city == "") {
      getCurrentLocation();
    } else {
      getWeatherByCity();
    }
  }, [city]);

  return (
    <div>
      <div className="container">
        <ClipLoader color="#f88c6b" loading={loading} size={150} />
        <WeatherBox weather={weather} />
        <WeatherButton cities={cities} setCity={setCity} />
      </div>
    </div>
  );
}

export default App;
