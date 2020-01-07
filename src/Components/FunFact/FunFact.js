import React from 'react';
import Numbersapi from '../../util/Numbersapi';
import './FunFact.css';

export default class FunFact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {fact: 'fact for today...'}
  }
  componentDidMount() {
    Numbersapi.fact().then(fact => {
      console.log('fact: ',fact)
      this.setState({fact: fact});
    });
  }
  render() {
    return(
      <div className="main-dev">

        <div className="funFact">
          <h5>Fun fact</h5>
          <p>{this.state.fact}</p>
        </div>
      </div>
    );
  }


}
