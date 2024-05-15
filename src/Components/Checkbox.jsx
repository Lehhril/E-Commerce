import React, { useState, useEffect } from 'react';

const Checkbox = ({ id, name, onChange }) => {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    // Reset the checkbox state when it's unchecked
    if (!isChecked) {
      setIsChecked(false);
    }
  }, [isChecked]);

  const handleCheckboxChange = (event) => {
    const { checked } = event.target;
    setIsChecked(checked);
    onChange(name, checked); // Notify parent component about the change
  };

  return (
    <>
      <input id={id} name="checkbox" type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
      <label className="terms-label" htmlFor={id}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 200 200" className="checkbox-svg">
          <mask fill="white" id={`path-${id}-inside-1`}>
            <rect height="200" width="200"></rect>
          </mask>
          <rect mask={`url(#path-${id}-inside-1)`} strokeWidth="40" className="checkbox-box" height="200" width="200"></rect>
          <path strokeWidth="15" d="M52 111.018L76.9867 136L149 64" className="checkbox-tick"></path>
        </svg>
        <span className="label-text">{name}</span>
      </label>
    </>
  );
};

export default Checkbox;
