import React from 'react'
import { FaTemperatureHigh } from "react-icons/fa6";
import { MdWbSunny } from "react-icons/md";
import { BsDropletHalf } from "react-icons/bs";
import { SiWindicss } from "react-icons/si";
const AirConditionsComponent = ({currentWeatherData, isCelcius}) => {
  return (
    <div className="md:block hidden sm:block w-[45rem]  h-[16rem] mt-3 md:ml-8   px-7 py-2 bg-navbg rounded-[17px] flex-col justify-start items-start gap-2 ">
    <div className="w-[165px] h-[19px] text-text text-sm font-extrabold font-inter">Air Conditions</div>
      <div className='grid grid-cols-2 gap-4 mt-4'>

        {/* Real Feel */}
        <div className='real-feel  h-[5rem]'>
            <div className='text-text text-sm font-medium font-poppins flex items-center gap-2 ml-2'>
                <div><FaTemperatureHigh color='#EA580C'/></div>
                <div className='text-lg'>Real Feel</div>
            </div>
            <div className='text-text text-3xl ml-7 mt-2 font-bold font-poppins'>{isCelcius ? (currentWeatherData?.current?.feelslike_c || 'NA') : currentWeatherData?.current?.feelslike_f || 'NA'} {isCelcius ? '°C' : '°F'}</div>
        </div>

        {/* Wind */}
        <div className='real-feel  h-[5rem]'>
            <div className='text-text text-sm font-medium font-poppins flex items-center gap-2 ml-2'>
                <div><SiWindicss color='#EA580C'/></div>
                <div className='text-lg'>Wind</div>
            </div>
            <div className='text-text text-3xl ml-7 mt-2 font-bold font-poppins'>{currentWeatherData?.current?.wind_kph || 'NA'} km/h</div>
        </div>

        {/* Chances of Rain */}
        <div className='real-feel  h-[5rem]'>
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
        <div className='real-feel  h-[5rem]'>
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