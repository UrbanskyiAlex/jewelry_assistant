import React, { useState } from "react";
import "./RingCalculator.css";
import CalcInput from "../../components/CalcInput/CalcInput";

function RingCalculator() {
  const [ringSize, setRingSize] = useState("");
  return (
    <div className="ring">
      <div className="ring__calc">
        <div className="ring__title">Розрахунок довжини заготовки</div>
        <CalcInput
          value={ringSize}
          onChangeValue={setRingSize}
          placeholder={"розмір..."}
          // title={"Введіть пробу металу яку потрібно отримати:"}
          title={"Необхідний розмір"}
          label={"required_size"}
        />
      </div>
    </div>
  );
}

export default RingCalculator;
