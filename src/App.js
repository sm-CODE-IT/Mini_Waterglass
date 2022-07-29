import React from 'react';
import {useTheme} from "./components/useTheme"; // 환경별 테마 정보 가져오기
import { motion } from 'framer-motion';
import './App.css';

function App() {

    // hook 함수 사용
    const [themeMode, toggleTheme] = useTheme(); 
    
    // 테마에 맞는 버튼 이미지 경로
    const theme = themeMode === 'light' ? process.env.PUBLIC_URL + "/assets/sun.png" : process.env.PUBLIC_URL + "/assets/moon.png";
    
    return (
      <div className="App">
        <div className={["theme", `${themeMode}`].join(" ")}>
            <motion.img src={theme} className="theme_button_wrapper" onClick={toggleTheme} whileTap={{
              opacity: 0,
              rotate: 70,
            }}/>
            <p>모드 변환</p>
        </div>
      </div>
    );
}

export default App;
