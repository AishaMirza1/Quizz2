import Button from "./components/Button";
import Header from "./components/Header";
import OptionInputContainer from "./components/OptionInput";
import Question from "./components/Question";
import Result from "./components/Result";
import TimeIndicator from "./components/Progress";
function App() {
  return (
    <main className="home-page">
      {/* Question screen */}
      <div className="question-Container">
        <p className="extras-info-p-tag">Question 6 of 10 </p>
        <Question ques="What do you mean by strict mode in javascript and characteristics of javascript strict-mode?" />
        <TimeIndicator />
      </div>
      <div className="question-options">
        <OptionInputContainer />
        <Button text="Start quizz" />
      </div>
      {/* starting screen */}
      <Header heading="Welcome To The" spanText="Frontend Quiz!" />
      <div className="subject-options">
        <OptionInputContainer />
        <Button text="Start quizz" />
      </div>
      {/* result screen */}
      <Header heading="Quiz Completed" spanText="You Scored..." />
      <div>
        <Result />
        <Button text="Play Again" />
      </div>
    </main>
  );
}

export default App;
