import React, { useState } from "react";

function Dropdown({ options, selection, onSelect }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((currentIsOpen) => !currentIsOpen); // or setIsOpen(!isOpen), but it's more prone to bugs
  };

  const handleOptionClick = (value) => {
    setIsOpen(false);
    onSelect(value);
  };

  const renderedOptions = options.map((option) => {
    return (
      <div
        key={option.value}
        onClick={() => {
          handleOptionClick(option);
        }}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div>
      <div onClick={handleClick}>{selection?.label || "Select..."}</div>
      {isOpen && <div>{renderedOptions}</div>}
    </div>
  );
}

export default Dropdown;
