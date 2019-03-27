import React, { Component } from 'react';

class CalendarMood extends Component {

    render() {
        const { listMood } = this.props;
        console.log(listMood)
        if (listMood === null) {
            return <div>cargando</div>
        } else {
            return (
                <div>
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