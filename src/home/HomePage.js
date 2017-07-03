import React, {Component} from "react";
import injectState from "../_utils/decorators/injectState";
import QuestionsTab from "../_components/QuestionsTab/QuestionsTab";
import UploadTab from "../_components/UploadTab/UploadTab";

const TabEnum = {
    QUESTIONS: 'QUESTIONS',
    FILE_UPLOAD: 'FILE_UPLOAD'
};

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTab: TabEnum.QUESTIONS
        }
    }

    onTabClicked(tab) {
        this.setState({currentTab: tab});
    }

    getTabContentComponent(tab) {
        if (tab === TabEnum.QUESTIONS) {
            return <QuestionsTab />;
        }

        if (tab === TabEnum.FILE_UPLOAD) {
            return <UploadTab />;
        }

        return null;
    }

    @injectState
    render({currentTab}) {
        const selectedTabContent = this.getTabContentComponent(currentTab);

        return <div className="home-page">
            <div className="home-page__content">
                <div className="home-page__tabs">
                    <ul className="home-page__tab-list">
                        <li className={`home-page__tab ${currentTab === TabEnum.QUESTIONS ? "selected-tab" : ""}`}
                            onClick={() => ::this.onTabClicked(TabEnum.QUESTIONS)}>
                            Troubleshooting Questions
                        </li>
                        <li className={`home-page__tab ${currentTab === TabEnum.FILE_UPLOAD ? "selected-tab" : ""}`}
                            onClick={() => ::this.onTabClicked(TabEnum.FILE_UPLOAD)}>
                            Upload Manual
                        </li>
                    </ul>
                </div>
                <div className="home-page__tab-content">
                    {selectedTabContent}
                </div>
            </div>
        </div>
    }
}

export default HomePage;
