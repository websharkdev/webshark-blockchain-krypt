import { Box, Button, Divider, Grid, Paper, TextField, styled } from '@mui/material'
import { FC, useState } from 'react'

import { CardItem } from './CardItem'

type Props = {
  address: string
}

type CardFormProps = {
  address: string
  amount: number
  keyword: string
  message: string
}

const Root = styled(Box)(({ theme }) => ({
  '& .home-card--form': {
    marginTop: 24,
    width: 320,
    '& .home-card--formBox': {
      borderRadius: 4,
      background: theme.palette.background.paper,
      width: '100%',
      padding: '18px 12px',
    },
  },
}))

export const Card: FC<Props> = ({ address }) => {
  const [cardForm, setCardForm] = useState<CardFormProps>({
    address: '',
    amount: 0,
    keyword: '',
    message: '',
  })
  return (
    <Root className="home-card--container">
      <Grid container wrap="nowrap" direction={'column'} justifyContent="center" alignItems={'center'} rowSpacing={2}>
        <Grid
          item
          xs={12}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <CardItem address={address} />
        </Grid>
        <Grid item xs={12} className="home-card--form">
          <Grid container className="home-card--formBox" rowSpacing={1.5}>
            <Grid item xs={12}>
              <TextField
                required
                id="cardFormAddress"
                placeholder="Address to..."
                onChange={(e) => setCardForm({ ...cardForm, address: e.target.value })}
                value={cardForm.address || ''}
                type="text"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="cardFormAmount"
                placeholder="Amount (ETH)"
                onChange={(e) => setCardForm({ ...cardForm, amount: +e.target.value })}
                value={cardForm.amount || ''}
                inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                type="number"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="cardFormMessage"
                placeholder="Enter message"
                onChange={(e) => setCardForm({ ...cardForm, message: e.target.value })}
                value={cardForm.message || ''}
                type="text"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <Divider />
            </Grid>
            <Grid item xs={12}>
              <Button color="primary" variant="contained" fullWidth>
                Send now
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Root>
  )
}
