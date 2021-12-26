import { Table, TableTh, TableTd } from './TransactionHistory_style_components';
import PropTypes from 'prop-types';

const TransactionHistory = ({ items }) => {
  return (
    <Table className="transaction-history">
      <thead>
        <tr>
          <TableTh>Type</TableTh>
          <TableTh>Amount</TableTh>
          <TableTh>Currency</TableTh>
        </tr>
      </thead>
      <tbody>
        {items.map(item => (
          <tr key={item.id}>
            <TableTd>{item.type}</TableTd>
            <TableTd>{item.amount}</TableTd>
            <TableTd>{item.currency}</TableTd>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ),
};

export default TransactionHistory;
