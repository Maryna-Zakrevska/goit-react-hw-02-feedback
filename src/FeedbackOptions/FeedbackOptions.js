import React from "react";

export const FeedbackOptions = ({onClick}) => {
  return (
    <div>
      <ul>
        <li>
          <button name="good" type="button" onClick={onClick}>
            Good
          </button>
        </li>
        <li>
          <button name="neutral" type="button" onClick={onClick}>
            Neutral
          </button>
        </li>
        <li>
          <button name="bad" type="button" onClick={onClick}>
            Bad
          </button>
        </li>
      </ul>
    </div>
  );
};
