import React from 'react';
import Others from '../Others/Others';
import './WordToday.css';
import background from './background.jpg'

export default class WordToday extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showOthers: false}
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit() {
    console.log("handleSubmit()");
    this.setState({showOthers: true});

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
              <Others wordToday={this.props.wordToday} /> : null
            }
          </div>
        </div>
      </div>
    );
  }
}
