
import axios from 'axios';
import { debounce, set } from 'lodash';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SearchBar = ({ setCurrentWeatherData, setIsLoading, isCelcius, setIsCelcius }) => {
  const [currentCity, setCurrentCity] = useState('');
  const [searchQuery, setSearchQuery] = useState([]);

  const handleFetchingData = debounce(async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(`/api/weather?q=${currentCity}`);
  
      if (response.data && response.data.status === 'error') {
        const { code, message } = response.data.error;
        if (code === 1006) {
          toast.error('City not found');
        } else {
          toast.error(message || 'Something went wrong');
        }
        setCurrentCity('');
        setSearchQuery([]);
      } else {
        setCurrentWeatherData(response.data);
        setSearchQuery([]);
        setCurrentCity('');
      }
  
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      toast.error('Something went wrong');
      setCurrentCity('');
      setSearchQuery([]);
      setIsLoading(false);
    }
  }, 500);
  

  const handleFetchingSuggestions = debounce(async (query) => {
    try {
      if (query.length === 0) {
        setSearchQuery([]);
        return;
      }
      const response = await axios.get(`/api/search?q=${query}`);
      setSearchQuery(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, 500);

  const handleInputChange = (ev) => {
    const query = ev.target.value;
    setCurrentCity(query);
    handleFetchingSuggestions(query); // fetch suggestions
  };

  const handleSuggestionClick = (ev) => {
    const query = ev.target.textContent;
    setCurrentCity(query);
    setSearchQuery([]); // clear suggestions
  };

  const handleTemperatureChange = (ev) => {
    setIsCelcius(!isCelcius);
  };

  useEffect(() => {
    handleFetchingData();
  }, []);

  return (
    <>
      <form className="flex items-center mt-6 md:ps-10" onSubmit={(ev) => ev.preventDefault()}>
        <div className="relative w-full md:w-[50vw] sm:w-full ">
          <input
            value={currentCity}
            onChange={handleInputChange}
            type="text"
            id="simple-search"
            className="bg-navbg border border-navbg text-text text-sm rounded-3xl focus:border-navbg block focus:outline-none w-full p-2.5"
            placeholder="Enter your City....."
            required
          />
          <>
            <ul>
              {searchQuery?.map((city, index) => (
                <li
                  key={index}
                  className="absolute z-10 w-full bg-navbg border border-navbg text-text text-sm rounded-2xl focus:border-navbg block focus:outline-none mt-1 p-3 cursor-pointer"
                  onClick={handleSuggestionClick}
                >
                  {city.name}, {city.region}, {city.country}
                </li>
              ))}
            </ul>
          </>
        </div>
        <button
          type="submit"
          onClick={handleFetchingData}
          className="p-2.5 ms-2 text-sm font-medium text-white bg-transparent rounded-lg borde hover:bg-bodybg focus:ring-1 focus:outline-none focus:ring-primary"
        >
          <svg
            className="w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </button>

        <label className="relative inline-flex items-center left-[18rem] mt-2 cursor-pointer">
          <input
            type="checkbox"
            value={isCelcius}
            onChange={handleTemperatureChange}
            className="sr-only peer"
          />
          <div className="w-9 h-5 bg-navbg peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-bodybg after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-#0C0A09"></div>
          <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
            {isCelcius ? 'Celcius' : 'Fahrenheit'}
          </span>
        </label>
      </form>
    </>
  );
};

export default SearchBar;

