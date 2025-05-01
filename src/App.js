import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Question from './components/Question';
import Score from './components/Score';
import qBank from './components/QuestionBank';
import './App.css';


class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      questionBank: qBank,
      score: 0,
      currentQuestion: 0,
      selectedOption: '',
      quizEnd: false,
    };
  }

  handleOptionChange = (e) => {
    this.setState({
      selectedOption: e.target.value,
    });
  }  

  handleFormSubmit = (e) => {
    e.preventDefault();
    this.checkAnswer();
    this.handleNextQuestion();
  }

  checkAnswer = () => {
    const { questionBank, currentQuestion, selectedOption, score } = this.state;
    if (selectedOption === questionBank[currentQuestion].answer) {
      this.setState((prevState) => ({
        score: prevState.score + 1
      }));
    }
  }

  handleNextQuestion = () => {
    const { currentQuestion, questionBank } = this.state;
    if (currentQuestion < questionBank.length - 1) {
      this.setState((prevState) => ({
        currentQuestion: prevState.currentQuestion + 1,
        selectedOption: '',
      }));  
    } else {
      this.setState({ quizEnd: true });
    }
  }

  render() {

    const { questionBank, score, currentQuestion, selectedOption, quizEnd } = this.state;

    return (
      <div className="App d-flex flex-column align-items-center justify-content-center vh-100">
        <h1 className="mb-4">Quiz App</h1>
        {quizEnd ? (
          <Score 
            score={score} 
            onNextQuestion={this.handleNextQuestion}
            className="score"    
          />
        ) : (
          <Question
            question={questionBank[currentQuestion]}
            selectedOption={selectedOption}
            onOptionChange={this.handleOptionChange}
            onSubmit={this.handleFormSubmit}
          />
        )}
      </div>
    );
  }
 
}

export default App;
