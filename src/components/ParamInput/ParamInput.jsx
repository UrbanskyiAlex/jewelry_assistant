import React from "react";
import "./ParamInput.css";

function ParamInput({
  value = "",
  onChangeValue = () => {},
  placeholder = "",
  title = "",
  label = "",
  subtitle = "",
}) {
  const handleKeyDown = (e) => {
    if (e.key === "+" || e.key === "-") {
      e.preventDefault();
    }
  };

  return (
    <div className="paramInput__holder">
      <label for={label} className="paramInput-lable">
        <p className="paramInput-lable-title">{title}</p>
        <p className="paramInput-lable-subtitle">{subtitle}</p>
      </label>
      <input
        className="paramInput"
        id={label}
        type="number"
        value={value}
        onKeyDown={handleKeyDown}
        onChange={(e) => {
          const inputValue = e.target.value;
          // Перевіряємо діапазон від 0 до 100
          if (Number(inputValue) >= 0 && Number(inputValue) <= 100) {
            onChangeValue(inputValue);
          }
          console.log("inputValue--->", inputValue);
        }}
        placeholder={placeholder}
      />
    </div>
  );
}

export default ParamInput;
