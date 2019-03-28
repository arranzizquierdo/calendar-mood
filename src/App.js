import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.scss';
import Edit from './components/edit/edit';
import CalendarMood from './components/calendar/calendar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDate: new Date().toLocaleDateString(),
      date: "",
      mood: "",
      message: "",
      listMood: []
    }
    this.handleMood = this.handleMood.bind(this);
    this.showMessage = this.showMessage.bind(this);
    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.disableButton = this.disableButton.bind(this);
    this.chekRepeatDate = this.chekRepeatDate.bind(this);
    this.orderListMood = this.orderListMood.bind(this);
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
      moodSelected = "hidden";
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
    if(this.chekRepeatDate()) {
      alert('Ya has registrado este día, elige otro ;)')
      e.preventDefault()
    } else {
      const { date, mood, message, listMood } = this.state;
    let currentDay = {
      date: date,
      mood: mood,
      message: message
    }

    this.setState({
      listMood: listMood.concat(currentDay),
      date: "",
      mood: "",
      message: ""
    })
    this.listMood = listMood.push(currentDay);
    this.saveLocalSotrage(listMood);
    }
  }

  saveLocalSotrage(data) {
    localStorage.setItem('calendarMood', JSON.stringify(data))
  }

  disableButton() {
    const { date, mood } = this.state;
    if (date === "" || mood === "") {
      return "false"
    }
  }

  chekRepeatDate() {
    const { listMood, date } = this.state;
    for ( const item of listMood) {
      if( date === item.date) {
        return true
        // alert('Ya has registrado este día, elige otro ;)')
      }
    }
  }

  orderListMood(listMood) {
    const orderList = listMood.sort(
      function(a, b) {
        if(a.date > b.date) {
          return 1;
        } else if (a.date < b.date) {
          return -1
        } else {
          return 0;
        }
      }
    )
    return orderList
  }

  render() {
    const { listMood } = this.state;
    console.log(this.state.currentDate)
    return (
      <div className="App">
        <Switch>
          <Route
            path="/"
            exact
            render={() => (
              <CalendarMood
                listMood={this.orderListMood(listMood)}
              />
            )}
          />
          <Route
            path="/edit"
            render={() => (
              <Edit
                handleMood={this.handleMood}
                showMessage={this.showMessage}
                handleChangeInput={this.handleChangeInput}
                handleSubmit={this.handleSubmit}
                disableButton={this.disableButton}
              />
            )}
          />
        </Switch>


      </div>
    );
  }
}

export default App;
