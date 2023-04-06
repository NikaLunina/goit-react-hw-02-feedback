import propTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({ good, neutral, bad, total, positivefeedback }) => (
  <ul className={css.statisticslist}>
    <li className={css.item}>Good:{good}</li>
    <li className={css.item}>Neutral:{neutral}</li>
    <li className={css.item}>Bad:{bad}</li>
    <li className={css.item}>total:{total}</li>
    <li className={css.item}>Positivefeedback:{positivefeedback}%</li>
  </ul>
);

Statistics.propTypes = {
  good: propTypes.number.isRequired,
  neutral: propTypes.number.isRequired,
  bad: propTypes.number.isRequired,
  total: propTypes.number.isRequired,
  positivefeedback: propTypes.number.isRequired,
};
