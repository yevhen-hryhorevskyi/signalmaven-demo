import PropTypes from "prop-types";

export function createQuestionInfoShape() {
    return PropTypes.shape({
        id: PropTypes.number.isRequired,
        question: PropTypes.string.isRequired,
        answer: PropTypes.string.isRequired
    })
}