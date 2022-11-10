import { Box, Button, Divider, Grid, IconButton, Menu, MenuItem, Typography, styled } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { FC, useContext, useState } from 'react'

import { BurgerClosedIcon, BurgerOpenedIcon } from '@/assets/icons/ui'

import { TransactionContext } from '@/providers/TransactionContext'

import Logo from '../logo/Logo'

import { data } from './data'

type Props = {}

const Root = styled(Grid)(({ theme }) => ({
  padding: '24px 68px',
  [theme.breakpoints.down('md')]: {
    padding: '24px 32px',
  },
  '& .header-menu--item a': {
    textDecoration: 'none',
    fontWeight: 600,
    color: theme.palette.primary.dark,
  },
  '& .active.header-menu--item a': {
    color: theme.palette.primary.light,
  },
  '& .mobile-hidden': {
    display: 'flex',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  '& .desctop-hidden': {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}))

export const Header: FC<Props> = (props) => {
  // @ts-ignore
  const { connectWallet, currentAccount, disconectWallet } = useContext(TransactionContext)
  const router = useRouter()

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <Root container wrap="nowrap" justifyContent={'space-between'} alignItems="center">
      <Grid item xs={'auto'} width="max-content">
        <Logo />
      </Grid>
      <Grid item className="mobile-hidden" md={6} xl={4}>
        <Box width={'100%'} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {data.menu.map((item) => (
            <Box key={item.id} className={`header-menu--item ${router.pathname === item.href ? 'active' : ''}`}>
              <Link href={item.href}>{item.name}</Link>
            </Box>
          ))}
        </Box>
      </Grid>
      <Grid item className="mobile-hidden" xs={'auto'}>
        {currentAccount ? (
          <Button onClick={disconectWallet}>Log out</Button>
        ) : (
          <Button onClick={connectWallet}>Log in</Button>
        )}
      </Grid>

      <IconButton
        onClick={handleClick}
        size="small"
        className="header-menu--burgerMenu desctop-hidden"
        sx={{ ml: 2 }}
        aria-controls={open ? 'account-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
      >
        {open ? (
          <Image src={BurgerOpenedIcon} alt="burger-opened-icon" width={24} />
        ) : (
          <Image src={BurgerClosedIcon} alt="burger-opened-icon" width={24} />
        )}
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        id="burger-menu"
        className="header-menu--burgerMenuContainer"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        {data.menu.map((item) => (
          <MenuItem
            key={item.id}
            sx={{
              '& a': {
                color: 'primary.main',
                textDecoration: 'none',
                fontWeight: 600,
              },
            }}
            className={`header-burgerMenu--item ${router.pathname === item.href ? 'active' : ''}`}
          >
            <Link href={item.href}>{item.name}</Link>
          </MenuItem>
        ))}

        <Divider />

        {currentAccount ? (
          <Button onClick={disconectWallet}>Log out</Button>
        ) : (
          <Button onClick={connectWallet}>Log in</Button>
        )}
      </Menu>
    </Root>
  )
}
