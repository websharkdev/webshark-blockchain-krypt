import { Box, Button, Grid, Typography, styled } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { FC } from 'react'

import { data } from './data'

type Props = {
  authorized: boolean
  setAuthorized: (e: boolean) => void
}

const Root = styled(Grid)(({ theme }) => ({
  padding: '24px 68px',
  '& .header-menu--item a': {
    textDecoration: 'none',
    fontWeight: 600,
    color: theme.palette.primary.dark,
  },
  '& .active.header-menu--item a': {
    color: theme.palette.primary.light,
  },
}))

export const Header: FC<Props> = ({ authorized, setAuthorized }) => {
  const router = useRouter()
  return (
    <Root container wrap="nowrap" justifyContent={'space-between'} alignItems="center">
      <Grid item xs={'auto'}>
        <Image src={data.logo} alt="logo image" height={28} />
      </Grid>
      <Grid item xs={4}>
        <Box width={'100%'} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {data.menu.map((item) => (
            <Box key={item.id} className={`header-menu--item ${router.pathname === item.href ? 'active' : ''}`}>
              <Link href={item.href}>{item.name}</Link>
            </Box>
          ))}
        </Box>
      </Grid>
      <Grid item xs={'auto'}>
        {authorized ? <Button>Log out</Button> : <Button>Log in</Button>}
      </Grid>
    </Root>
  )
}
