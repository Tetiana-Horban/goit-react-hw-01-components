import PropTypes from 'prop-types';
import styled from 'styled-components';
import { getRandomHexColor } from '../../helpers/getRandomColor';

const StatsList = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
`;
const StatsItem = styled.li(
  () => `
display: flex;
flex-direction: column;
padding: 10px;
width: 100%;
background-color: ${getRandomHexColor()};
`,
);
const StatsLabel = styled.span`
  margin-bottom: 10px;
`;
const StatsPercentage = styled.span`
  font-size: 30px;
`;

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
