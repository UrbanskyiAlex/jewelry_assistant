import React from "react";
import "./Alloys.css";

function Alloys() {
  return (
    <div className="alloys">
      <div className="alloys__description">
        Для досягнення різних кольорів золота використовується різне
        співвідношення міді та срібла в сплаві з чистим золотом.
      </div>
      <div className="alloy__item item-rose">
        <div className="alloy__title">Червоне золото (Rose Gold)</div>
        <div className="alloy__description">
          Червоне золото має високу частку міді, що надає йому червонуватий
          відтінок.
        </div>
        <div className="alloy__formula">
          <p className="alloy__formula-item">58.5% чистого золота</p>
          <p className="alloy__formula-item">41.5% міді</p>
        </div>
      </div>
      <div className="alloy__item item-pink">
        <div className="alloy__title">Рожеве золото (Pink Gold)</div>
        <div className="alloy__description">
          Рожеве золото має трохи менше міді, ніж червоне золото.
        </div>
        <div className="alloy__formula">
          <p className="alloy__formula-item">58.5% чистого золота</p>
          <p className="alloy__formula-item">31.2% міді</p>
          <p className="alloy__formula-item">10.3% срібла</p>
        </div>
      </div>
      <div className="alloy__item item-yellow">
        <div className="alloy__title">Жовте золото (Yellow Gold)</div>
        <div className="alloy__description">
          Жовте золото має збалансоване співвідношення міді та срібла для
          збереження природного жовтого кольору.
        </div>
        <div className="alloy__formula">
          <p className="alloy__formula-item">58.5% чистого золота</p>
          <p className="alloy__formula-item">20.75% міді</p>
          <p className="alloy__formula-item">20.75% срібла</p>
        </div>
      </div>
      <div className="alloy__item item-green">
        <div className="alloy__title">Зелене золото (Green Gold)</div>
        <div className="alloy__description">
          Зелене золото містить більше срібла і зовсім не містить міді.
        </div>
        <div className="alloy__formula">
          <p className="alloy__formula-item">58.5% чистого золота</p>
          <p className="alloy__formula-item">41.5% срібла</p>
        </div>
      </div>
      <div className="alloy__item item-white">
        <div className="alloy__title">Білое золото (White Gold)</div>
        <div className="alloy__description">
          Біле золото містить метали, що надають сплаву білий або сріблястий
          відтінок. Це можуть бути паладій, нікель або інші метали.
        </div>
        <div className="alloy__formula">
          <p className="alloy__formula-item">58.5% чистого золота</p>
          <p className="alloy__formula-item">41.5% паладію або нікелю</p>
        </div>
      </div>
    </div>
  );
}

export default Alloys;
