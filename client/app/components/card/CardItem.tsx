import { Box, Grid, Tooltip, Typography, styled } from '@mui/material'
import Image from 'next/image'
import { FC } from 'react'

import styles from '@/components/card/card.module.sass'

import { EthereumIcon, InfoIcon } from '@/assets/icons/ui'

import { useCopyToClipboard } from '@/utils/hooks'

type Props = {
  address: string
}

const Root = styled(Grid)(({ theme }) => ({
  minHeight: 188,
  width: '100%',
  padding: '24px 32px',
  borderRadius: theme.shape.borderRadius,
  background: 'linear-gradient(95.54deg, #DEC9E9 -12.24%, #C77DFF 19.94%, #7B2CBF 72.87%)',
  '& .card-item--container': {
    display: 'flex',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: '100%',
  },
}))

export const CardItem: FC<Props> = ({ address }) => {
  const [value, addToClipboard] = useCopyToClipboard()
  return (
    <Root
      container
      wrap="nowrap"
      direction="column"
      justifyContent="space-between"
      alignItems="center"
      className={styles.WalletCard}
    >
      <Grid item width="100%">
        <Box className="card-item--container">
          <Image src={EthereumIcon} alt="ethereum-icon" width={32} height={32} />
          <Image src={InfoIcon} alt="ethereum-icon" width={18} height={18} />
        </Box>
      </Grid>
      <Grid item width="100%">
        <Box className="card-item--container" flexDirection="column">
          <Tooltip title={address ? address : ''}>
            <Typography variant="body2" color="#fff" onClick={() => addToClipboard(address)}>
              {address ? `${address.slice(0, 6)}...${address.slice(38, 42)}` : '...'}
            </Typography>
          </Tooltip>
          <Typography variant="h6" fontWeight={600} color="#fff">
            Ethereum
          </Typography>
        </Box>
      </Grid>
    </Root>
  )
}
