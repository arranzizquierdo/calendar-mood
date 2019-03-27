import React, { Component } from 'react';

import './App.scss';
import Edit from './components/edit/edit';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mood: "",
      data: 
        {
          date: "",
          mood: "",
          message: ""
        }
    }
    this.handleMood = this.handleMood.bind(this);
    this.showMessage = this.showMessage.bind(this);
    this.handleChangeInput = this.handleChangeInput.bind(this);
  }

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

  handleChangeInput(e) {
    const { value, name } = e.target;
    this.setState ((prevState) => {
      return {
        data: {
          ...prevState.data,
          [name]: value
        }
      }
    })
  }

  render() {

    return (
      <div className="App">
        <Edit handleMood={this.handleMood} showMessage={this.showMessage} sendData={this.sendData} handleChangeInput={this.handleChangeInput}/>
      </div>
    );
  }
}

export default App;
