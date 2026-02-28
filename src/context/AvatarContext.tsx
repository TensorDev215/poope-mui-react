import React, { createContext, useState, ReactNode, useContext, useEffect } from 'react'

interface AvatarContextType {
    avatarUrl: string
    setAvatarUrl: (url: string) => void
}

const AvatarContext = createContext<AvatarContextType | undefined>(undefined)

export const AvatarProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const storedAvatar = localStorage.getItem('image') || '/assets/images/avatar.png'
    const [avatarUrl, setAvatarUrl] = useState<string>(storedAvatar)

    useEffect(() => {
        localStorage.setItem('image', avatarUrl)
    }, [avatarUrl])

    return <AvatarContext.Provider value={{ avatarUrl, setAvatarUrl }}>{children}</AvatarContext.Provider>
}

export const useAvatar = (): AvatarContextType => {
    const context = useContext(AvatarContext)
    if (!context) {
        throw new Error('useAvatar must be uesd within an AvatarProvider')
    }
    
return context
}
