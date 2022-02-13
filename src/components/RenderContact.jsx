import React from "react";
import PropTypes from "prop-types";

const RenderContacts = ({ value, onDelete }) => {
  return (
    <ul>
      {value.map(({ id, name, number }) => (
        <li key={id}>
          <p>
            {name} {number}
          </p>
          <button type="submit" onClick={() => onDelete(id)}>
            delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default RenderContacts;

RenderContacts.propTypes = {
  value: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};
