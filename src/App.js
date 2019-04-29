import React from "react";
import Calendar from "./components/Calendar";
import "./App.css";
import {connect} from 'react-redux';
import {addAppt, deleteAppts} from './actions';
import moment from 'moment';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }

  addAppt() {
    this.props.addAppt(this.state.text, this.state.dueDate);
  }

  deleteAppts(id) {
    this.props.deleteAppts(id);
  }

  renderAppts() {
    const {appointments} = this.props;
    return (<ul>
      {
        appointments.map(appointment => {
          return (<li key={appointment.id}>
            {appointment.text}
             {moment(new Date(appointment.dueDate)).fromNow()}
								<div
								className="list-item delete-button"
								onClick={() => this.deleteAppts(appointment.id)}
								>
								 &#x2715;
								</div>
          </li>)
        })
      }
    </ul>)
  }

  render() {
    return (<div className="App">
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
          <div>
            {this.renderAppts()}
          </div>
          <input onChange={event => this.setState({text: event.target.value})} placeholder="type appointment"/>
          <input
            type="date"
            className="datepicker"
            onChange={event => this.setState({dueDate: event.target.value})}
            />
          <button onClick={() => this.addAppt()}>
            +
          </button>
        </div>
        <Calendar />
      </main>
    </div>);
  }
}

function mapStateToProps(state) {
  return {appointments: state}
}

export default connect(mapStateToProps, {addAppt, deleteAppts})(App);
