import React from "react";
import PropTypes from "prop-types";
import injectProps from "./../../_utils/decorators/injectProps";
import QuestionInfo from "./../../_models/QuestionInfo";

class QuestionInfoSection extends React.PureComponent {
    static propTypes = {
        questionInfo: PropTypes.arrayOf(PropTypes.instanceOf(QuestionInfo)),
        hidden: PropTypes.bool
    };

    @injectProps
    render({questionInfo, hidden}) {
        if (hidden || !questionInfo) {
            return null;
        }

        return <div className="question-info-section">
            <div className="question-info-section__question">{`${questionInfo.id + 1}) ${questionInfo.question}`}</div>
            <p className="question-info-section__answer" dangerouslySetInnerHTML={{__html: questionInfo.answer}}></p>
        </div>
    }
}

export default QuestionInfoSection;
