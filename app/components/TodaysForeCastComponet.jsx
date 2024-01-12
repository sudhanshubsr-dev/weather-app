/* eslint-disable @next/next/no-img-element */

import React from 'react'
import HourlyForeCastComponent from './HourlyForeCastComponent.jsx'
import { MoonLoader } from 'react-spinners';

const Todayforecastcomponent = ({todayWeatherData, isCelcius, isLoading}) => {


const filteredHourData = todayWeatherData?.hour?.filter((hourData, index) => index % 4 === 0);

  return (
   
    <div className="md:block hidden sm:block w-[45rem] h-[191px] mt-10 md:ml-8  px-7 py-2 bg-navbg rounded-[17px] flex-col justify-start items-start gap-2 ">
        <div className="w-[165px] h-[19px] text-text text-sm font-bold font-poppins mt-1">TODAY’S FORECAST</div>
        {isLoading && (
        <div className='mt-8 ml-[18rem]'>
            <MoonLoader color="white" />
        </div>
          )}
          {!isLoading && (
              <div className='flex gap-2 mt-3 w-full flex-shrink-0'>
              {filteredHourData?.map((hourData, index) => (
              <HourlyForeCastComponent key={index} hourData={hourData} isCelcius={isCelcius} isLoading={isLoading}/>
              ))}
            </div>
          )}
          
    </div>
    
  )
}

export default Todayforecastcomponent