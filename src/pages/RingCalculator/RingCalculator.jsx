import React, { useState } from "react";
import "./RingCalculator.css";
import ParamInput from "../../components/ParamInput/ParamInput";

function RingCalculator() {
  const [ringSize, setRingSize] = useState("");
  const [thickness, setThickness] = useState("");
  const [width, setWidth] = useState("");
  // const [weight, setWeight] = useState("");

  const length =
    Number(ringSize) !== 0 && Number(thickness) !== 0
      ? Math.floor((Number(ringSize) + Number(thickness)) * 3.14 * 100) / 100
      : 0;

  const weight =
    width && thickness && length
      ? Math.floor(
          (length / 10) * (width / 10) * (thickness / 10) * 12.8 * 100
        ) / 100
      : 0;

  function twoSymbolAfterPoint(number) {
    return Math.floor(number * 100) / 100;
  }

  console.log(twoSymbolAfterPoint(9.7966));

  return (
    <div className="ring">
      <div className="ring__calc">
        <div className="ring__title">Розрахунок довжини заготовки</div>
        <ParamInput
          value={ringSize}
          onChangeValue={setRingSize}
          placeholder={"розмір..."}
          title={"Необхідний розмір"}
          label={"required_size"}
        />
        <ParamInput
          value={thickness}
          onChangeValue={setThickness}
          placeholder={"товщина..."}
          title={"Товщина каблучки (mm)"}
          label={"required_thickness"}
        />
        <div className="total-holder">
          <div className="total-holder__title">Довжина заготовки</div>
          <div className="total-holder__value">{length} mm</div>
        </div>
        <ParamInput
          value={width}
          onChangeValue={setWidth}
          placeholder={"ширина..."}
          title={"Ширина каблучки (mm)"}
          label={"required_width"}
        />
        <div className="ring__title">Розрахунок ваги</div>
        <div className="total-holder">
          <div className="total-holder__title">золото 585 проби</div>
          <div className="total-holder__value">{weight} g</div>
        </div>
        <div className="total-holder">
          <div className="total-holder__title">золото 750 проби</div>
          <div className="total-holder__value">
            {twoSymbolAfterPoint(weight * 1.22)} g
          </div>
        </div>
        <div className="total-holder">
          <div className="total-holder__title">срібло 925 проби</div>
          <div className="total-holder__value">
            {twoSymbolAfterPoint(weight * 0.82)} g
          </div>
        </div>
      </div>
    </div>
  );
}

export default RingCalculator;
