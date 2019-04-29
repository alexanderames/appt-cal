import React from "react";
import Calendar from "./components/Calendar";
import "./App.css";
import { connect } from 'react-redux';
import { addAppt } from './actions';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }
  addAppt() {
    this.props.addAppt(this.state.text);
  }

  render() {
    return (
      <div className="App">
        <header>
          <div id="logo">
            <span className="icon">date_range</span>
            <span>
              appointment<b>calendar</b>
            </span>
          </div>
        </header>
        <main>
          <div className="col col-center">
            <input
            onChange={event => this.setState({text: event.target.value})}
            placeholder="type appointment"
            />
            <button
            onClick={() => this.addAppt()}
            > +
            </button>
          </div>
          <Calendar />
        </main>
      </div>
    );
  }
}

export default connect(null, { addAppt })(App);
