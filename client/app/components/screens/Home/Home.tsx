import { Grid, styled } from '@mui/material'
import { FC } from 'react'

import styles from '@/screens/Home/home.module.sass'
import { Services } from '@/screens/services'

import { HomeHeader } from './components'

type Props = {}

const Root = styled(Grid)(({ theme }) => ({
  width: '100%',
  flexDirection: 'column',
}))

export const Home: FC<Props> = (props) => {
  return (
    <Root container className={styles.Root} rowGap={2}>
      <Grid item width={'100%'}>
        <HomeHeader />
      </Grid>
      <Grid item width={'100%'}>
        <Services />
      </Grid>
    </Root>
  )
}
