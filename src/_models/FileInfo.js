import SequenceUtil from "./../_utils/SequenceUtil";

class FileInfo {
    constructor(file) {
        this.id = SequenceUtil.getNext();
        this.name = file.name;
        this.type = file.type;
    }
}

export default FileInfo;
