import React, { useEffect, useState } from "react";
import "./CaratCalculator.css";

function CaratCalculator() {
  const [currentMetalCarat, setCurrentMetalCarat] = useState("");
  const [currentMetalWeight, setCurrentMetalWeight] = useState("");

  const [requiredCarat, setRequiredCarat] = useState("");
  const [addedMetalCarat, setAddedMetalCarat] = useState("");
  const [totalWeight, setTotalWeight] = useState(0);

  useEffect(() => {
    if (currentMetalCarat && currentMetalWeight && requiredCarat) {
      const needMetal =
        currentMetalWeight *
        ((requiredCarat / 1000 - currentMetalCarat / 1000) /
          (addedMetalCarat / 1000 - requiredCarat / 1000));
      console.log("Часика чистого у вхідному металі", needMetal);
      if (needMetal > 0) {
        setTotalWeight(needMetal);
      } else {
        setTotalWeight(0);
      }
    } else {
      setTotalWeight(0);
    }
  }, [currentMetalCarat, currentMetalWeight, requiredCarat, addedMetalCarat]);

  const handleKeyDown = (e) => {
    if (e.key === "+" || e.key === "-") {
      e.preventDefault();
    }
  };

  return (
    <div className="carat">
      <h1>Калькулятор проб</h1>

      <div>
        <p className="title">Введіть пробу металу яку потрібно переплавити:</p>
        <label for="current_metal_carat" className="input_lable">
          Проба
        </label>
        <input
          id="current_metal_carat"
          type="number"
          value={currentMetalCarat}
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
              setCurrentMetalCarat(inputValue);
            }
          }}
          placeholder="проба металу..."
        />
      </div>
      <div>
        <p className="title">Введіть вагу металу яку потрібно переплавити:</p>
        <label for="current_metal_weight" className="input_lable">
          Вага
        </label>
        <input
          id="current_metal_weight"
          type="number"
          onKeyDown={handleKeyDown}
          placeholder="вага металу..."
          onChange={(e) => setCurrentMetalWeight(e.target.value)}
        />
      </div>

      <div>
        <p className="title">Введіть пробу металу яку потрібно отримати:</p>
        <label for="required_metal_carat" className="input_lable">
          Необхідна проба
        </label>
        <input
          id="required_metal_carat"
          type="number"
          value={requiredCarat}
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
              setRequiredCarat(inputValue);
            }
          }}
          placeholder="необхідна проба металу..."
        />
      </div>
      <div>
        <p className="title">
          Введіть пробу металу який додається(якщо 0 то це означає лігатура):
        </p>
        <label for="added_metal_carat" className="input_lable">
          Проба лигуючого металу
        </label>
        <input
          id="added_metal_carat"
          type="number"
          onKeyDown={handleKeyDown}
          value={addedMetalCarat}
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
              setAddedMetalCarat(inputValue);
            }
          }}
          placeholder="проба металу..."
        />
        <div className="total_title">Вага металу яка необхідно дадати: </div>
        <div className="total_value">
          {Math.floor(totalWeight * 100) / 100} g
        </div>
      </div>
    </div>
  );
}

export default CaratCalculator;
