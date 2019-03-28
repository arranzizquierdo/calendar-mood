import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./calendar.scss";

class CalendarMood extends Component {
  showTooltip(message) {
    if (message !== "") {
      return true;
    } else {
      return false;
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
                {this.showTooltip(item.message) ? (
                  <span className="tooltiptext">{item.message}</span>
                ) : null}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default CalendarMood;
