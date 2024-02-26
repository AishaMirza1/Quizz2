const options = [
  {
    name: "Html Javascript Javascript Javascript Javascript Javascript Javascript Javascript Java",
    icon: "A",
  },
  {
    name: "React Javascript Javascript J avascriptJavascriptJavascript Javascript Javascript Java",
    icon: "B",
  },
  {
    name: "Javas result of various causes. One of the most common causes is an incorrect resolution which often leads to a blurretJavascript  ptJavascript  ptJavascript ",
    icon: "C ",
  },
  {
    name: "Css Javascript Javascript Javascript Javascript Javascript Javascript Javascript Java",
    icon: "D",
  },
];
function OptionInputContainer() {
  return (
    <div className="options-container">
      {options.map((option, index) => {
        return (
          <button key={index} className="option">
            <span>{option.icon}</span>
            <p>{option.name}</p>
          </button>
        );
      })}
    </div>
  );
}

export default OptionInputContainer;
