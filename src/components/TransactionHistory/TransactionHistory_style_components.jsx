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
export { Table, TableTh, TableTd };
