import { useEffect, useState } from 'react'

type FetchResult<T> = {
    data: T | null
    error: Error | null
    loading: boolean
}

export const getAuthHeader = (): Headers => {
    const token = localStorage.getItem('token')
    const headers = new Headers()

    if (!token) {
        throw new Error('No authentication token found')
    }

    // headers.append('Content-Type', `application/json`)
    headers.append('Authorization', `Bearer ${token}`)
    return headers
}

export const useDefaultFetch = <T>(url: string): FetchResult<T> => {
    const [data, setData] = useState<T | null>(null)
    const [error, setError] = useState<Error | null>(null)
    const [loading, setLoading] = useState<boolean>(true)
    const loadingDelay = 1500

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                const response = await fetch(url, {
                    method: 'GET',
                    headers: getAuthHeader()
                })

                if (!response.ok) {
                    throw new Error('Network response was not ok')
                }
                const result: T = await response.json()
                setData(result)
            } catch (err) {
                setError(err instanceof Error ? err : new Error('An unknown error occured'))
            } finally {
                setTimeout(() => {
                    setLoading(false)
                }, loadingDelay)
            }
        }

        fetchData()
    }, [url])

    return { data, error, loading }
}

