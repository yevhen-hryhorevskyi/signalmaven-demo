import React from "react";
import PropTypes from "prop-types";
import injectProps from "./../../_utils/decorators/injectProps";
import FileItem from "./FileItem";

class FilesList extends React.PureComponent {
    static propTypes = {
        files: PropTypes.array,
        onDeleteItem: PropTypes.func
    };

    @injectProps
    render({files, onDeleteItem}) {
        const filesList = files.map(file => <FileItem file={file} id={file.id} onDeleteItemClick={onDeleteItem}/>);

        return <div className="files-list">
            {filesList}
        </div>
    }
}

export default FilesList;
