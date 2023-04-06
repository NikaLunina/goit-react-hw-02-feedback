import propTypes from 'prop-types';
import css from "./FeedbackButtons.module.css"

export const FeedbackButtons = ({options , onLeaveFeedback}) => (
<div>
    <ul className={css.list}>
        {options.map(option => (
        <li key={option}>
            <button type="button" className={css.button} onClick={() => onLeaveFeedback(option)}>
            {option}
            </button>
        </li>
        ))}
    </ul>
    </div>
)

FeedbackButtons.propTypes ={
    options: propTypes.arrayOf(propTypes.string).isRequired
}