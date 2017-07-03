import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import injectProps from "./../../_utils/decorators/injectProps";
import QuestionInfo from "./../../_models/QuestionInfo";

class SampleQuestions extends React.PureComponent {

    static propTypes = {
        questionInfoList: PropTypes.arrayOf(PropTypes.instanceOf(QuestionInfo)),
        onQuestionClicked: PropTypes.func
    };

    @injectProps
    render({questionInfoList, onQuestionClicked}) {
        const questionList = _.chain(questionInfoList)
            .sortBy(['id'])
            .map(questionInfo => {
                return <li className="sample-questions__question"
                           key={questionInfo.id}
                           onClick={() => onQuestionClicked(questionInfo)}>
                    {questionInfo.question}
                </li>
            })
            .value();

        return <div className="sample-questions">
            <h1 className="sample-questions__header">Sample Questions</h1>
            <ul className="sample-questions__questions-list">
                {questionList}
            </ul>
        </div>
    }
}

export default SampleQuestions;
