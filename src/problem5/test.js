const { ethers } = require('ethers')

const ADDR = '…' // your contract address
const ABI = [] // your contract ABI

const ADDRESS = '…' // some wallet address with token balance
const TOKENS = [
  // token contract addresses
  '…',
  '…'
]

const provider = ethers.providers.getDefaultProvider()

const test = async () => {
  const contract = new ethers.Contract(ADDR, ABI, provider)

  const balances = await contract.getBalances(ADDRESS, tokens)

  return balances
}

test().then(console.log)

;```
[
  {
    token: "0x123d475e13aa54a43a7421d94caa4459da021c77",
    balance: "9988887462734227" // its okay if this is typed ethers.BigNumber
  },
  {
    token: "0x55f6823de9642f47e80ed4845a55aa8430cb4ec6",
    balance: "899998285714286"
  },
  …
]
```
