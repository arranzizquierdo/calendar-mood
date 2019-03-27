import React, { Component } from 'react';

import './App.scss';
import Edit from './components/edit/edit';
import CalendarMood from './components/calendar/calendar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "",
      mood: "",
      message: "",
      listMood: []
    }
    this.handleMood = this.handleMood.bind(this);
    this.showMessage = this.showMessage.bind(this);
    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.getLocalStorage();
  }

  getLocalStorage() {
    const dataLocalStorage = localStorage.getItem('calendarMood');

    if (dataLocalStorage) {
      this.setState({
        listMood: JSON.parse(dataLocalStorage)
      })
    }
  }
  //show textare or not
  handleMood(e) {
    let valueMood = e.target.value;
    this.setState({
      mood: valueMood,
    })
  }

  showMessage() {
    let moodSelected = "";
    if (this.state.mood === ":(" || this.state.mood === "") {
      moodSelected = "hidden"
    }
    return moodSelected;
  }
  //

  handleChangeInput(e) {
    const { value, name } = e.target;
    this.setState({
      [name]: value
    })
  }

  handleSubmit(e) {
    const { date, mood, message, listMood } = this.state;
    let currentDay = {
        date: date,
        mood: mood,
        message: message
    }
    
    this.setState({
      listMood: listMood.concat(currentDay)
    })
    this.listMood = listMood.push(currentDay);

    this.saveLocalSotrage(listMood);
  }

  saveLocalSotrage(data) {
    localStorage.setItem('calendarMood', JSON.stringify(data))
  }

  render() {

    return (
      <div className="App">
        <Edit
          handleMood={this.handleMood}
          showMessage={this.showMessage}
          handleChangeInput={this.handleChangeInput}
          handleSubmit={this.handleSubmit}
        />
        <CalendarMood />
      </div>
    );
  }
}

export default App;
