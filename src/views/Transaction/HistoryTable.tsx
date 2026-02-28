import { styled } from '@mui/material/styles'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { TransactionPropsType } from '@/types'
import { shortenString } from '@/utils'
import { Loading } from '@/pages'

interface HistoryTableProps {
    transactions: TransactionPropsType[] | null
    loading: boolean
    error: Error | null
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: '#1F1F1F',
        color: '#6A6A6A',
        paddingTop: '8px',
        paddingBottom: '12px',
        fontSize: 14,
        border: 'none',
        ...theme.applyStyles('light', {
            backgroundColor: '#FFFFFF'
        })
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14
    }
}))

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
    }
}))

const HistoryTable = ({ transactions, loading, error }: HistoryTableProps) => {
    if (loading) return <Loading />
    if (error) return <p>Error: {error.message} </p>

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 200 }} aria-label='customized table'>
                <TableHead>
                    <StyledTableRow>
                        <StyledTableCell>Address</StyledTableCell>
                        <StyledTableCell align='left'>Amount</StyledTableCell>
                        <StyledTableCell align='left'>Date</StyledTableCell>
                        <StyledTableCell align='right'>Type</StyledTableCell>
                        <StyledTableCell align='right'>Status</StyledTableCell>
                    </StyledTableRow>
                </TableHead>
                <TableBody>
                    {transactions?.map(transaction => (
                        <StyledTableRow key={transaction.id}>
                            <StyledTableCell align='left'>{shortenString(transaction.address)}</StyledTableCell>
                            <StyledTableCell align='left'>{transaction.amount}</StyledTableCell>
                            <StyledTableCell align='left'>{transaction.date}</StyledTableCell>
                            <StyledTableCell align='right'>{transaction.type}</StyledTableCell>
                            <StyledTableCell align='right'>Completed</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default HistoryTable
