import { StatisticsItem } from "./StatisticsItem/StatisticsItem"
import PropTypes from 'prop-types'

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return  (
        <>  
            <h2>Statistics</h2>
            {total ? <ul>
                <StatisticsItem title="Good" value={good}/>
                <StatisticsItem title="Neutral" value={neutral}/>
                <StatisticsItem title="Bad" value={bad}/>
                <StatisticsItem title="Total" value={total}/>
                <StatisticsItem title="Positive feedback" value={(positivePercentage ? positivePercentage : 0) + '%'}/>
            </ul> : 'No feedback given'}
        </>
    )
}

Statistics.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positivePercentage: PropTypes.number,
}