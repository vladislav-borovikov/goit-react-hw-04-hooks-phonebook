import React from "react";
import PropTypes from "prop-types";

const Filter = ({ value, onChange }) => {
  return (
    <label>
      Find contact:
      <input type="text" name="" value={value} onChange={onChange} />
    </label>
  );
};

export default Filter;

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
