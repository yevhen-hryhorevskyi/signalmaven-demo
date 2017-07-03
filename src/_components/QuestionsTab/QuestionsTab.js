import React from "react";
import injectState from "../../_utils/decorators/injectState";
import questionInfoList from "../../data";
import SearchResults from "./SearchResults";
import QuestionInfoSection from "./QuestionInfoSection";
import SampleQuestions from "./SampleQuestions";
import SearchBar from "./SearchBar";
import {RoboticArm} from "./../../_constants/assetUrls";

class QuestionsTab extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            matchedQuestionInfoList: null,
            selectedQuestion: null
        };

        this.onSearchQuestionTermBind = ::this.onSearchQuestionTerm;
        this.onQuestionClickedBind = ::this.onQuestionClicked;
    }

    onQuestionClicked(questionInfo) {
        this.setState({matchedQuestionInfoList: null, selectedQuestion: questionInfo})
    }

    onSearchQuestionTerm(questionTerm) {
        const matchedQuestionList = questionInfoList.filter(questionInfo => questionInfo.matchTerm(questionTerm));
        this.setState({matchedQuestionInfoList: matchedQuestionList, selectedQuestion: null});
    }

    @injectState
    render({selectedQuestion, matchedQuestionInfoList}) {
        const hideQuestionInfoSection = selectedQuestion === null;
        const hideSearchResults = !hideQuestionInfoSection || matchedQuestionInfoList === null;
        const showImagesSection = hideQuestionInfoSection && hideSearchResults;

        let imagesSection = null;
        if (showImagesSection) {
            imagesSection = <div className="questions-tab__pictures">
                <img className="questions-tab__robotic-arm" src={RoboticArm} alt="arm"/>
            </div>
        }

        return <div className="questions-tab">
            <div className="questions-tab__search">
                {imagesSection}
                <SearchBar onSearchTerm={this.onSearchQuestionTermBind}/>
                <SearchResults matchedQuestionInfoList={matchedQuestionInfoList}
                               hidden={hideSearchResults}
                               onQuestionClicked={this.onQuestionClickedBind}
                />
                <QuestionInfoSection hidden={hideQuestionInfoSection} questionInfo={selectedQuestion}/>
            </div>
            <div className="questions-tab__sample-questions">
                <SampleQuestions questionInfoList={questionInfoList} onQuestionClicked={this.onQuestionClickedBind}/>
            </div>
        </div>
    }
}

export default QuestionsTab;
