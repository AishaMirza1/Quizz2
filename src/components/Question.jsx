import { useQuiz } from "../context/quizzContext";

function Question() {
  const { loading, questions, currentIndex } = useQuiz();
  console.log(questions);

  if (loading) return <div>loading</div>;
  if (questions)
    return <p className="question">{questions[currentIndex].question}</p>;
}

export default Question;
