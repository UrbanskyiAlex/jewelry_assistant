import React, { useState } from "react";
import "./RingCalculator.css";
import CalcInput from "../../components/CalcInput/CalcInput";
import ParamInput from "../../components/ParamInput/ParamInput";

function RingCalculator() {
  const [ringSize, setRingSize] = useState("");
  const [thickness, setThickness] = useState("");
  console.log(ringSize + thickness);
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
          title={"Товщина каблучки"}
          label={"required_thickness"}
        />
        <div className="total-holder">
          <div className="total-holder__title">Довжина заготовки:</div>
          <div className="total-holder__value">
            {Math.floor((Number(ringSize) + Number(thickness)) * 3.14 * 100) /
              100}{" "}
            g
          </div>
        </div>
      </div>
    </div>
  );
}

export default RingCalculator;
