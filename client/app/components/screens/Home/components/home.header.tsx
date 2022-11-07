import { Box, Button, Grid, Typography, styled } from '@mui/material'
import { FC, useContext } from 'react'

import { Card } from '@/components/card'
import { data } from '@/components/layout/header/data'

import styles from '@/screens/Home/home.module.sass'

import { TransactionContext } from '@/providers/TransactionContext'

type Props = {}

const Root = styled(Grid)(({ theme }) => ({
  '& .home-content--container': {
    padding: '20px 0',
    '& .home-content--title': {
      fontSize: 56,
      fontWeight: 600,
      color: theme.palette.text.primary,
      [theme.breakpoints.down('md')]: {
        fontSize: 32,
      },
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
    margin: '0 auto',
    marginTop: 24,
    borderRadius: theme.shape.borderRadius,
    [theme.breakpoints.down('md')]: {
      marginTop: 12,
      marginBottom: 32,
    },
    '& .home-content--tableItem': {
      padding: '24px',
      fontWeight: 600,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      [theme.breakpoints.down('sm')]: {
        padding: '14px 10px',
        fontSize: 12,
      },

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

export const HomeHeader: FC<Props> = (props) => {
  // @ts-ignore
  const { connectWallet, currentAccount } = useContext(TransactionContext)

  return (
    <Root container wrap="wrap" className={styles.Root}>
      <Grid item xs={12} sm={12} md={6} xl={4}>
        <Box className="home-content--container">
          <Typography variant="h1" className="home-content--title">
            Send Crypto across the world
          </Typography>
          <Typography variant="body2" className="home-content--text">
            Explore the crypto world. Buy and sell cryptocurrencies easily on {data.companyName}.
          </Typography>
          <Button
            className={`home-content--button ${styles.WalletBTN}`}
            onClick={connectWallet}
            disabled={currentAccount.length > 0}
          >
            <Typography component={'div'}>{!currentAccount ? 'Connect Wallet' : 'Account connected'}</Typography>
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
      <Grid item xs={12} sm={12} md={6} xl={7}>
        <Card address={currentAccount} />
      </Grid>
    </Root>
  )
}
