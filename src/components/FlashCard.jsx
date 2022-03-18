import React from "react";
import setinha from "../assets/setinha.png";

export default function FlashCard(props) {
  let [question, setQuestion] = React.useState(true);

  return question === true ? (
    <section className="flashCard">
      <p className="flashContent">{props.questionContent}</p>
      <img
        src={setinha}
        alt=""
        onClick={() => {
          setQuestion((question = false));
        }}
      />
    </section>
  ) : (
    <section className="flashCard">
      <p className="flashContent">{props.answer}</p>
      <div className="btns">
        <button className="btn-wrong">Não lembrei</button>
        <button className="btn-almostRight">Quase não lembrei</button>
        <button className="btn-Right">Zap!</button>
      </div>
    </section>
  );
}