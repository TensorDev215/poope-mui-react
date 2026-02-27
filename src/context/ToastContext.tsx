import React, {createContext, useState, useContext, ReactNode} from "react"
import Toast from "@/components/Toast"
import { AlertColor } from "@mui/material"

interface ToastType {
    message: string,
    severity: AlertColor,
    open?: boolean,
    onClose?: () => void
}

interface ToastContextType {
  showToast: (message: string, severity?: AlertColor) => void;
}


const ToastContext = createContext<ToastContextType>({
    showToast: () => {}
})

export const useToast = () => {
    return useContext(ToastContext)
}


export const ToastProvider: React.FC<{children: ReactNode }> = ({ children }) => {
    const [toast, setToast] = useState<ToastType>({message: "", severity: 'success', open: false})

    const showToast  = (message: string, severity: AlertColor = 'success') => {
        setToast({ message, severity, open: true, onClose: () => setToast((prev) => ({ ...prev, open: false}))}) 
    }

    const hideToast = () => {
        setToast((prev) => ({ ...prev, open: false}))
    }

    return (
        <ToastContext.Provider value={{ showToast }}>
            {children}
            <Toast
                message={toast.message}
                severity={toast.severity}
                open={toast.open}
                onClose={hideToast}
            />
        </ToastContext.Provider>
    )
}