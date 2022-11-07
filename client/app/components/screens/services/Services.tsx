import { Box, Button, Grid, Typography, styled } from '@mui/material'
import Image from 'next/image'
import { FC } from 'react'

import styles from '@/screens/services/services.module.sass'

import { data } from './data'

type Props = {}

const Root = styled(Grid)(({ theme }) => ({
  '& .services-container--title': {
    width: 550,
    fontSize: 32,
    position: 'relative',
    zIndex: 5,
    [theme.breakpoints.down('md')]: {
      width: '100%',
      fontSize: 24,
    },
  },
  '& .services--reasons': {
    marginTop: 16,
  },
}))

export const Services: FC<Props> = (props) => {
  return (
    <Root container className={styles.Services}>
      <Grid item xs={12} md={6} lg={4}>
        <Typography variant={'h2'} className="services-container--title">
          Services that we continue to improve
        </Typography>
      </Grid>
      <Grid item xs={12} md={6} lg={6} className="services--reasons">
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
              <Box>
                <Typography className={styles.ServicesReasonItem_title} variant="h6">
                  {item.title}
                </Typography>
                <Typography className={styles.ServicesReasonItem_text} variant="body1">
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
