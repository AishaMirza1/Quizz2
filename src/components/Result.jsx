import TestName from "./TestName";

function Result() {
  return (
    <div className="result-container">
      {/* test name */}
      <TestName />
      {/* marks */}
      <p className="marks">8</p>
      {/* total questions */}
      <p className="extras-info-p-tag">out of 10</p>
    </div>
  );
}

export default Result;
