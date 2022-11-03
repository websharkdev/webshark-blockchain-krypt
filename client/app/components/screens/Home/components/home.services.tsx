import { Box, Button, Grid, Typography, styled } from '@mui/material'
import Image from 'next/image'
import { FC } from 'react'

import styles from '@/screens/Home/home.module.sass'

import { data } from '../data'

type Props = {}

const Root = styled(Grid)(({ theme }) => ({
  '& .home-services--reasons-item-title': {
    marginBottom: 4,
  },
}))

export const HomeServices: FC<Props> = (props) => {
  return (
    <Root container className={styles.Services}>
      <Grid item xs={4}>
        <Typography variant={'h2'} width="520px">
          Services that we continue to improve
        </Typography>
      </Grid>
      <Grid item xs={6} className="home-services--reasons">
        <Grid container>
          {data.reasons.map((item) => (
            <Grid
              item
              xs={12}
              mb={2}
              mx="auto"
              key={item.id}
              className={`home-services--reasons-item ${styles.ServicesReasonItem}`}
            >
              <Box className={styles.ServicesReasonItem_img}>
                <Image src={item.icon.src} alt={item.icon.alt} width="64px" height={'64px'} />
              </Box>
              <Box className={styles.ServicesReasonItem_text}>
                <Typography className="home-services--reasons-item-title" variant="h6">
                  {item.title}
                </Typography>
                <Typography className="home-services--reasons-item-text" variant="body1">
                  {item.text}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Root>
  )
}
