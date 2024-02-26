import PropTypes from "prop-types";
export default function Button({ text }) {
  return <button className="call-to-action">{text}</button>;
}

Button.propTypes = {
  text: PropTypes.string,
};
