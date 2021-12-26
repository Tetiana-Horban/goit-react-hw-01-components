import PropTypes from 'prop-types';
import styled from 'styled-components';

const Table = styled.table`
  width: 400px;
  margin: 50px auto 0;
  box-shadow: 0 10px 90px #00000024;
  text-align: center;
  font-size: 20px;
  padding: 20px;
  border: 15px solid #f2f8f8;
  border-top: 5px solid #f2f8f8;
  border-collapse: collapse;
`;
const TableTh = styled.th`
  font-weight: bold;
  padding: 5px;
  background: #f2f8f8;
  border: none;
  border-bottom: 5px solid #f2f8f8;
`;
const TableTd = styled.td`
  padding: 5px;
  border: none;
  border-bottom: 5px solid #f2f8f8;
`;

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
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <TableTd>{type}</TableTd>
            <TableTd>{amount}</TableTd>
            <TableTd>{currency}</TableTd>
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
