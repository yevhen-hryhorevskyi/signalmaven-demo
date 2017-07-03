import React from "react";
import _ from "lodash";
import FilesList from "./FilesList";
import Button, {ButtonType} from "../common/Button";
import FileInfo from "../../_models/FileInfo";
import injectState from "../../_utils/decorators/injectState";
import {fileTypes, typesAccepted} from "../../_constants/fileTypes";
import {DownloadIcon} from "../../_constants/assetUrls";

class UploadForm extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            addedFiles: [],
            uploaded: false
        };

        this.onChooseFileBind = ::this.onChooseFile;
        this.onDragOverBind = ::this.onDragOver;
        this.onDropFileBind = ::this.onDropFile;
        this.addFileBind = ::this.addFile;
        this.loadFileBind = ::this.loadFile;
        this.resetLoadingBind = ::this.resetLoading;
        this.deleteItemBind = ::this.deleteItem;
    }

    onChooseFile(event) {
        const files = [...event.target.files];
        this.addFileBind(files);
    }

    onDragOver(event) {
        event.preventDefault();
    }

    onDropFile(event) {
        event.preventDefault();
        const files = [...event.dataTransfer.files];
        this.addFileBind(files);
    }

    addFile(files) {
        let newFiles = files.map(file => new FileInfo(file));
        newFiles = newFiles.filter(file => typesAccepted.includes(file.type));
        const {addedFiles} = this.state;
        const newAdded = _.differenceBy(newFiles, addedFiles, "name");
        this.setState({addedFiles: addedFiles.concat(newAdded)});
    }

    loadFile() {
        this.setState({uploaded: true});
    }

    resetLoading() {
        this.setState({addedFiles: []});
    }

    deleteItem(index) {
        const files = this.state.addedFiles;
        this.setState({addedFiles: files.filter(file => file.id !== index)});
    }

    @injectState
    render({addedFiles, uploaded}) {
        if (uploaded) {
            return <div className="upload-form">
                <div className="upload-form_success">Your files were uploaded.</div>
            </div>
        }

        const buttonText = `select ${(addedFiles.length > 0) ? "more files" : "file"}`;

        let illustrationSection = null;
        let buttonsSection = null;
        if (addedFiles.length === 0) {
            illustrationSection = <div className="upload-form__illustration">
                <img className="upload-form__logo" src={DownloadIcon} alt="download"/>
                <span className="upload-form_discription">drag & drop files here or</span>
            </div>
        } else {
            buttonsSection = <div className="upload-form_buttons">
                <Button type={ButtonType.PRIMARY} onClick={this.loadFileBind}>upload</Button>
                <Button type={ButtonType.SECONDARY} onClick={this.resetLoadingBind}>reset</Button>
            </div>
        }

        return <div className="upload-form">
            <div className="upload-form_drop-down-area" onDragOver={this.onDragOverBind} onDrop={this.onDropFileBind}>
                {illustrationSection}
                <FilesList files={addedFiles} onDeleteItem={this.deleteItemBind}/>
                <label className="upload-form_upload-button">{buttonText}
                    <input type="file" accept={fileTypes} multiple onChange={this.onChooseFileBind}></input>
                </label>
            </div>
            {buttonsSection}
        </div>
    }
}

export default UploadForm;
