import PropTypes from "prop-types";
import { useQuiz } from "../context/quizzContext";
export default function Button({ text }) {
  const { handleUpdateCurrentIndex, currentIndex } = useQuiz();
  return (
    <>
      {currentIndex === 9 ? (
        <button
          onClick={() => handleUpdateCurrentIndex()}
          className="call-to-action"
        >
          Submit Quizz
        </button>
      ) : (
        <button
          onClick={() => handleUpdateCurrentIndex()}
          className="call-to-action"
        >
          {" "}
          {text}
        </button>
      )}
    </>
  );
}

Button.propTypes = {
  text: PropTypes.string,
};
