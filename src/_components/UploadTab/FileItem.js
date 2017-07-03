import React from "react";
import PropTypes from "prop-types";
import ReactTooltip from "react-tooltip";
import injectProps from "./../../_utils/decorators/injectProps";
import {fileIcons} from "../../_constants/fileTypes";

class FileItem extends React.PureComponent {
    static propTypes = {
        file: PropTypes.object,
        id: PropTypes.number,
        onDeleteItemClick: PropTypes.func
    };

    constructor(props) {
        super(props);
        this.state = {
            showTip: true
        };

        this.checkIfShowTipBind = ::this.checkIfShowTip;
    }

    checkIfShowTip(event) {
        const element = event.target;
        if (element.offsetWidth >= element.scrollWidth) {
            this.setState({showTip: false});
        } else {
            this.setState({showTip: true});
        }
    }

    @injectProps
    render({file, id, onDeleteItemClick}) {
        return <div className="file">
            <div className="file-info">
                <img className="file-logo" src={fileIcons[file.type]} alt="extension"/>
                <span className="file-name" data-tip={this.state.showTip ? file.name : null}
                      onMouseOver={this.checkIfShowTipBind}>{file.name}</span>
            </div>
            <button className="file-delete" onClick={() => onDeleteItemClick(id)}/>
            <ReactTooltip type="info"/>
        </div>
    }
}

export default FileItem;
