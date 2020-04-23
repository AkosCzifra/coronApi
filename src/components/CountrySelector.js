import React, { useContext, useEffect } from 'react';
import { StatsContext } from '../context/StatsContext.js';
import useWindowDimensions from '../utils/useWindowDimensions';
import { Select } from 'antd';

import 'antd/dist/antd.css';
import '../stylesheet/style.css';



export default function CountrySelector() {
    const {countries, fetchCountries, selectedCountry, fetchSelectedCountry, selectedCountryStats, countryUnavailable } = useContext(StatsContext);
    const { width } = useWindowDimensions();
    const { Option } = Select;

    useEffect(() => {
        fetchCountries();
        // eslint-disable-next-line
    }, [])

    const responsiveFontSize = {
        fontSize: width <= 280 ? '0.9rem' : '2rem',
    }

    function responsiveSelectWidth() {
        return width <= 182 ? 140 : 180;
    }

    const handleSelectedCountry = (value) => {
        fetchSelectedCountry(value);
    }

    if (!countries) return <p>Countries are loading...</p>

    else if (selectedCountryStats) {
        return(
            <div className="countryBlock">
                <Select
                    className="selectStyle"
                    showSearch
                    style={{ width: responsiveSelectWidth() }}
                    placeholder="Select a country"
                    optionFilterProp="children"
                    onChange={handleSelectedCountry}
                    filterOption={(input, option) =>
                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                >
                {countries.countries.map(country => (
                    <Option key={country.name} value={country.name}>{country.name}</Option>
                        )
                    )
                }
                </Select>
                <div className="countryTitle" style={responsiveFontSize}>
                    {`${selectedCountry} Statistics`}
                </div>
                <div className="countryElement" style={responsiveFontSize}>
                    <span role="img" aria-label="Sick">😷</span> - {selectedCountryStats.confirmed.value}
                </div>
                <div className="countryElement" style={responsiveFontSize}>
                    <span role="img" aria-label="Recovered">🥳</span> - {selectedCountryStats.recovered.value}
                </div>
                <div className="countryElement" style={responsiveFontSize}>
                    <span role="img" aria-label="Pray">☠️</span> - {selectedCountryStats.deaths.value}
                </div>
            </div>
        )
}
    else if (countryUnavailable) {
        return (
            <div className="countryBlock">
                <Select
                    className="selectStyle"
                    showSearch
                    style={{ width: responsiveSelectWidth() }}
                    placeholder="Select a country"
                    optionFilterProp="children"
                    onChange={handleSelectedCountry}
                    filterOption={(input, option) =>
                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                >
                {countries.countries.map(country => (
                    <Option key={country.name} value={country.name}>{country.name}</Option>
                        )
                    )
                }
                </Select>
                <div className="countryTitle" style={responsiveFontSize}>
                    Sorry! Country is unavailable!
                </div>
            </div>
        )
    }

    return (
        <div className="countryBlock">
            <Select
                className="selectStyle"
                showSearch
                style={{ width: responsiveSelectWidth() }}
                placeholder="Select a country"
                optionFilterProp="children"
                onChange={handleSelectedCountry}
                filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
            >
            {countries.countries.map(country => (
                <Option key={country.name} value={country.name}>{country.name}</Option>
                    )
                )
            }
        </Select>
     </div>
    )
}
