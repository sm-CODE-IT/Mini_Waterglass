import React, {useState} from 'react';
import {useTheme} from "./components/useTheme"; // 환경별 테마 정보 가져오기
import './App.css';

function App() {
    // hook 함수 사용
    const [themeMode, toggleTheme] = useTheme(); 
    const [isClicked, setIsClicked] = useState(false);
    // 테마에 맞는 버튼 이미지 경로
    const theme = themeMode === 'light' ? process.env.PUBLIC_URL + "/assets/sun.png" : process.env.PUBLIC_URL + "/assets/moon.png";

    // spinner 만들기 위한 함수
    const handleThemeButton = () => {
      setIsClicked(true);
    }

    return (
      <div className="App">
        <div className={["theme", `${themeMode}`].join(" ")} onClick={handleThemeButton}>
            <img src={theme} className={["theme_button_wrapper", isClicked ? 'theme_button_clicked' : ''].join(' ')} onClick={toggleTheme} />
            <p>모드 변환</p>
        </div>
      </div>
    );
}

export default App;
