import React from "react";
import "./Solders.css";

function Solders() {
  return (
    <div className="solders">
      <div className="solders__description">
        Припої для пайки золотих виробів 585 проби (14-каратного золота) повинні
        мати відповідні властивості, такі як колір, температура плавлення і
        механічні характеристики, щоб забезпечити міцні та непомітні з'єднання.
      </div>
      <div className="solder__item">
        <div className="solder__title">Припою з цинком (золото 585 проба)</div>
        <div className="solder__formula">
          <div className="solder__formula-item">
            <span>Au</span> 58.5%
          </div>
          <div className="solder__formula-item">
            <span>Cu</span> 39%
          </div>
          <div className="solder__formula-item">
            <span>Zn</span> 2.5%
          </div>
          <div className="solder__formula-item">
            Температура плавлення: <span>700 - 750°C</span>
          </div>
        </div>
      </div>
      <div className="solder__item">
        <div className="solder__title">Припою з кадмієм (золото 585 проба)</div>
        <div className="solder__formula">
          <div className="solder__formula-item">
            <span>Au</span> 58.5%
          </div>
          <div className="solder__formula-item">
            <span>Cu</span> 34%
          </div>
          <div className="solder__formula-item">
            <span>Cd</span> 7.5%
          </div>
          <div className="solder__formula-item">
            Температура плавлення: <span>650 - 700°C</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Solders;
