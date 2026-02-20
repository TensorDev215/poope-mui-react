import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#1F1F1F',
    color: "#6A6A6A",
    paddingTop: '8px',
    paddingBottom: '12px',
    fontSize: 14,
    border: 'none',
    ...theme.applyStyles('light', {
        backgroundColor: '#FFFFFF'
    })
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));


//  sx={
//             theme => ({
//                 backgroundColor: theme.palette.primary.light
//             })
//           }


        //   ...theme.applyStyles('light', {
        //     fill: 'url(#lightGradient)'
        //   })
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: '#191919',
    paddingTop: '8px',
    paddingBottom: '12px',
    fontSize: 14,
    borderBottom: 0,
    ...theme.applyStyles('light', {
        backgroundColor: '#FAF7F4'
    })
  },
   '&:nth-of-type(even)': {
    backgroundColor: '#1F1F1F',
    paddingTop: '8px',
    paddingBottom: '12px',
    fontSize: 14,
    borderBottom: 0,
    ...theme.applyStyles('light', {
        backgroundColor: '#FFFFFF'
    })
  },
  '& td': {
    borderBottom: 0
  },
  '&:last-child td, &:last-child th': {
     borderBottom: 0
  },
}));

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
    createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function HistoryTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 200 }} aria-label="customized table">
        <TableHead >
          {/* <TableRow sx={{
            backgroundColor: '#6A6A6A'
          }}> */}
          <StyledTableRow>
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell align="left">Type</StyledTableCell>
            <StyledTableCell align="left">Amount</StyledTableCell>
            <StyledTableCell align="right">Date</StyledTableCell>
            <StyledTableCell align="right">Status</StyledTableCell>
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell align="left">{row.name}</StyledTableCell>
              <StyledTableCell align="left">{row.calories}</StyledTableCell>
              <StyledTableCell align="left">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}