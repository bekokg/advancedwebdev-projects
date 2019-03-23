import React, { Component } from 'react';
import FlagQuestion, {questionStates} from './FlagQuestion';
import shuffle from 'shuffle-array';

class FlagGame extends Component {
  constructor() {
    super();
    this.state = {
      countries: [],
      options: [],
      correctOption: undefined,
      questionState: undefined
    }
  }

  componentDidMount() {
    const url = 'https://restcountries.eu/rest/v2/all';
    fetch(url)
    .then(response => response.json())
    .then(countries => {
      const correctOption = Math.floor(Math.random() * countries.length);
      const options = this.getOptions(correctOption, countries);

      this.setState({
        countries,
        correctOption,
        options,
        questionState: questionStates.QUESTION
      });
    })
    .catch(console.warn)
  }

  onGuess = answer => {
    const {correctOption} = this.state;
    let questionState = answer === correctOption?questionStates.ANSWER_CORRECT: questionStates.ANSWER_WRONG;
    this.setState({questionState});
  }

  nextQuestion = () => {
    const {countries} = this.state;
    const correctOption = Math.floor(Math.random() * countries.length);
    const options = this.getOptions(correctOption, countries);

    this.setState({
      correctOption,
      options,
      questionState: questionStates.QUESTION
    });
  } 

  getOptions = (correctOption, countries) => {
    let options = [correctOption];
    let tries = 0;
    while(options.length < 4 && tries < 15) {
      let option = Math.floor(Math.random() * countries.length);
      if(options.indexOf(option) === -1) {
        options.push(option);
      } else {
        tries++;
      }
    }
    return shuffle(options);
  }
  
  render() {
    let {countries, options, correctOption, questionState} = this.state;
    let views = <div>Loading...</div>;
    if(correctOption !== undefined) {
      const {name, flag} = countries[correctOption];
      let opts = options.map(opt => {
        return {
          id: opt,
          name: countries[opt].name
        }
      });
      views = (
        <FlagQuestion 
         answerText={name}
         onGuess={this.onGuess}
         onNext={this.nextQuestion}
         options={opts}
         questionState={questionState}
         flag={flag}/>
        )
    }
    return (
      <div style={{marginTop: '15px'}}>
        {views}
      </div>
    );
  }
}

export default FlagGame;
