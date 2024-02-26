import Button from "./components/Button";
import Header from "./components/Header";
import OptionInputContainer from "./components/OptionInput";
import Result from "./components/Result";
function App() {
  return (
    <main className="home-page">
      {/* Question screen */}
      <Header heading="Quiz Completed" spanText="You Scored..." />
      <div>
        <Result />
        <Button text="Play Again" />
      </div>
      {/* starting screen */}
      <Header heading="Welcome To The" spanText="Frontend Quiz!" />
      <div>
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
