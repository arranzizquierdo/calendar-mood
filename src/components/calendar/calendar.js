import React, { Component } from 'react';
import { Link } from "react-router-dom";

import './calendar.scss'

class CalendarMood extends Component {

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
                    {listMood.map((itme, i) => {
                        return (
                            <li key={i} className="calendar-item">
                                {itme.mood}
                                {itme.message}
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default CalendarMood;