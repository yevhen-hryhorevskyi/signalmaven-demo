import SequenceUtil from "./../_utils/SequenceUtil";


class QuestionInfo {
    constructor(question, answer) {
        this.id = SequenceUtil.getNext();
        this.question = question;
        this.answer = answer;
    }

    matchTerm(questionTerm) {
        const searchTermRegExp = new RegExp(`.*${questionTerm}.*`, "i");
        return this.question.search(searchTermRegExp) !== -1;
    }
}

export default QuestionInfo;