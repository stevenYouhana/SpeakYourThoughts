import React from 'react';
import Thought from '../Thought/Thought';


export default class Others extends React.Component {
  constructor(props) {
    super(props);
    this.state = {thoughts:
      ["my thought on the word",
      "I think it's that",
      "in my opinion that's that",
      "never thought og that word before actually!"
    ],
    others: []
    }
      this.renderFakeThoughts = this.renderFakeThoughts.bind(this);
  }
  renderFakeThoughts() {
    // return this.state.thoughts.map((thought, i) => {
    //   return <Thought key={i} thought={thought} />
    // });
    this.others();
  }
  others = () => {
    fetch('/others').then(response => response.text())
      .then(textResponse => {
        console.log('textResponse: ', textResponse);
        this.setState({others: [textResponse]});
      });
  }
  render() {
    return(
      <div>
      <h3>Here is what others thought of <span id="wordToday">{this.props.wordToday}</span></h3>
        {this.renderFakeThoughts()}
        {this.state.others}
      </div>
    );
  }
}
