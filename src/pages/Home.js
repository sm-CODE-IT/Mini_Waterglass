import React, { useContext } from "react";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; //기본 달력을 그리기 위한 플러그인 - 설치해야함!
import interactionPlugin from "@fullcalendar/interaction"; //이벤트,클릭,드래그 등의 기능을 이용하기 위한 플러그인
import { useNavigate } from "react-router-dom";
import DiaryItem from "../components/DiaryItem";

import { DiaryStateContext } from "../App";

const Home = () => {
  const diaryList = useContext(DiaryStateContext);
  const navigate = useNavigate();

  const renderEventContent = (eventInfo, diaryList) => {
    //+버튼 화면에 출력
    if (diaryList) {
      return (
        <div>
          <img
            className="eventimage"
            src="/assets/addDiary.png"
            onClick={() => navigate(`/New/`)}
            width="85"
            height="85"
          />
        </div>
      );
    }
  };

  return (
    <div className="maincontainer">
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        editable="true" //이벤트,드래그 등의 편집 기능 활용여부
        events={[
          { daysOfWeek: [0, 1, 2, 3, 4, 5, 6], color: "white" }, //월화수목금토일-> +버튼 생성
        ]}
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
