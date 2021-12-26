import PropTypes from 'prop-types';
import {
  StatsPercentage,
  StatsLabel,
  StatsItem,
  StatsList,
} from './Statistics_style_components';

const Statistics = ({ stats }) => {
  return (
    <StatsList>
      {stats.map(statsValue => (
        <StatsItem key={statsValue.id}>
          <StatsLabel>{statsValue.label}</StatsLabel>
          <StatsPercentage>{statsValue.percentage}%</StatsPercentage>
        </StatsItem>
      ))}
    </StatsList>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};

export default Statistics;
