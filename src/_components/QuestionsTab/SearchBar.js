import React from "react";
import PropTypes from "prop-types";
import injectState from "../../_utils/decorators/injectState";
import Button, {ButtonType} from "../common/Button";

const ENTER_CODE = 13;

class SearchBar extends React.PureComponent {
    static propTypes = {
        onSearchTerm: PropTypes.func
    };

    constructor(props) {
        super(props);
        this.state = {
            questionInput: ""
        }
    }

    onInputKeyUp(event) {
        if (event.keyCode == ENTER_CODE) {
            this.onSearchTerm();
        }
    }

    onInputChange(event) {
        this.setState({questionInput: event.target.value});
    }

    onSearchTerm() {
        const trimmedQuestion = this.state.questionInput ? this.state.questionInput.trim() : "";
        if (trimmedQuestion) {
            this.props.onSearchTerm(trimmedQuestion);
        }
    }

    @injectState
    render({questionInput}) {

        return <div className="search-bar">
            <input className="search-bar__input"
                   placeholder="Enter Question..."
                   value={questionInput}
                   onKeyUp={::this.onInputKeyUp}
                   onChange={::this.onInputChange}
            />
            <Button type={ButtonType.PRIMARY} onClick={::this.onSearchTerm}>search</Button>
        </div>
    }
}

export default SearchBar;
