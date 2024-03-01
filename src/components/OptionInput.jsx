import { useEffect, useState } from "react";
import { useQuiz } from "../context/quizzContext";

function OptionInputContainer() {
  const { questions, currentIndex, category, handleCategoryChange } = useQuiz();
  const [options, setOptions] = useState([]);
  const tags = ["A", "B", "C", "D"];
  const categories = ["Arts", "Geography", "G&K", "Films"];
  useEffect(() => {
    const getRandomInt = (max) => {
      return Math.floor(Math.random() * Math.floor(max));
    };

    function handleUpdateOptions(ques) {
      setOptions(ques.incorrect_answers);
      // setting random options together
      let answers = [...ques.incorrect_answers];
      answers.splice(getRandomInt(3), 0, ques.correct_answer);
      setOptions(answers);
    }

    questions && handleUpdateOptions(questions[currentIndex]);
  }, [currentIndex, questions, category]);
  return (
    <div className="options-container">
      {category
        ? options.map((option, index) => {
            return (
              <button key={index} className="option">
                <span>{tags[index]}</span>
                <p>{option}</p>
              </button>
            );
          })
        : categories.map((category, index) => {
            return (
              <button
                key={index}
                className="option"
                value={category}
                onClick={(e) => {
                  handleCategoryChange(e);
                }}
              >
                <span>{category[index]}</span>
                <p>{category}</p>
              </button>
            );
          })}
    </div>
  );
}

export default OptionInputContainer;
