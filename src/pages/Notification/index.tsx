import * as React from 'react'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TablePagination from '@mui/material/TablePagination'
import TableRow from '@mui/material/TableRow'
import { useState, useEffect } from 'react'
import { TransactionPropsType } from '@/types'
import { getAuthHeader } from '@/hooks/useFetch'
import { shortenString } from '@/utils'
import { Loading } from '../Loading'
import { useToast } from '@/context/ToastContext'

const apiURI = process.env.REACT_API_URI

interface Column {
    id: 'id' | 'content'
    label: string
    minWidth?: number
    align?: 'right'
    format?: (value: string) => string
}

const columns: readonly Column[] = [
    { id: 'id', label: 'ID', minWidth: 100 },
    { id: 'content', label: 'CONTENT', minWidth: 200 }
]

interface NoitificationType {
    id: string
    content: string
}

const Notification = () => {
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<Error | null>(null)

    const {showToast} = useToast()

    const [notifications, setNotifications] = useState<NoitificationType[] | null>(null)

    const loadingDelay = 1500

    const fetchTransactions = async () => {
        setLoading(true)
        try {
            const response = await fetch(apiURI + '/api/history', {
                method: 'GET',
                headers: getAuthHeader()
            })

            if (!response.ok) {
                throw new Error('Network response was not ok')
            }
            const results: TransactionPropsType[] = await response.json()

            const convertedResult: NoitificationType[] = []

            results.map(result => {
                const content =
                    'This wallet' + ' ' + result.type + ' ' + result.amount + ' Poope' + ' on ' + result.date + '.'

                convertedResult.push({ id: shortenString(result.address), content: content })
            })

            setNotifications(convertedResult.reverse())
            showToast("Success! Your notifications were showed.", "success")
        } catch (err) {
            setError(err instanceof Error ? err : new Error('Failed to fetch transations'))
        } finally {
            setTimeout(() => {
                setLoading(false)
            }, loadingDelay)
        }
    }

    useEffect(() => {
        fetchTransactions()
    }, [])

    // if (loading) return <Loading />
    // if (error) return <p>Error: {error.message} </p>

    const [page, setPage] = React.useState(0)
    const [rowsPerPage, setRowsPerPage] = React.useState(10)

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage)
    }

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value)
        setPage(0)
    }

    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label='sticky table'>
                    <TableHead>
                        <TableRow>
                            {columns.map(column => (
                                <TableCell key={column.id} align={column.align} style={{ minWidth: column.minWidth }}>
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {notifications?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => {
                            return (
                                <TableRow hover role='checkbox' tabIndex={-1} key={row.id}>
                                    {columns.map(column => {
                                        const value = row[column.id]
                                        return (
                                            <TableCell key={column.id} align={column.align}>
                                                {column.format && typeof value === 'number'
                                                    ? column.format(value)
                                                    : value}
                                            </TableCell>
                                        )
                                    })}
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component='div'
                count={notifications?.length ?? 0}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    )
}

export default Notification
