import styled from '@emotion/styled';

export const TransactionHistoryStyled = styled.table`
  width: 550px;
  font-family: 'Raleway';
  margin: 0 auto;
  margin-bottom: 70px;
  border-collapse: collapse;
  box-shadow: 10px 10px 13px -5px rgba(173,130,164,0.58);
`;

export const Table = styled.table`
 padding: 10px;
  border: 1px solid #2a2a2a;  
  color: white;
  background-color: #34ebe1;
`;

export const TableHead = styled.thead`
  padding: 10px;
  border: 1px solid #2a2a2a;  
  color: white;
  background-color: #34ebe1;
`;


export const TableBody = styled.tbody`
  padding: 10px;
text-align: center;
border: 1px solid #2a2a2a;
color: #C3C1C5;
&::first-letter {
  font-size: 32px;
}
`;


export const TableRow = styled.tr`
  &:nth-of-type(even) {
    background-color: #ecf1f4;
  }
`;


export const TableData = styled.td`
 padding: 10px;
text-align: center;
border: 1px solid #2a2a2a;
color: #C3C1C5;
`;


export const TableHeadData = styled.th`
  padding: 10px;
  text-align: center;
`;



