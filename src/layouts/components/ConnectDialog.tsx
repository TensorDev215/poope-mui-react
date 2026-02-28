import Dialog from '@mui/material/Dialog'
import { Button, DialogContent, DialogTitle, IconButton, Stack, Typography } from '@mui/material'
import { IoMdClose } from 'react-icons/io'
import { Adapter } from '@solana/wallet-adapter-base'
import { useWallet } from '@solana/wallet-adapter-react'

export interface ConnectDialogProps {
    open: boolean
    onClose: () => void
}

const desiredWalletNames: string[] = ['Phantom', 'Solflare', 'Coinbase Wallet', 'WalletConnect']

function ConnectDialog(props: ConnectDialogProps) {
    const { onClose, open } = props

    const { wallets, select } = useWallet()

    const handleClose = () => {
        onClose()
    }

    const handleConnect = (adapter: Adapter): void => {
        if (adapter.readyState === 'NotDetected') {
            window.open(adapter.url)
        } else {
            select(adapter.name)
            onClose()
        }
    }

    return (
        <Dialog onClose={handleClose} open={open} fullWidth={false}>
            <DialogTitle sx={{ paddingTop: '16px', paddingBottom: '16px', position: 'relative' }} component={'div'}>
                <Typography variant='subtitle1' textAlign='center'>
                    Connect to your <br /> Solana Wallet
                </Typography>

                <IconButton
                    onClick={handleClose}
                    sx={{
                        position: 'absolute',
                        right: 10,
                        top: 10,
                        p: 0,
                        border: 'none',
                        borderRadius: 0
                    }}
                >
                    <IoMdClose size={24} />
                </IconButton>
            </DialogTitle>
            <DialogContent sx={{ width: '20rem' }}>
                <Stack spacing={1}>
                    {wallets
                        .filter(wallet => desiredWalletNames.includes(wallet.adapter.name))
                        .map((wallet, idx) => (
                            <Button
                                key={idx + wallet.adapter.name}
                                onClick={() => handleConnect(wallet.adapter)}
                                variant='outlined'
                                color='primary'
                                startIcon={<img width={25} src={wallet.adapter.icon} alt={wallet.adapter.name} />}
                            >
                                {wallet.adapter.name}
                            </Button>
                        ))}
                </Stack>
            </DialogContent>
        </Dialog>
    )
}

export default ConnectDialog
