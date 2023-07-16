import css from 'components/statistics/statistics.module.css'

const Statistics = ({ good, neutral, bad, total = 0, positivOption = 0 }) => {
    if (good !== 0 || neutral !== 0 || bad !== 0) {
        return (
            <div>
                <ul>
                    <li className={css.item}>Good: {good}</li>
                    <li className={css.item}>Neutral: {neutral}</li>
                    <li className={css.item}>Bad: {bad}</li>
                    <li className={css.item}>Total: {total}</li>
                    <li className={css.item}>Positive feedback: {positivOption} %</li>
                </ul>
            </div>
        )
    } else {
        return (
            <p className={css.text}>No feedback given</p>
        )
    }
}

export default Statistics;