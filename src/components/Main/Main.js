import React from 'react';
import './Main.css';
import background from '../../background.png';
import { zodiac } from '../../data.js';
import Zodiac from '../Zodiac/Zodiac.js';

export default function Main() {
  return <main style={{ backgroundImage: `url(${background})` }}></main>;
}
