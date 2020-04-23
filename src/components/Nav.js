import React from 'react';
import useWindowDimensions from '../utils/useWindowDimensions';

export default function Nav() {
    const { width } = useWindowDimensions();

    const navStyle = {
        borderBottom: 'outset lightgreen',
        backgroundColor: 'lightgreen',
        overflow: 'hidden',
        height: width <= 182 ? '70px' : '90px',
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%'
    }

    const elementStyle = {
        display: 'inline-block',
        textAlign: 'center',
        verticalAlign: 'middle',
        lineHeight: '80px',
    }

    const logoStyle = {
        height: '80px',
        clear: 'right',
        float: 'right',
    }

    const titleStyle = {
        color: 'rgba(0, 0, 0, 0.85)',
        fontFamily: 'Ink Free, fantasy',
        fontSize: width <= 182 ? '35px' : '50px',
        fontWeight: '1000',
        height: width <= 182 ? '60px' : '80px',
        marginLeft: '5px',
    }

    const imgStyle = {
        width: '80px',
        align: 'left',
        display: width <= 300 ? 'none' :'inline-block',
        marginRight: '15px',
        opacity: '0.83'
    }

    return (
        <div style={navStyle}>
            <div style={Object.assign({}, titleStyle, elementStyle)}>coronApi</div>
            <div style={Object.assign({}, logoStyle, elementStyle)}><img src='https://i.ya-webdesign.com/images/nuclear-drawing-danger-6.png' style={imgStyle} alt='Nuclear'></img></div>
        </div>
    )
}