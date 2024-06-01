import React, { useEffect, useState } from "react";
import "./CaratCalculator.css";

function CaratCalculator() {
  const [currentMetalCarat, setCurrentMetalCarat] = useState(0);
  const [currentMetalWeight, setCurrentMetalWeight] = useState(0);

  const [requiredCarat, setRequiredCarat] = useState(0);
  const [addedMetalCarat, setAddedMetalCarat] = useState(0);
  const [totalWeight, setTotalWeight] = useState(0);

  useEffect(() => {
    if (currentMetalCarat && currentMetalWeight && requiredCarat) {
      const needMetal =
        currentMetalWeight *
        ((requiredCarat / 1000 - currentMetalCarat / 1000) /
          (addedMetalCarat / 1000 - requiredCarat / 1000));
      console.log("Часика чистого у вхідному металі", needMetal);
      setTotalWeight(needMetal);
    } else {
      setTotalWeight(0);
    }
  }, [currentMetalCarat, currentMetalWeight, requiredCarat, addedMetalCarat]);

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
          onChange={(e) => setCurrentMetalCarat(e.target.value)}
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
          onChange={(e) => setRequiredCarat(e.target.value)}
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
          onChange={(e) => setAddedMetalCarat(e.target.value)}
        />
        <div className="total_title">Вага металу яка необхідно дадати: </div>
        <div className="total_value">{totalWeight.toFixed(2)} g</div>
      </div>
    </div>
  );
}

export default CaratCalculator;
