import PropTypes from 'prop-types';
import Statistics from '../Statistics/Statistics';
import data from '../Statistics/data.json';
import styled from 'styled-components';

const Section = styled.section`
  max-width: 400px;
  margin: 50px auto 0;
  background-color: white;
  box-shadow: 0 10px 90px #00000024;
  text-align: center;
  font-size: 20px;
  border-radius: 15px;
`;

const StatisticsTitle = ({ title }) => {
  return (
    <Section>
      {title && <h2 className="title">{title}</h2>}
      <Statistics stats={data} />
    </Section>
  );
};

StatisticsTitle.propTypes = {
  title: PropTypes.string,
};
export default StatisticsTitle;
