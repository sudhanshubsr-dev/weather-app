/* eslint-disable @next/next/no-img-element */
import React from 'react'

const HourlyForeCastComponent = ({hourData,isCelcius}) => {
    const formatHourData = (hourData)=>{
        const time = new Date(hourData.time_epoch * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        const icon = hourData.condition.icon;
        const temp_c = hourData.temp_c;
        const temp_f = hourData.temp_f;
        return {time, icon, temp_c, temp_f}
    }
    const {time, icon, temp_c,temp_f} = formatHourData(hourData)
  return (
    <>
        <div className="flex justify-start items-center gap-7">
        <div className="px-[18px] py-0.5 bg-navbg  flex-col justify-center items-center border-r border-secondary">
            {/* Content for the first block */}
            <div className='mt-2'>
                <p className='text-text text-sm'>{time}</p>
            </div>
            <div className="w-[59px] h-[59px] mt-1">
                <img src={icon} alt="Cloudy" width={59} height={59} />
            </div>
            <div className='mt-4 ml-3'>
                <p className='text-text text-sm'>{isCelcius ? temp_c : temp_f} {isCelcius ? '°C' : '°F'}</p>
            </div>
        </div>
    </div>

    </>
    
  )
}

export default HourlyForeCastComponent