import React from 'react';
import Others from '../Others/Others';
import './WordToday.css';
import background from './background.jpg'
import Api from '../../util/Api';

export default class WordToday extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showOthers: false}
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getOthers = this.getOthers.bind(this);
  }
  handleSubmit() {
    const thought = document.querySelector('#thought-input').value;
    const email =  document.querySelector('#user-email-field').value;
    const word = this.props.wordToday;

    if (!thought || !email) return alert("Fill in all fields to submit");
    this.getOthers();
    Api.newRecord({
      email: email,
      word: word,
      thought: thought,
      lon: 0,
      lat: 0
    });
    this.setState({showOthers: true, others: []});
  }
  getOthers() {
    Api.othersFor(this.props.wordToday).then(response => {
      this.setState({others: [...this.state.others, response.thoughts]});
    });
  }
  render() {
    return(
      <div className="main">
        <h4>Word for today: <span className="wordToday">{this.props.wordToday}</span></h4>
         <div className="input-wrapper">
          <div className="user-inputs">
            <textarea id="thought-input" type="text" />
            <input id="user-email-field" type="text" />
            <button id="btn-submit" onClick={this.handleSubmit}>Submit</button>
            {
              this.state.showOthers ?
              <Others wordToday={this.props.wordToday} getOthers={this.state.others} /> : null
            }
          </div>
        </div>
      </div>
    );
  }
}
