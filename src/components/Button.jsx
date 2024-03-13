import PropTypes from "prop-types";
import { useQuiz } from "../context/quizzContext";
export default function Button({ text }) {
  const {
    handleUpdateCurrentIndex,
    currentAns,
    currentIndex,
    setIsFinished,
    handleReset,
    isFinished,
  } = useQuiz();
  return (
    currentAns && (
      <button
        onClick={() => {
          currentIndex === 9 && !isFinished
            ? setIsFinished(true)
            : isFinished
            ? handleReset()
            : handleUpdateCurrentIndex();
        }}
        className="call-to-action"
      >
        {" "}
        {currentIndex === 9 && !isFinished
          ? "Submit"
          : isFinished
          ? "restart"
          : text}
      </button>
    )
  );
}

Button.propTypes = {
  text: PropTypes.string,
};
