import "./CalcInput.css";

function CalcInput({
  value,
  onChangeValue,
  placeholder,
  title,
  label,
  subtitle = "",
}) {
  const handleKeyDown = (e) => {
    if (e.key === "+" || e.key === "-") {
      e.preventDefault();
    }
  };
  return (
    <div className="carat-calc__inputHolder">
      <label for={label} className="carat-calc__input-lable">
        <p className="input-lable-title">{title}</p>
        <p className="input-lable-subtitle">{subtitle}</p>
      </label>
      <input
        className="carat-calc__input"
        id={label}
        type="number"
        value={value}
        onKeyDown={handleKeyDown}
        onChange={(e) => {
          const inputValue = e.target.value;
          // Видаляємо непотрібні символи
          if (/[^0-9]/.test(inputValue)) {
            return;
          }
          // Перевіряємо діапазон від 0 до 999
          if (
            inputValue === "" ||
            (Number(inputValue) >= 0 && Number(inputValue) <= 999)
          ) {
            onChangeValue(inputValue);
          }
        }}
        placeholder={placeholder}
      />
    </div>
  );
}

export default CalcInput;
