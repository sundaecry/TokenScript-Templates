export const ensAbi = [
  {
    "stateMutability": "view",
    "type": "function",
    "inputs": [
      { "internalType": "uint256", "name": "id", "type": "uint256" }
    ],
    "name": "getData",
    "outputs": [
      { "internalType": "address", "name": "owner", "type": "address" },
      { "internalType": "uint32", "name": "fuses", "type": "uint32" },
      { "internalType": "uint64", "name": "expiry", "type": "uint64" }
    ]
  },
  {
    "stateMutability": "view",
    "type": "function",
    "inputs": [
      { "internalType": "bytes32", "name": "", "type": "bytes32" }
    ],
    "name": "names",
    "outputs": [
      { "internalType": "bytes", "name": "", "type": "bytes" }
    ],
  },
];