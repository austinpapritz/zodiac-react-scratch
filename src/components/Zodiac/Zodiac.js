import React from 'react';
import './Zodiac.css';

export default function Zodiac(props) {
  return (
    <div className="card">
      <img src={`../../public/zodiac_images/${props.name}.png`} />
      <p className="name">{props.name}</p>
      <p className="dates">{props.dates}</p>
      <p className="symbol">{props.symbol}</p>
    </div>
  );
}
