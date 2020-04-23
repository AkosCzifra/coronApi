import React, { useState, createContext } from "react";
import axios from "axios";

export const StatsContext = createContext();

export const StatsProvider = props => {
    const [stats, setStats] = useState();
    const [countries, setCountries] = useState();
    const [selectedCountry, setSelectedCountry] = useState();
    const [selectedCountryStats, setSelectedCountryStats] = useState();
    const [countryUnavailable, setCountryUnavailable] = useState(false)

    async function fetchStats() {
        console.log('Fetching stats...');
        const data = await axios('https://covid19.mathdro.id/api').then(response => response.data);
        console.log(data)
        setStats(data);
    }

    async function fetchCountries() {
        console.log('Fetching countries...');
        const data = await axios('https://covid19.mathdro.id/api/countries').then(response => response.data);
        console.log(data)
        setCountries(data)
    }

    function getCountryByCountryCode(countryCode) {
        let result;
        // eslint-disable-next-line
        Object.entries(countries.countries).map(([country, code]) => {if (code === countryCode) result = country})
        return result;
    }

    async function fetchSelectedCountryStats (countryCode) {
        console.log(`Loading ${getCountryByCountryCode(countryCode)} stats...`);
        const data = await axios(`https://covid19.mathdro.id/api/countries/${countryCode}`)
            .then(response => response.data)
            .catch(err => {console.log(err); setCountryUnavailable(true)});
        console.log(data);
        setSelectedCountryStats(data);
    }

    function fetchSelectedCountry(countryCode) {
        console.log(`Selected Country: ${getCountryByCountryCode(countryCode)}`);
        setSelectedCountry(countryCode);
        fetchSelectedCountryStats(countryCode);
    }

    return (
        <StatsContext.Provider value={{
            stats,
            fetchStats,
            countries,
            fetchCountries,
            selectedCountry,
            fetchSelectedCountry,
            selectedCountryStats,
            getCountryByCountryCode,
            countryUnavailable
            }}
        >
            {props.children}
        </StatsContext.Provider>
    )
}