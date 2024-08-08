import React, { useEffect, useState } from "react";
import "./CaratCalculator.css";
import CalcInput from "../../components/CalcInput/CalcInput";

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
    <div className="carat-calc">
      <h1 className="carat-calc__title">Калькулятор проб</h1>
      <CalcInput
        value={currentMetalCarat}
        onChangeValue={setCurrentMetalCarat}
        placeholder={"проба..."}
        // title={"Введіть пробу металу яку потрібно переплавити:"}
        title={"Проба лому:"}
        label={"current_metal_carat"}
      />
      <div className="carat-calc__inputHolder">
        {/* <label for="current_metal_weight" className="carat-calc__input-lable">
          Введіть вагу металу яку потрібно переплавити:
        </label> */}
        <label for="current_metal_weight" className="carat-calc__input-lable">
          Вага лому:
        </label>
        <input
          id="current_metal_weight"
          type="number"
          onKeyDown={handleKeyDown}
          placeholder="вага металу..."
          onChange={(e) => setCurrentMetalWeight(e.target.value)}
          className="carat-calc__input"
        />
      </div>
      <CalcInput
        value={requiredCarat}
        onChangeValue={setRequiredCarat}
        placeholder={"проба..."}
        // title={"Введіть пробу металу яку потрібно отримати:"}
        title={"Цільова проба:"}
        label={"required_metal_carat"}
      />

      <CalcInput
        value={addedMetalCarat}
        onChangeValue={setAddedMetalCarat}
        placeholder={"проба..."}
        // title={
        //   "Введіть пробу металу який додається (якщо 0 то це означає лігатура):"
        // }
        title={"Додана проба (якщо 0 то це означає лігатура):"}
        label={"added_metal_carat"}
      />
      <div className="total-holder">
        {/* <div className="total-holder__title">
          Вага металу яка необхідно дадати:
        </div> */}
        <div className="total-holder__title">Вага доданого металу:</div>
        <div className="total-holder__value">
          {Math.floor(totalWeight * 100) / 100} g
        </div>
      </div>
      <div className="total-holder">
        <div className="total-holder__title">Загальна вага металу:</div>
        <div className="total-holder__value">
          {(
            Math.floor(totalWeight * 100) / 100 +
            Number(currentMetalWeight)
          ).toFixed(2)}{" "}
          g
        </div>
      </div>
    </div>
  );
}

export default CaratCalculator;
