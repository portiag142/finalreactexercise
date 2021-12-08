// 1a
import './MCUShows.css';
import '../App'
import {useEffect} from 'react';

// 1b
function MCUShows({dates, index2, num2}){
    // 1c
    return (
        // 4a
        <div className="MCUShows">
            {/* 3a */}
            <h1 style={{fontFamily: 'Georgia', textDecoration: 'underline'}}>Disney+</h1>
            <h2>MCU Show Release Dates</h2>
            {/* 5c */}
            <p>WandaVision: {dates.wandaVision}</p>
            <p>The Falcon and the Winter Soldier: {dates.falconWinter}</p>
            <p>Loki: {dates.loki}</p>
            <p>What If...?: {dates.whatIf}</p>
            <p>Hawkeye: {dates.hawkeye}</p>
            {/* 6e and 6f*/}
            <button onClick={index2}>Random MCU Character</button>
            {/* 7c and 7d */}
            <button onClick={num2}>Next MCU Character</button>
        </div>
    )    

}

// 1d
export default MCUShows;