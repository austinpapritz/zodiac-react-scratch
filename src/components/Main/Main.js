import React from 'react';
import './Main.css';
import background from '../../background.png';

import { zodiacs } from '../../data.js';
import Zodiac from '../Zodiac/Zodiac.js';

export default function Main() {
  return (
    <main style={{ backgroundImage: `url('${background}')` }}>
      {zodiacs.map((zodiac) => (
        <Zodiac key={zodiac.id} name={zodiac.name} dates={zodiac.dates} symbol={zodiac.symbol} />
      ))}
    </main>
  );
}
