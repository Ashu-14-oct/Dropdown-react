import React, { useState } from 'react';
import './index.css';
const Dropdown = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleHover = () => {
    setIsOpen(true);
  };

  const handleClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="dropdown" onMouseEnter={handleHover} onMouseLeave={handleClick}>
      <button className="dropdown-btn">Select an option</button>
      {isOpen && (
        <ul className="dropdown-content">
          {items.map((item, index) => (
            <li key={index} onClick={handleClick}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;

