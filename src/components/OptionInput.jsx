const options = [
  { name: "Html", icon: "A" },
  { name: "React", icon: "B" },
  { name: "Javascript", icon: "C" },
  { name: "Css", icon: "D" },
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
