import PropTypes from "prop-types";
function Question({ ques }) {
  return <p className="question">{ques}</p>;
}

export default Question;
Question.propTypes = {
  ques: PropTypes.string,
};
