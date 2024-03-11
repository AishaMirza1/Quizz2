import { createContext, useContext, useLayoutEffect, useState } from "react";
import PropTypes from "prop-types";
// creating context
const QuizContext = createContext();
// context Provider function
function QuizzProvider({ children }) {
  const [marks, setMarks] = useState(0);
  const [category, setCategory] = useState(null);
  const [questions, setQuestions] = useState(null);
  const [loading, setIsloading] = useState(true);
  const [currentAns, setCurrentAns] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  function handleUpdateCurrentIndex() {
    if (currentIndex < 9) {
      setCurrentIndex((prev) => prev + 1);
    }
    setCurrentAns(null);
  }
  function handleCategoryChange(e) {
    setCategory(e.target.value);
    setCurrentIndex(0);
  }
  function handleMarks(e) {
    if (e === questions[currentIndex].correct_answer) {
      setMarks((marks) => marks + 1);
    }
  }
  console.log(marks);
  useLayoutEffect(() => {
    async function fetchques() {
      const api_category =
        category == "Arts"
          ? "25"
          : category == "Geography"
          ? "22"
          : category == "g&k"
          ? "9"
          : category == "films"
          ? "11"
          : "";
      const res = await fetch(
        `https://opentdb.com/api.php?amount=10&category=${api_category}&type=multiple`
      );
      const data = await res.json();
      setIsloading(false);
      setQuestions(data.results);
    }
    if (category) fetchques();
  }, [category]);

  return (
    <QuizContext.Provider
      value={{
        questions,
        loading,
        currentIndex,
        category,
        setCurrentIndex,
        setQuestions,
        handleCategoryChange,
        setCategory,
        handleUpdateCurrentIndex,
        marks,
        setMarks,
        currentAns,
        setCurrentAns,
        handleMarks,
        isFinished,
        setIsFinished,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}
function useQuiz() {
  const context = useContext(QuizContext);
  return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { QuizzProvider, useQuiz };

QuizzProvider.propTypes = {
  children: PropTypes.any,
};
