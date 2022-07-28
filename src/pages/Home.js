import React, { useContext, useEffect, useState } from "react";
// COMPONENTS
import MyHeader from "./../components/MyHeader";
import MyButton from "./../components/MyButton";
import DiaryList from "../components/DiaryList";
// cal modules
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; //기본 달력을 그리기 위한 플러그인 - 설치해야함!
import interactionPlugin from "@fullcalendar/interaction"; //이벤트,클릭,드래그 등의 기능을 이용하기 위한 플러그인
import { DiaryStateContext } from "../App";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  // 페이지 별 타이틀 수정하기
  useEffect(() => {
    const titleElem = document.getElementsByTagName("title")[0];
    titleElem.innerHTML = `감정 일기장`;
  }, []);

  const renderEventContent = (eventInfo, diaryList) => {
    //+버튼 화면에 출력
    if (diaryList) {
      return (
        <div>
          <img
            className="eventimage"
            src="/assets/addDiary.png"
            onClick={() => navigate(`/new`)}
            width="85"
            height="85"
          />
        </div>
      );
    }
  };

  return (
    <div className="main_container">
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        editable="true" //이벤트,드래그 등의 편집 기능 활용여부
        events={[
          { daysOfWeek: [0, 1, 2, 3, 4, 5, 6], color: "white" }, //월화수목금토일-> +버튼 생성
        ]}
        height="90vh"
        eventContent={renderEventContent} //이벤트 내용 커스텀
        headerToolbar={{
          //헤드 툴바
          start: "prev",
          center: "title",
          end: "next",
        }}
      />
    </div>
  );
};

export default Home;
