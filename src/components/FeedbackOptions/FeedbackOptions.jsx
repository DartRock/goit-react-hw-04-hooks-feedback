import PropTypes from 'prop-types'

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    
    return (
        <div>
            {Object.keys(options).map((option) => (
                <button
                key={option}
                type="button"
                onClick={() => onLeaveFeedback(option)}
                >
                {option}
                </button>
            ))}
        </div>
    )
}

FeedbackOptions.propTypes = {
    option: PropTypes.object,
    onLeaveFeedback: PropTypes.func
}