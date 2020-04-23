import React, { useContext, useEffect } from 'react';
import { StatsContext } from '../context/StatsContext.js';
import useWindowDimensions from '../utils/useWindowDimensions';
import '../stylesheet/style.css';


export default function Stats() {
    const {stats, fetchStats } = useContext(StatsContext);
    const { width } = useWindowDimensions();

    useEffect(() => {
        fetchStats();
        // eslint-disable-next-line
    }, []);

    const responsiveHeight = {
        paddingTop: width <= 182 ? '70px' : '90px',
    }

    const responsiveTitleFontSize= {
        fontSize: width <= 280 ? '1.2rem' : '2.5rem',
    }

    const responsiveFontSize= {
        fontSize: width <= 280 ? '0.9rem' : '2rem',
    }

    if (!stats) return <p>Stats are loading...</p>

    return (
        <div className="statsBlock" style={responsiveHeight}>
            <div className="statsTitle" style={responsiveTitleFontSize}>
                World Statistics
            </div>
            <div className="statsElement" style={responsiveFontSize}>
                <span role="img" aria-label="Sick">😷</span> - {stats.confirmed.value}
            </div>
            <div className="statsElement" style={responsiveFontSize}>
                <span role="img" aria-label="Recovered">🥳</span> - {stats.recovered.value}
            </div>
            <div className="statsElement" style={responsiveFontSize}>
                <span role="img" aria-label="Pray">☠️</span> - {stats.deaths.value}
            </div>
        </div>
    )
}