import Dialog from '@mui/material/Dialog'
import { ROUTES, WalletButtonList } from '@/constants'
import { Button, DialogContent, DialogTitle, IconButton, Link, Stack, Typography } from '@mui/material'
import { IoMdClose } from 'react-icons/io'

const wallets = ['Metamask', 'Phantom', 'Solflare']

export interface ConnectDialogProps {
  open: boolean
  selectedValue: string
  onClose: (value: string) => void
}

function ConnectDialog(props: ConnectDialogProps) {
  const { onClose, selectedValue, open } = props

  const handleClose = () => {
    onClose(selectedValue)
  }

  const handleListItemClick = (value: string) => {
    onClose(value)
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
