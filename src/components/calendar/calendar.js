import React, { Component } from 'react';
import { Link } from "react-router-dom";

class CalendarMood extends Component {

    render() {
        const { listMood } = this.props;

        if (listMood === null) {
            return <div>cargando</div>
        } else {
            return (
                <div>
                <Link to="/edit">
                    <button>+</button>
                </Link>
                    <ul>
                        {listMood.map((itme, i) => {
                            return (
                                <li key={i}>
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
}

export default CalendarMood;