import PropTypes from "prop-types";
import { useQuiz } from "../context/quizzContext";
export default function Button({ text }) {
  const { handleUpdateCurrentIndex, currentAns, currentIndex, setIsFinished } =
    useQuiz();
  return (
    currentAns && (
      <button
        onClick={() => {
          currentIndex === 9 ? setIsFinished(true) : handleUpdateCurrentIndex();
        }}
        className="call-to-action"
      >
        {" "}
        {currentIndex === 9 ? "Submit" : text}
      </button>
    )
  );
}

Button.propTypes = {
  text: PropTypes.string,
};
