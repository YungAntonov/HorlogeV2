import './App.css';
import AlarmOption from './components/AlarmOption/AlarmOption';
import AnalogClock from './components/AnalogClock/AnalogClock';
import ContextAlarm from './components/context/ContextAlarm';
import DigitalClock from './components/DigitalClock/DigitalClock';
import BannerCustom from './components/BannerCustom/BannerCustom';
import React from 'react';


function App() {

  return (
    <section className="clock container">
      <div className="clock__container grid">
        <div className="clock__content grid">
          <ContextAlarm>
            <BannerCustom/>
            <AnalogClock />
            <DigitalClock />
            <AlarmOption />
          </ContextAlarm>
        </div>
      </div>
    </section>
  );
}

export default App;

