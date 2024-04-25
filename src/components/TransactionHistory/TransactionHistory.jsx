import PropTypes from 'prop-types';
import { TransactionHistoryStyled, Table, TableHead, TableBody, TableRow, TableData, TableHeadData } from './transactionHistory.styled';

export default function TransactionHistory ({ transactions }) {
  return (
    <TransactionHistoryStyled>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeadData>Type</TableHeadData>
            <TableHeadData>Amount</TableHeadData>
            <TableHeadData>Currency</TableHeadData>
          </TableRow>
        </TableHead>
        <TableBody>
          {transactions.map(transaction => (
            <TableRow key={transaction.id}>
              <TableData>{transaction.type}</TableData>
              <TableData>{transaction.amount}</TableData>
              <TableData>{transaction.currency}</TableData>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TransactionHistoryStyled>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(PropTypes.object).isRequired,
};



