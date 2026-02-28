import { Snackbar, Alert, AlertColor } from '@mui/material'

interface ToastType {
    message: string
    severity: AlertColor
    open?: boolean
    onClose?: () => void
}

const Toast: React.FC<ToastType> = ({ message, severity = 'success', open, onClose }) => {
    return (
        <Snackbar
            open={open}
            autoHideDuration={1000}
            onClose={onClose}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        >
            <Alert
                onClose={onClose}
                severity={severity}
                sx={{
                    width: '100%',
                    padding: '16px',
                    borderRadius: '8px',
                    fontSize: '16px'
                }}
            >
                {message}
            </Alert>
        </Snackbar>
    )
}

export default Toast
