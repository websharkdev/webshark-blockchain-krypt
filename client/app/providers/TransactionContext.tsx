import { Snackbar } from '@mui/material'
import { ethers } from 'ethers'
import React, { FC, useEffect, useState } from 'react'
import { CardFormProps } from 'shared/types/home'

import { contractABI, contractAddress } from '@/utils/constants'

export const TransactionContext = React.createContext({})

// @ts-ignore
const { ethereum } = typeof window !== 'undefined' && window

export const getEthereumContact = () => {
  const provider = new ethers.providers.Web3Provider(ethereum)
  const signer = provider.getSigner()
  const transcationContract = new ethers.Contract(contractAddress, contractABI, signer)

  return transcationContract
}

type Props = {
  children: React.ReactElement
}

export const TransactionProvider: FC<Props> = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [currentAccount, setCurrentAccount] = useState('')
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [submitedTransaction, setSubmitedTransaction] = useState(false)
  const [wallet, setWallet] = useState({
    isConnect: true,
    address: '',
  })

  useEffect(() => {
    const checkIfWalletConnect = async () => {
      if (!ethereum) return setWallet({ ...wallet, isConnect: ethereum.isMetaMask })
      const accounts = await ethereum.request({ method: 'eth_accounts' })
    }
    checkIfWalletConnect()
  }, [])

  const connectWallet = async () => {
    try {
      if (!ethereum) return setWallet({ ...wallet, isConnect: ethereum.isMetaMask })
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' })

      setCurrentAccount(accounts[0])
    } catch (error) {
      console.log(error)

      throw new Error('No ethereum object')
    }
  }

  const sendTransaction = async ({ address, amount, message, keyword }: CardFormProps) => {
    try {
      if (ethereum) {
        const transactionContract = getEthereumContact()
        const parsedAmount = ethers.utils.parseEther(amount)

        await ethereum.request({
          method: 'eth_sendTransaction',
          params: [
            {
              from: currentAccount,
              to: address,
              gas: '0x5208', // 21000 GWEI
              value: parsedAmount._hex,
            },
          ],
        })

        const transactionHash = await transactionContract.addToBlockchain(address, parsedAmount, message, keyword)
        setIsLoading(true)

        console.log(`Loading - ${transactionHash.hash}`)
        await transactionHash.wait()
        console.log(`Success - ${transactionHash.hash}`)

        setSubmitedTransaction(true)
        setTimeout(() => {
          setSubmitedTransaction(false)
        }, 6000)

        setIsLoading(false)

        // const transactionCount = await transactionContract.getTransactionCount()
        // setTransactionCount(transactionCount.toNumber())
        // window.localStorage.setItem('transaction_count', transactionCount.toNumber())
      } else {
        console.log('No ethereum object')
      }
    } catch (error) {
      console.log(error)

      throw new Error('No ethereum object')
    }
  }

  return (
    <TransactionContext.Provider value={{ connectWallet, currentAccount: currentAccount, sendTransaction }}>
      <Snackbar open={isOpen} autoHideDuration={6000} message="Please, install MetaMask" />
      <Snackbar open={isLoading} autoHideDuration={6000} message="Done!" />
      {/* {wallet.isConnect ? '' : 'INSTALL METAMASK'} */}
      {children}
    </TransactionContext.Provider>
  )
}
