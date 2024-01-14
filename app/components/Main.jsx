/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */

'use client'
import React, { useState } from 'react';
import SearchBar from './SearchBar';
import Todayforecastcomponent from './TodaysForeCastComponet.jsx';
import AirConditionsComponent from './AirConditionsComponent';
import { MoonLoader } from 'react-spinners';
import FutureForecastComponet from './FutureForecastComponet';
import styles from './Main.module.css';
import TemperatureToggleButton from './TemperatureToggleButton';


const Home = () => {
  const [currentWeatherData, setCurrentWeatherData] = useState({});
  const todayWeatherData = currentWeatherData?.forecast?.forecastday[0];
  const futureWeatherData = currentWeatherData?.forecast?.forecastday;
  const [isLoading, setIsLoading] = useState(true);
  const [isCelcius, setIsCelcius] = useState(true);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.searchBarContainer}>
      <SearchBar setCurrentWeatherData={setCurrentWeatherData} setIsLoading={setIsLoading}  />
    </div>
    {isLoading &&<div className={styles.Loader}> <MoonLoader color="white" /> </div>}
    {!isLoading && currentWeatherData && (
     <>
      <div className={styles.toggleButtonContainer}>
        <TemperatureToggleButton isCelcius={isCelcius} setIsCelcius={setIsCelcius} />
      </div>

      {/* City Name and Condtion */}
      <div className={styles.currentWeatherContainer}>
          <div className={styles.currentWeatherJumbotron}>
            <div className='text-6xl font-Poppins'>
            {currentWeatherData?.location?.name}
            </div>
            <div>                            
              <img src={currentWeatherData?.current?.condition?.icon} width="80px" height="80px" />
            </div>
          </div>
          
          {/* Humidity and Condition Section */}
          <div className={styles.subjumbotronSection}>
            <span>Humidity: {currentWeatherData?.current?.humidity}%
            </span>&nbsp;&nbsp;&nbsp;&nbsp;&middot;<span>{currentWeatherData?.current?.condition?.text}</span>
          </div>


          {/* Current Temperature,  MaxTemperature and MinTemperature Section */}
          <div className={styles.currentTemperature}>
            <span className={styles.temperatureDigits}>
              {isCelcius ? currentWeatherData?.current?.temp_c : currentWeatherData?.current?.temp_f}
            </span>
          {isCelcius ? '°C' : '°F'}
            
          </div>

          <div className={styles.minmaxtemp} >
            <div>Max Temperature: {isCelcius ? todayWeatherData.day.maxtemp_c : todayWeatherData.day.maxtemp_f}{isCelcius ? '°C' : '°F'}</div>
            <div>Min Temperature: {isCelcius ? todayWeatherData.day.mintemp_c : todayWeatherData.day.mintemp_f}{isCelcius ? '°C' : '°F'}</div>
          </div>
      </div>
        
        <div className={styles.todayForecastContainer}>
        <Todayforecastcomponent todayWeatherData={todayWeatherData} isCelcius={isCelcius} isLoading={isLoading} />
        </div>
        
        <div className={styles.airConditionsContainer}>
        <AirConditionsComponent currentWeatherData={currentWeatherData} isCelcius={isCelcius} />
        </div>
        
        <div className={styles.futureForecastContainer}>
          <p>6-DAY FUTURE FORECAST</p>
          {isLoading && <MoonLoader color="white" />}
          {!isLoading && futureWeatherData?.map((futureWeatherDay, index) => (
            <FutureForecastComponet key={index} futureWeatherDay={futureWeatherDay} isCelcius={isCelcius} />
          ))}
        </div>
      </> 
    )}
    </div>
  );
}

export default Home;
