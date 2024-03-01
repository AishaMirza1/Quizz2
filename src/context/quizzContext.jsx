import { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
// creating context
const QuizContext = createContext();
// context Provider function
function QuizzProvider({ children }) {
  const [category, setCategory] = useState(null);
  const [questions, setQuestions] = useState(null);
  const [loading, setIsloading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  function handleUpdateCurrentIndex() {
    if (currentIndex < 9) {
      setCurrentIndex((prev) => prev + 1);
    }
  }
  function handleCategoryChange(e) {
    setCategory(e.target.value);
    setCurrentIndex(0);
  }

  useEffect(() => {
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
    fetchques();
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
