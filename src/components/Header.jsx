import PropTypes from "prop-types";
export default function Header({ heading, spanText }) {
  return (
    <div className="heading-container">
      <h1 className="heading">
        {heading} <span>{spanText}</span>
      </h1>
      <p className="extras-info-p-tag">Pick a subject to get started.</p>
    </div>
  );
}

Header.propTypes = {
  heading: PropTypes.string,
  spanText: PropTypes.string,
};
