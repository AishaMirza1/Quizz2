import { useQuiz } from "../context/quizzContext";
import TestName from "./TestName";

function Result() {
  const { marks } = useQuiz();
  return (
    <div className="result-container">
      {/* test name */}
      <TestName />
      {/* marks */}
      <p className="marks">{marks}</p>
      {/* total questions */}
      <p className="extras-info-p-tag">out of 10</p>
    </div>
  );
}

export default Result;
