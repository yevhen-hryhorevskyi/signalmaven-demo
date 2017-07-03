import React, {Component} from "react";
import UploadForm from "./UploadForm";
import {PdfIcon, DocIcon, TxtIcon} from "../../_constants/assetUrls";

class UploadTab extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="upload-tab">
                <UploadForm />
                <div className="upload-tab__info">
                    <p className="upload-tab__details">Currently supports .pdf, .docx, .doc & .txt files</p>
                    <div className="upload-tab__icons">
                        <img className="upload-tab__icon" src={PdfIcon} alt="pdf"/>
                        <img className="upload-tab__icon" src={DocIcon} alt="doc"/>
                        <img className="upload-tab__icon upload-tab__icon_txt" src={TxtIcon} alt="txt"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default UploadTab;
