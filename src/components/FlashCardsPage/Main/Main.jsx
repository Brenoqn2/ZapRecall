import Question from "./Question.jsx";

export default function Main(props) {
  const { addAnswer, questions } = props;

  return (
    <main>
      {questions.map((question) => (
        <Question
          callback={addAnswer}
          number={questions.findIndex((element) => element === question) + 1}
          questionContent={question.questionContent}
          answer={question.answer}
          key={
            "Pergunta" + questions.findIndex((element) => element === question)
          }
        />
      ))}
    </main>
  );
}
