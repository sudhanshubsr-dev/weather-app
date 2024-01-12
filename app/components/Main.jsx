/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
'use client'
import React from 'react'
import SearchBar from './SearchBar'
import Todayforecastcomponent from './TodaysForeCastComponet.jsx'
import AirConditionsComponent from './AirConditionsComponent'
import { useState } from 'react'
import { MoonLoader } from 'react-spinners'
import FutureForecastComponet from './FutureForecastComponet'



const Home = () => {
    const [currentWeatherData, setCurrentWeatherData] = useState({});
    const todayWeatherData = currentWeatherData?.forecast?.forecastday[0];
    const futureWeatherData = currentWeatherData?.forecast?.forecastday;


    const [isLoading, setIsLoading] = useState(true);
    const [isCelcius, setIsCelcius] = useState(true);
  return (
    <div className='flex lg:ml-[10rem] h-[100vh]'>
    <div>
    <SearchBar setCurrentWeatherData={setCurrentWeatherData} setIsLoading={setIsLoading} isCelcius={isCelcius} setIsCelcius={setIsCelcius}/>

        {isLoading && (
            <div className='ml-80 mt-10'>
            <MoonLoader color="black" />
            </div>
        )}
        {!isLoading && currentWeatherData && (
           <>
           <div className='flex items-center'>
           
             <div className='flex-col ml-10 mt-8'>
               <div>
                 <div className='flex items-center'>
                  <div className="text-6xl font-bold text-text font-poppins">{currentWeatherData?.location?.name}</div>
                    <img src={currentWeatherData?.current?.condition?.icon} width="110px" height="110px" />
                 </div>
                 

                 <div className="text-sm text-primary font-poppins mt-[-20px]">
                  <span>Humidity: {currentWeatherData?.current?.humidity}%
                  </span>&nbsp;&nbsp;&nbsp;&nbsp;&middot;<span>{currentWeatherData?.current?.condition?.text}</span></div>
               </div>
               <div className='mt-[5rem]'>
                 <div className="text-8xl font-bold text-text font-poppins mb-4">{isCelcius ? currentWeatherData?.current?.temp_c : currentWeatherData?.current?.temp_f}{isCelcius ? '°C' : '°F'}</div>
                 <div className='text-sm '>Max Temperature: {isCelcius ? todayWeatherData.day.maxtemp_c : todayWeatherData.day.maxtemp_f}{isCelcius ? '°C' : '°F'}</div>
                 <div className='text-sm '>Min Temperatrure: {isCelcius ? todayWeatherData.day.mintemp_c : todayWeatherData.day.mintemp_f}{isCelcius ? '°C' : '°F'}</div>
               </div>
             </div>
        
           </div>
         </>
         
        )}

        <Todayforecastcomponent todayWeatherData={todayWeatherData} isCelcius={isCelcius} isLoading={isLoading} />
        
        <AirConditionsComponent currentWeatherData={currentWeatherData} isCelcius={isCelcius} />
    </div>
    <div className='h-[51.5rem] bg-navbg absolute left-[60rem] top-[7rem] rounded-3xl p-4  w-[30rem]'>
        <div>
            <p>6-DAY FUTURE FORECAST</p>
        </div>
     {isLoading && (
            <div className='ml-[12rem] mt-[18rem]'>
            <MoonLoader color="white" />
            </div>
     )}     
    {!isLoading && futureWeatherData?.map((futureWeatherDay, index) => (  
          <FutureForecastComponet key={index} futureWeatherDay={futureWeatherDay} isCelcius={isCelcius} />
        )
    )}
      </div>  
    </div>
  )
}

export default Home