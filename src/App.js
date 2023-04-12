import { useEffect, useState } from "react";
import "./App.css";

// 1.앱이 실행되자마자 현재위치기반의 날씨가 보인다
// 2. 도시, 섭씨, 화씨, 날씨 상태정보가 보인다
// 3. 5개의 버튼이 있다 (1개는 현재위치, 나머지는 다른 도시)
//4. 도시버튼을 누를때마다 해당 도시 정보가 나타난다.
//5 현재 위치 기반 날씨버튼을 클릭하면 다시 현재위치 기반으로 돌아온다
//6. 데이터를 들고오는 동안 로딩스피너가 돈다

function App() {
  const getCurrentLocation = () => {
    console.log("getCurrentLocation");
  };
  useEffect(() => {
    getCurrentLocation();
  }, []);
  return <div>hi</div>;
}

export default App;
