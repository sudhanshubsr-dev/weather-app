/* eslint-disable @next/next/no-img-element */

import React from 'react'
import HourlyForeCastComponent from './HourlyForeCastComponent.jsx'

const Todayforecastcomponent = ({todayWeatherData, isCelcius, isLoading}) => {


const filteredHourData = todayWeatherData?.hour?.filter((hourData, index) => index % 4 === 0);

  return (
   
    <div className=" px-7 hidden md:block py-3 bg-navbg rounded-[17px] flex-col justify-start items-start gap-2 ">
        <div className="w-[160px] h-[19px] text-text text-sm font-bold font-poppins mt-1">TODAY’S FORECAST</div>

              <div className='flex gap-2 mt-3 w-full lg:ml-[1.5em]'>
              {filteredHourData?.map((hourData, index) => (
              <HourlyForeCastComponent key={index} hourData={hourData} isCelcius={isCelcius} isLoading={isLoading}/>
              ))}
            </div>

          
    </div>
    
  )
}

export default Todayforecastcomponent