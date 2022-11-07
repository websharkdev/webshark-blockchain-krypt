import { Grid, styled } from '@mui/material'
import { FC, useContext } from 'react'

import styles from '@/screens/Home/home.module.sass'

import { TransactionContext } from '@/providers/TransactionContext'

import { HomeHeader, HomeServices } from './components'

type Props = {}

const Root = styled(Grid)(({ theme }) => ({
  width: '100%',
  flexDirection: 'column',
}))

export const Home: FC<Props> = (props) => {
  // @ts-ignore
  const { connectWallet, currentAccount } = useContext(TransactionContext)

  return (
    <Root container className={styles.Root} rowGap={2}>
      <Grid item width={'100%'}>
        <HomeHeader address={currentAccount} connectWallet={connectWallet} />
      </Grid>
      <Grid item width={'100%'}>
        <HomeServices />
      </Grid>
    </Root>
  )
}
