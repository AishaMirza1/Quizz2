import Button from "./components/Button";
import Header from "./components/Header";
import OptionInputContainer from "./components/OptionInput";
// import Result from "./components/Result";
import { useQuiz } from "./context/quizzContext";
import QuestionScreen from "./components/QuestionScreen";
function App() {
  const { category } = useQuiz();
  return (
    <main className="home-page">
      {/* starting screen */}
      {!category && (
        <>
          <Header heading="Welcome To The" spanText="Frontend Quiz!" />
          <div className="subject-options">
            <OptionInputContainer />
            <Button text="Start quizz" />
          </div>
        </>
      )}
      {/* Question screen */}
      {category && <QuestionScreen />}
      {/* result screen 
        {/* <Header heading="Quiz Completed" spanText="You Scored..." />
        <div>
          <Result />
          <Button text="Play Again" />
        </div> */}
    </main>
  );
}

export default App;
