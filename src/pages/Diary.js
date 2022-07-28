import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DiaryDispatchContext, DiaryStateContext } from "../App";
import MyButton from "../components/MyButton";
import { emotionList } from "./../util/emotionList";
import MyHeader from "../components/MyHeader";

const getStringDate = (date) => {
  return date.toISOString().slice(0, 10);
};

const Diary = () => {
  const { id } = useParams();
  const diaryList = useContext(DiaryStateContext);
  const { onRemove } = useContext(DiaryDispatchContext);
  const navigate = useNavigate();

  const [data, setData] = useState();

  useEffect(() => {
    if (diaryList.length >= 1) {
      const targetDiary = diaryList.find(
        (it) => parseInt(it.id) === parseInt(id)
      );

      if (targetDiary) {
        setData(targetDiary);
      } else {
        navigate("/", { replace: true });
      }
    }
  }, [id, diaryList, navigate]);

  const handleRemove = () => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      onRemove(data.id);
      navigate("/", { replace: true });
    }
  };
  useEffect(() => {
    if (diaryList.length >= 1) {
      const targetdiary = diaryList.find(
        (it) => parseInt(it.id) === parseInt(id)
      );

      if (targetdiary) {
        setData(targetdiary);
      }
    }
  }, [id, diaryList, navigate]);
  if (!data) {
    if (window.confirm("없는 일기입니다. 추가하시겠습니까?")) {
      navigate("/New/");
    } else {
      navigate("/", { replace: true });
    }
  } else {
    const curemotionData = emotionList.find(
      (it) => parseInt(it.emotion_id) === parseInt(data.emotion)
    );
    return (
      <div className="DiaryPage">
        <MyHeader
          headText={`${getStringDate(new Date(data.date))}기록`}
          leftChild={
            <MyButton text={"뒤로가기"} onClick={() => navigate(-1)} />
          }
          rightChild={
            <MyButton text={"수정하기"} onClick={() => navigate(-1)} />
          }
        />
        <article>
          <section>
            <h4>오늘의 감정</h4>
            <div
              className={[
                "diary_img_wrapper",
                `diary_img_wrapper_${data.emotion}`,
              ].join(" ")}
            >
              <img src={curemotionData.emotion_image} />
              <div className="emotion_descript">
                {curemotionData.emotion_descript}
              </div>
            </div>
          </section>
          <section>
            <h4>오늘의 일기</h4>
            <div className="diary_content_wrapper">
              <p>{data.content}</p>
            </div>
          </section>
          <section>
            <MyButton text={"삭제하기"} onClick={handleRemove} />
          </section>
        </article>
      </div>
    );
  }
};

export default Diary;
