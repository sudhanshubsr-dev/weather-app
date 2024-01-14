import React from 'react'
import { FaTemperatureHigh } from "react-icons/fa6";
import { MdWbSunny } from "react-icons/md";
import { BsDropletHalf } from "react-icons/bs";
import { SiWindicss } from "react-icons/si";
import styles from './AirConditions.module.css'
const AirConditionsComponent = ({currentWeatherData, isCelcius}) => {
  return (
    <div className={styles.conditionsContainer}>
    <div className={styles.airconditionsTitle}>Air Conditions</div>
      <div className={styles.airConditionsValuesContainer}>

        {/* Real Feel */}
        <div className={styles.realfeelContainer}>
            <div className='text-text text-sm font-medium font-poppins flex items-center gap-2 ml-2'>
                <div><FaTemperatureHigh color='#EA580C'/></div>
                <div className='text-lg'>Real Feel</div>
            </div>
            <div className='text-text text-3xl ml-7 mt-2 font-bold font-poppins'>{isCelcius ? (currentWeatherData?.current?.feelslike_c || 'NA') : currentWeatherData?.current?.feelslike_f || 'NA'} {isCelcius ? '°C' : '°F'}</div>
        </div>

        {/* Wind */}
        <div className={styles.windspeedContainer}>
            <div className='text-text text-sm font-medium font-poppins flex items-center gap-2 ml-2'>
                <div><SiWindicss color='#EA580C'/></div>
                <div className='text-lg'>Wind</div>
            </div>
            <div className='text-text text-3xl ml-7 mt-2 font-bold font-poppins'>{currentWeatherData?.current?.wind_kph || 'NA'} km/h</div>
        </div>

        {/* Chances of Rain */}
        <div className={styles.humidityContainer}>
            <div className='text-text text-sm font-medium font-poppins flex items-center gap-2 ml-2'>
                <div><BsDropletHalf color='#EA580C' /></div>
                <div className='text-lg'>Wind Direction</div>
            </div>
            <div className='text-text text-3xl ml-7 mt-2 font-bold font-poppins'>
            {(currentWeatherData?.current?.wind_degree !== undefined && currentWeatherData?.current?.wind_dir)
            ? `${currentWeatherData.current.wind_degree}°${currentWeatherData.current.wind_dir}`
            : 'NA'}
            </div>
        </div>


        {/* UV Index */}
        <div className={styles.uvindexContainer}>
            <div className='text-text text-sm font-medium font-poppins flex items-center gap-2 ml-2'>
                <div><MdWbSunny color='#EA580C' /></div>
                <div className='text-lg'>UV Index</div>
            </div>
            <div className='text-text text-3xl ml-7 mt-2 font-bold font-poppins'>{currentWeatherData?.current?.uv || 'NA'}</div>
        </div>


      </div>
</div>
  )
}

export default AirConditionsComponent