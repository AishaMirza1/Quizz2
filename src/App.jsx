import OptionInputContainer from "./components/OptionInput";
function App() {
  return (
    <main className="home-page">
      {/* starting screen */}
      <div className="headingContainer">
        <h1 className="heading">
          Welcome to the <span>FrontEnd Quizz!</span>
        </h1>
        <p>Pick a subject to get started.</p>
      </div>
      <div>
        <OptionInputContainer />
        <OptionInputContainer />
        <OptionInputContainer />
        <OptionInputContainer />
      </div>
    </main>
  );
}

export default App;
