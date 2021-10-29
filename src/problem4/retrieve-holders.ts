import { JsonRpcProvider } from '@ethersproject/providers'
import { Contract } from '@ethersproject/contracts'
import abi from './abi.json'

const tokenContractAddress = '0x250b211ee44459dad5cd3bca803dd6a7ecb5d46c'

const addressList = [
  '0x123d475e13aa54a43a7421d94caa4459da021c77',
  '0x0020c5222a24e4a96b720c06b803fb8d34adc0af',
  '0xfe808b079187cc460f47374580f5fb47c82b87a5'
]

// connect to Binance Smart Chain main net from Pancake Swap
const provider = new JsonRpcProvider('https://bsc-dataseed1.ninicoin.io', {
  name: 'binance',
  chainId: 56
})

const contract = new Contract(tokenContractAddress, abi, provider)

// get balance of each address and print address and amount
addressList.map((address) => {
  contract
    .balanceOf(address)
    .then((balance: { toString: () => any }) => {
      console.log(address, balance.toString())
    })
    .catch((e: any) => console.error(e))
})

// result:
// 0x123d475e13aa54a43a7421d94caa4459da021c77 324858701402479
// 0xfe808b079187cc460f47374580f5fb47c82b87a5 0
// 0x0020c5222a24e4a96b720c06b803fb8d34adc0af 797057369197209