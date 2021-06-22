import React from 'react';
import './SeasonDisplay.css'


const seasonConfig = {
    summer: {
        text:'Let is hit to the beach',
        iconName: 'sun'
    },
    winter: {
        text: 'Burr it is cold',
        iconName: 'winter'
    }
}

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter'
    }
    else {
        return lat > 0 ? 'summer' : 'winter'
    }
}

const SeasonDisplay = ({ lat }) => {

    const season = getSeason(lat, new Date().getMonth());

    const {text , iconName } = seasonConfig[season]

    return <div className={`season-display ${season}`}>
        <i className={`icon-left massive ${iconName} icon`}></i>
        <h1>{text}</h1>
        <i className={`icon-right massive ${iconName} icon`}></i>
    </div>
};

export default SeasonDisplay;