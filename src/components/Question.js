import React, {Component} from "react";
import Options from "./Option";

class Question extends Component {

    render() {
        const { question, selectedOption, onOptionChange, onSubmit } = this.props;

        return (
            <div className="">
                <h3>Question {question.id}</h3>
                <h5 className="mt-2">{question.question}</h5>
                <form className="mt-2 mb-2" onSubmit={onSubmit}>
                    <Options
                        options={question.options}
                        selectedOption={selectedOption}
                        onOptionChange={onOptionChange}
                    />
                    <button
                        type="submit"
                        className="btn btn-primary">SUBMIT</button>
                </form>
            </div>
        );
    }
}

export default Question;