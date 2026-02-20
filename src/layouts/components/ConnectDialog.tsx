import Dialog from '@mui/material/Dialog'
import { ROUTES, WalletButtonList } from '@/constants'
import { Button, DialogContent, DialogTitle, IconButton, Link, Stack, Typography, Box } from '@mui/material'
import { IoMdClose } from 'react-icons/io'
import { Adapter } from '@solana/wallet-adapter-base'
import { useWallet } from '@solana/wallet-adapter-react'

const wallets = ['Metamask', 'Phantom', 'Solflare']

export interface ConnectDialogProps {
  open: boolean
  selectedValue: string
  onClose: (value: string) => void
}

const desiredWalletNames: string[] = [
  "Phantom",
  "Solflare",
  "Coinbase Wallet",
  "WalletConnect",
];

function ConnectDialog(props: ConnectDialogProps) {
  const { onClose, selectedValue, open } = props

  const { wallets, connected, select } = useWallet();

  const handleClose = () => {
    onClose(selectedValue)
  }

  const handleListItemClick = (value: string) => {
    onClose(value)
  }

  const handleConnect = (adapter: Adapter): void => {
    if (adapter.readyState === "NotDetected") {
      window.open(adapter.url)
    } else {
      select(adapter.name)
    }
  }

  return (
    <Dialog onClose={handleClose} open={open}>
      <Stack
        direction='column'
        alignItems='center'
        gap={3}
        sx={{ padding: '24px', width: { sm: '400px', xs: '310px' } }}
      >
        <DialogTitle sx={{ p: 0, position: 'relative', width: '100%' }} component={'div'}>
          <Typography variant='subtitle1' textAlign='center'>
            Connect to your <br /> Solana Wallet
          </Typography>

          <IconButton
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: 0,
              top: 0,
              p: 0,
              border: 'none',
              borderRadius: 0
            }}
          >
            <IoMdClose size={24} />
          </IconButton>
        </DialogTitle>
        <Box>
          {wallets
            .filter((wallet) => 
              desiredWalletNames.includes(wallet.adapter.name)
            )
            .map((wallet, idx) => (
              // <Typography>{wallet.adapter.icon}</Typography>
              <Typography>{wallet.adapter.name}</Typography>
            ))
          }
        </Box>

        <DialogContent sx={{ p: 0, width: '100%' }}>
          <Stack direction='column' gap={1.5}>
            {WalletButtonList.map((item, index) => (
              <Button
                LinkComponent={Link}
                href={ROUTES.DASHBOARD}
                key={`index${index}`}
                variant='outlined'
                color='primary'
                startIcon={item.startIcon}
                endIcon={item.endIcon}
              >
                {item.text}
              </Button>
            ))}
          </Stack>
        </DialogContent>
      </Stack>
    </Dialog>
  )
}

export default ConnectDialog
