
import axios from 'axios';
import { debounce, set } from 'lodash';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './SearchBar.module.css';
import SearchIcon from './icons/SearchIcon';

const SearchBar = ({ setCurrentWeatherData, setIsLoading}) => {
  const [currentCity, setCurrentCity] = useState('');
  const [searchQuery, setSearchQuery] = useState([]);

  const handleFetchingData = debounce(async (ev) => {
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
    setSearchQuery([]); // clear suggestions
    handleFetchingSuggestions(query); // fetch suggestions
  };

  const handleSuggestionClick = (ev) => {
    const query = ev.target.textContent;
    setCurrentCity(query);
    setSearchQuery([]); // clear suggestions
  };

  useEffect(() => {
    handleFetchingData();
  }, []);

  return (
    <>
      <form className={styles.formBody} onSubmit={(ev) => ev.preventDefault()}>
        <div>
          <input
            value={currentCity}
            onChange={handleInputChange}
            type="text"
            className={styles.searchInput}
            id="simple-search"
            placeholder="Enter your City....."
            required
          />
          {searchQuery.length > 0 && (
              <div className={styles.searchList}>
                {searchQuery?.map((city, index) => (
                  <div
                    key={index}
                    onClick={handleSuggestionClick}
                  >
                    {city.name}, {city.region}, {city.country}
                  </div>
                ))}
              </div>
            )}
        </div>
        <div>
        <button type="submit" onClick={handleFetchingData}    
        className={styles.searchButton}>
          <SearchIcon />
        </button>
        </div>
        </form>
    </>
  );
};

export default SearchBar;

