import React, { ChangeEvent, useEffect, useState } from 'react'
import { Box, Stack, Typography, TextField, Button } from '@mui/material'
import ImageUploadBox from './components/ImageUploadBox'
import { colors } from '@/theme/themePrimitives'
import { getAuthHeader } from '@/hooks/useFetch'
import { ReceiveMessageType } from '@/types'
import { useToast } from '@/context/ToastContext'

const apiURI = process.env.REACT_API_URI

interface FormFieldProps {
    label: string
    value?: string
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
    name: string 
    disabled?: boolean
}


const FormField: React.FC<FormFieldProps> = ({ label, value, onChange, name, disabled }) => (
    <Box>
        <Typography variant='subtitle2' sx={{ mb: 1 }}>
            {label}
        </Typography>
        <TextField
            fullWidth
            variant='outlined'
            size='small'
            value={value}
            onChange={onChange}
            name={name} 
            disabled={disabled}
            sx={{
                '& .MuiInputBase-input': {
                    fontSize: '16px' 
                }
            }}
        />
    </Box>
)

interface fetchProfileTypes {
    name: string,
    email: string,
    image: string,
}

const Profile = () => {
    const address = localStorage.getItem('address')

    const {showToast} = useToast()

    const [data, setData] = useState<string>('')


    const [loading, setLoading] = useState<boolean>(false)
    const [err, setError] = useState<Error | null>(null)

    const [formData, setFormData] = useState({
        full_name: '',
        email: '',
        image: '',
    })

    const fetchProfile = async () => {
        setLoading(true)
        try {
            const response = await fetch(apiURI + '/api/get_user', {
                method: 'GET',
                headers: getAuthHeader()
            })

            if (!response.ok) {
                throw new Error('Network response was not ok')
            }
            const result: fetchProfileTypes = await response.json()

            setFormData({
                full_name: result.name,
                email: result.email,
                image: result.image
            })
            showToast("Success! Your profile info was downloaded.", "success")
        } catch (err) {
            setError(err instanceof Error ? err : new Error('Failed to fetch profile.'))
        } finally {
            setTimeout(() => {
                setLoading(false)
            }, 1500)
        }
    }

    useEffect(() => {
        fetchProfile()
    }, [])

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }))
    }

    const handleSave = async () => {
        setLoading(true)
        try {
            const response = await fetch(apiURI + '/api/user_info', {
                method: 'POST',
                headers: getAuthHeader(),
                body: JSON.stringify({name: formData.full_name, email: formData.email})
            })

            if (!response.ok) {
                throw new Error('Network response was not ok')
            }
            const result: ReceiveMessageType = await response.json()
            setData(result.message)
            showToast("Success! Your profile info was updated.", "success")
        } catch (err) {
            setError(err instanceof Error ? err : new Error('Failed to fetch profile.'))
        } finally {
            setTimeout(() => {
                setLoading(false)
            }, 1500)
        }
    }

    return (
        <Box
            sx={theme => ({
                padding: 3,
                backgroundColor: colors['dark'],

                ...theme.applyStyles('light', {
                    backgroundColor: colors['white'],
                })
            })}
        >
            <Stack spacing={2} sx={{ mb: 4 }}>
                <Typography variant='h5'>Account Info</Typography>
                <Typography variant='body2' color='textSecondary'>
                    Update your photo and personal details here.
                </Typography>
            </Stack>

            <Stack direction={{ xs: 'column', md: 'row' }} spacing={4}>
                <ImageUploadBox />

                <Stack spacing={3} flex='1'>
                    <FormField label='Address' value={address || undefined} onChange={handleChange} name='address' disabled={true} />
                    <FormField label='Full Name' value={formData.full_name} onChange={handleChange} name='full_name' />
                    <FormField label='Email' value={formData.email} onChange={handleChange} name='email'  />

                    <Button variant='contained' color='primary' onClick={handleSave} sx={{ alignSelf: 'flex-end' }}>
                        Save Changes
                    </Button>
                </Stack>
            </Stack>
        </Box>
    )
}

export default Profile
