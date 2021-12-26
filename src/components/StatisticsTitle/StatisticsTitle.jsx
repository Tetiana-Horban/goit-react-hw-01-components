import PropTypes from 'prop-types';
import Statistics from '../Statistics/Statistics';
import data from '../Statistics/data.json';
import Section from './StatisticsTitle_style_components';

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
