import React from 'react';
import './App.css';
import Header from '../Header/Header';
import WordToday from '../WordToday/WordToday';
import FunFact from '../FunFact/FunFact';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {words: ["sky","heaven","earth","us","you"]}
    this.wordToday = this.wordToday.bind(this);
  }
  wordToday() {
    let ran = Math.floor(Math.random() * Math.floor(this.state.words.length));    
    return this.state.words[ran];
  }
  render() {
    return (
      <div className="App">
        <Header />
        <WordToday wordToday={this.wordToday()} />
        <FunFact />
      </div>
    );
  }
}

export default App;
