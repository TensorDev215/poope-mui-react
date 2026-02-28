import React, { useRef, useState } from 'react'
import { Box, Stack, Button } from '@mui/material'
import { Upload, Delete } from '@mui/icons-material'
import { useAvatar } from '@/context/AvatarContext'
import { useToast } from '@/context/ToastContext'

const apiURI = process.env.REACT_API_URI

const getImageAuthHeader = (): Headers => {
    const token = localStorage.getItem('token')
    const headers = new Headers()

    if (!token) {
        throw new Error('No authentication token found')
    }

    headers.append('Authorization', `Bearer ${token}`)
    
return headers
}

const ImageUploadBox: React.FC = () => {
    const fileInputRef = useRef<HTMLInputElement | null>(null)
    const { avatarUrl, setAvatarUrl } = useAvatar()
    const [image, setImage] = useState<string>(avatarUrl)

    const { showToast } = useToast()

    const [file, setFile] = useState<File | undefined>(undefined)

    const handleSelectFile = () => {
        fileInputRef.current?.click()
    }

    const handlefileUpload = async () => {
        if (!file) return

        const formData = new FormData()
        formData.append('file', file)

        try {
            const response = await fetch(apiURI + '/api/upload', {
                method: 'POST',
                headers: getImageAuthHeader(),
                body: formData
            })

            if (response.ok) {
                const data = await response.json()
                showToast('Success! Your avatar was updated.', 'success')
                localStorage.setItem('image', data.filename)
                setAvatarUrl(`${process.env.REACT_API_URI}/static/uploads/${data.filename}`)
            } else {
                showToast('Error! Your avatar was not updated.', 'error')
            }
        } catch (error) {
            console.error('Error during upload:', error)
        }
    }

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const image_file = event.target.files?.[0]

        if (image_file) {
            setFile(image_file)
            const imageUrl = URL.createObjectURL(image_file)
            setImage(imageUrl)
        }
    }

    const handleDelete = () => {
        // const storedImage = localStorage.getItem('image')
        // if (storedImage) {
        //     setAvatarUrl(`${process.env.REACT_API_URI}/static/uploads/${storedImage}`)
        // }
        setFile(undefined)
    }

    return (
        <Box
            sx={{
                maxWidth: 320,
                border: '1px dashed #ccc',
                borderRadius: 2,
                p: 3,
                textAlign: 'center'
            }}
        >
            <Box
                component='img'
                src={image}
                alt='Profile'
                onClick={handleSelectFile}
                sx={{
                    maxWidth: 200,
                    maxHeight: 200,
                    borderRadius: '50%', // 🔥 Makes it rounded
                    objectFit: 'cover',
                    cursor: 'pointer',
                    mx: 'auto',
                    display: 'block',
                    mb: 3
                }}
            />

            <Stack direction='row' spacing={2} justifyContent='center'>
                <Button variant='contained' startIcon={<Upload />} onClick={handlefileUpload}>
                    Upload
                </Button>

                <Button variant='outlined' color='error' startIcon={<Delete />} onClick={handleDelete}>
                    Delete
                </Button>
            </Stack>

            <input ref={fileInputRef} type='file' accept='image/*' hidden onChange={handleImageUpload} />
        </Box>
    )
}

export default ImageUploadBox
