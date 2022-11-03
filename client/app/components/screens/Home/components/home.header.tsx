import { Box, Button, Grid, Typography, styled } from '@mui/material'
import { FC } from 'react'

import { Card } from '@/components/card'
import { data } from '@/components/layout/header/data'

import styles from '@/screens/Home/home.module.sass'

type Props = {
  address: string
}

const Root = styled(Grid)(({ theme }) => ({
  '& .home-content--container': {
    padding: '20px 0',
    '& .home-content--title': {
      fontSize: 56,
      fontWeight: 600,
      color: theme.palette.text.primary,
    },
    '& .home-content--text': {
      fontSize: 16,
      fontWeight: 500,
      color: theme.palette.text.primary,
      width: '75%',
      margin: '16px 0',
    },
  },

  '& .home-content--table': {
    border: '1px solid #fff',
    marginTop: 24,
    borderRadius: theme.shape.borderRadius,
    '& .home-content--tableItem': {
      padding: '24px',
      fontWeight: 600,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      '&.home-content--tableItem-middle': {
        borderRight: '1px solid #fff',
        borderLeft: '1px solid #fff',
      },
      '&.home-content--tableItem-top3': {
        borderBottom: '1px solid #fff',
      },
    },
  },
}))

export const HomeHeader: FC<Props> = ({ address }) => {
  return (
    <Root container className={styles.Root}>
      <Grid item xs={4}>
        <Box className="home-content--container">
          <Typography variant="h1" className="home-content--title">
            Send Crypto across the world
          </Typography>
          <Typography variant="body2" className="home-content--text">
            Explore the crypto world. Buy and sell cryptocurrencies easily on {data.companyName}.
          </Typography>
          <Button className={`home-content--button ${styles.WalletBTN}`}>
            <Typography component={'div'}>Connect Wallet</Typography>
          </Button>
        </Box>

        <Box className="home-content--tableContainer">
          <Grid container maxWidth={'100%'} flexWrap="wrap" className="home-content--table">
            {data.table.map((row, index) => (
              <Grid
                item
                key={row.id}
                minWidth={'33%'}
                className={`home-content--tableItem ${index % 3 === 1 ? 'home-content--tableItem-middle' : ''} ${
                  index < 3 ? 'home-content--tableItem-top3' : ''
                }`}
              >
                {row.name}
              </Grid>
            ))}
          </Grid>
        </Box>
      </Grid>
      <Grid item xs={7}>
        <Card address={address} />
      </Grid>
    </Root>
  )
}