import React, { useRef, useState } from 'react';
import { Box, Stack, Button } from '@mui/material';
import { Upload, Delete } from '@mui/icons-material';

const DEFAULT_IMAGE = "/assets/images/avatar.png";

const ImageUploadBox: React.FC = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [image, setImage] = useState<string>(DEFAULT_IMAGE);

  const handleSelectFile = () => {
    fileInputRef.current?.click();
  };

  const handlefileUpload = () => {
    
  }

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const imageUrl = URL.createObjectURL(file);
    setImage(imageUrl);
  };

  const handleDelete = () => {
    setImage(DEFAULT_IMAGE);
  };

  return (
    <Box
      sx={{
        maxWidth: 320,
        border: '1px dashed #ccc',
        borderRadius: 2,
        p: 3,
        textAlign: 'center',
      }}
    >
      <Box
        component="img"
        src={image}
        alt="Profile"
        onClick={handleSelectFile}
        sx={{
          maxWidth: 200,
          maxHeight: 200,
          borderRadius: '50%',  // 🔥 Makes it rounded
          objectFit: 'cover',
          cursor: 'pointer',
          mx: 'auto',
          display: 'block',
          mb: 3,
        }}
      />

      <Stack direction="row" spacing={2} justifyContent="center">
        <Button
          variant="contained"
          startIcon={<Upload />}
          onClick={handlefileUpload}
        >
          Upload
        </Button>

        <Button
          variant="outlined"
          color="error"
          startIcon={<Delete />}
          onClick={handleDelete}
        >
          Delete
        </Button>
      </Stack>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        hidden
        onChange={handleImageUpload}
      />
    </Box>
  );
};

export default ImageUploadBox;