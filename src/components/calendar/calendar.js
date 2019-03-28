import React, { Component } from 'react';
import { Link } from "react-router-dom";

import './calendar.scss'

class CalendarMood extends Component {

    showTooltip(mood){
        if(mood === ":)") {
            return ""
        } else {
            return "hidden"
        }
    }
    render() {
        const { listMood } = this.props;

        return (
            <div className="calendar-container">
            <div>
               <h1 className="calendar-title">¿cómo te sientes hoy?</h1>
            <Link to="/edit">
                <button className="calendar-button">+</button>
            </Link> 
            </div>
            
                <ul className="calendar-list">
                    {listMood.map((item, i) => {
                        return (
                            <li key={i} className="calendar-item tooltip">
                                {item.mood}
                                <div className={`${this.showTooltip(item.mood)}`}>
                                    <span className="tooltiptext">
                                    {item.message}
                                </span>
                                </div>
                                
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default CalendarMood;