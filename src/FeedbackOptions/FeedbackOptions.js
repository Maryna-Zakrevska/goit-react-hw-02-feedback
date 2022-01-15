import React from "react";
import PropTypes from "prop-types";

export const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <div>
      <ul>
        <li>
          <button name="good" type="button" onClick={onLeaveFeedback}>
            Good
          </button>
        </li>
        <li>
          <button name="neutral" type="button" onClick={onLeaveFeedback}>
            Neutral
          </button>
        </li>
        <li>
          <button name="bad" type="button" onClick={onLeaveFeedback}>
            Bad
          </button>
        </li>
      </ul>
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
