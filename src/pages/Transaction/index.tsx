import HistoryTable from '@/views/Transaction/HistoryTable'
import { SwapBox } from '@/views/Transaction/SwapBox'

import { Stack } from '@mui/material'
import { useEffect, useState } from 'react'
import { TransactionPropsType } from '@/types'
import { getAuthHeader } from '@/hooks/useFetch'
import { Loading } from '../Loading'
import { useToast } from '@/context/ToastContext'

const apiURI = process.env.REACT_API_URI

const Transaction = () => {
    const [transactions, setTransactions] = useState<TransactionPropsType[] | null>(null)
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<Error | null>(null)

    const { showToast } = useToast()

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
            const result: TransactionPropsType[] = await response.json()
            setTransactions(result)
            showToast('Success! Your transactions were showed.', 'success')
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

    const handleTransactionCompleted = async () => {
        fetchTransactions()
    }

    if (loading) return <Loading />
    if (error) return <p>Error: {error.message} </p>

    return (
        <Stack
            direction={{ lg: 'row', xs: 'column' }}
            justifyContent='space-between'
            spacing={4}
            alignItems='flex-start'
        >
            <HistoryTable transactions={transactions} loading={loading} error={error} />
            <SwapBox onTransactionComplted={handleTransactionCompleted} />
        </Stack>
    )
}

export default Transaction
