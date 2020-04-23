import React from 'react';
import Stats from '../components/Stats.js';
import CountrySelector from '../components/CountrySelector.js';
import Nav from '../components/Nav.js';
import Footer from '../components/Footer.js';


export default function IndexPage() {
    return (
        <div>
            <Nav />
            <Stats />
            <CountrySelector />
            <Footer />
        </div>
    )
}


