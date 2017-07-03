import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import injectProps from "./../../_utils/decorators/injectProps";
import QuestionInfo from "./../../_models/QuestionInfo";

class SearchResults extends React.PureComponent {
    static propTypes = {
        hidden: PropTypes.bool,
        matchedQuestionInfoList: PropTypes.arrayOf(PropTypes.instanceOf(QuestionInfo)),

        onQuestionClicked: PropTypes.func
    };

    @injectProps
    render({hidden, matchedQuestionInfoList, onQuestionClicked}) {
        if (hidden || !matchedQuestionInfoList) {
            return null;
        }

        if (!matchedQuestionInfoList.length) {
            return <div className="search-result-list no-data">
                No questions found.<br/>
                Please select one from the sample list.
            </div>
        }

        const matchedQuestionList = _.chain(matchedQuestionInfoList)
            .sortBy(['id'])
            .map(questionInfo => {
                const label = `${questionInfo.id + 1}. ${questionInfo.question}`;
                return <div className="search-result-list__item"
                            key={questionInfo.id}
                            onClick={() => onQuestionClicked(questionInfo)}>
                    {label}
                </div>
            })
            .value();

        return <div className="search-result-list">
            <p className="search-result-list__help">Click on the right question</p>
            {matchedQuestionList}
        </div>
    }
}

export default SearchResults;
