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
export { StatsPercentage, StatsLabel, StatsItem, StatsList };
