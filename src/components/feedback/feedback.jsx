import { CiFaceFrown, CiFaceMeh, CiFaceSmile } from 'react-icons/ci';
import css from 'components/feedback/feedback.module.css'
import { nanoid } from 'nanoid';

const FeedbackOptions = ({ onLeaveFeedback, options }) => {
    return (
        <div className={css.wrapper}>
            {options.map(option => {
                const btnId = nanoid();
                return (
                    <button className={css.btn} key={btnId} type="button" onClick={() => onLeaveFeedback(option)}>
                        {option === 'good' && <CiFaceSmile />}{option === 'neutral' && <CiFaceMeh />}{option === 'bad' && <CiFaceFrown />}
                        <span>{option}</span>
                    </button>
                )
            })}
        </div>
    );
}

export default FeedbackOptions;