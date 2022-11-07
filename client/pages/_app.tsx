import type { AppProps } from 'next/app'

import MaineProvider from '@/providers/MaineProvider'
import { TransactionProvider } from '@/providers/TransactionContext'

import styles from '@/styles/globals.sass'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <TransactionProvider>
    <MaineProvider>
      <Component {...pageProps} className={styles.Root} />
    </MaineProvider>
  </TransactionProvider>
)

export default MyApp
