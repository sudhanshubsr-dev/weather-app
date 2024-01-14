/* eslint-disable @next/next/no-img-element */
import React from 'react'

const FutureForecastComponet = ({futureWeatherDay, isCelcius}) => {
  const formatData = (futureWeatherDay)=>{
   const dayOfWeek = new Date(futureWeatherDay.date_epoch * 1000).toLocaleDateString('en-US', { weekday: 'long' });

    const icon = futureWeatherDay.day.condition.icon;
    const temp_c = futureWeatherDay.day.avgtemp_c;
    const temp_f = futureWeatherDay.day.avgtemp_f;
    const condition = futureWeatherDay.day.condition.text;
    return {day:dayOfWeek, icon, temp_c, temp_f,condition}
  }
  const {day, icon, temp_c,temp_f, condition} = formatData(futureWeatherDay)
  return (
    
        <div className='flex justify-between items-center border-b border-secondary p-3 gap-3 mt-1 '>
            <div className='py-2 px-2'>
                <p>{day}</p>
            </div>
            <div className='py-2 flex items-center justify-center gap-2'>
              <div>
              <img src={icon} alt="icon" />
              </div>
              
              <div>
                {condition.length > 10 ? condition.slice(0,8) + '...' : condition}
              </div>
            </div>
            <div className='py-4 px-2'>
              <p>{isCelcius ? temp_c : temp_f}{isCelcius ? '°C' : '°F'}</p>
            </div>
            
        </div>
  )
}

export default FutureForecastComponet