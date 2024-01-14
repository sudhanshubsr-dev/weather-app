import React from 'react'

const TemperatureToggleButton = ({isCelcius, setIsCelcius}) => {
  const handleTemperatureChange = () => {
    setIsCelcius(!isCelcius);
  };
  return (
    <>
  <label class="relative flex-col justify-start items-end mb-5 cursor-pointer">
  <input onChange={handleTemperatureChange} type="checkbox" value={isCelcius} class="sr-only peer" />
  <div class="w-9 h-5 bg-navbg peer-focus:outline-none rounded-full peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-navbg" ></div>
  <span class="text-sm ml-[-13px] font-medium text-primary">{isCelcius ? 'Celcius' : 'Fahrenheit'}</span>
</label>
    </>
    )
}

export default TemperatureToggleButton