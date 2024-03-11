import { useQuiz } from "../context/quizzContext";
import Button from "./Button";
import OptionInputContainer from "./OptionInput";
import TimeIndicator from "./Progress";
import Question from "./Question";

export default function QuestionScreen() {
  const { currentIndex } = useQuiz();
  return (
    <>
      <div className="question-Container">
        <p className="extras-info-p-tag">Question {currentIndex + 1} of 10 </p>
        <Question />
        <TimeIndicator />
      </div>
      <div className="question-options">
        <OptionInputContainer />
        <Button text="next question" />
      </div>
    </>
  );
}
