# Bloom Subgraph

Subgraph to explore Bloom, a protocol to take control of your credit and identity.

This subgraph has been created to participate to The Graph x CoinList online hackathon.

You can use the following explorer to explore the data available on the mainnet.

https://pierrickgt.github.io/bloom-subgraph-explorer/

## Contracts & Events

The following contracts & events, all listed in the [Bloom Documentation](https://bloom.co/docs/), have been used to build this graph.

### AccountRegistryLogic
| Network | Address                                    |
|---------|--------------------------------------------|
| Mainnet | 0xB0f6905fa74aD35C0Dc43FF60A2250488735dfC5 |
| Rinkeby | 0xAe89E1c6E82e3cd602EEa08A1C40cAf110dB9295 |

```
event AddressLinked(address indexed currentAddress, address indexed newAddress, uint256 indexed linkId);
event AddressUnlinked(address indexed addressToRemove);
```

### AttestationLogic
| Network | Address                                    |
|---------|--------------------------------------------|
| Mainnet | 0xceec7aAA57e3a77c73A9954b9b7D5B32ab688318 |
| Rinkeby | 0x313a0DC2A954F8D196CE72FEf175f4403B7121Ca |

```
event TraitAttested(address subject, address attester, address requester, bytes32 dataHash);
event AttestationRejected(address indexed attester, address indexed requester);
event AttestationRevoked(bytes32 link, address attester);
```

### TokenEscrowMarketplace
| Network | Address                                    |
|---------|--------------------------------------------|
| Mainnet | 0x572686F8F84874989AF4D603Fe54fCfFE9d29462 |
| Rinkeby | 0xc211A16d0067F3D25704E32f95047b6E5130e2C1 |

```
event TokenMarketplaceWithdrawal(address escrowPayer, uint256 amount);
event TokenMarketplaceEscrowPayment(address escrowPayer, address escrowPayee, uint256 amount);
event TokenMarketplaceDeposit(address escrowPayer, uint256 amount);
```

## Entities & Queries

You can use the following entities and queries to query the data.

### AddressLinked

- `id: ID!`
- `currentAddress: Bytes!` - Address to which user wants to link another address. May currently be linked to another address
- `newAddress: Bytes!` - Address to add to account. Cannot currently be linked to another address
- `linkId: BigInt!` - Links between addresses are stored as mapping from addresses to a linkId.
- `transactionHash: Bytes!`
- `timestamp: BigInt!`

```
{
  addressLinkeds(orderBy: timestamp, orderDirection: desc) {
    id
    currentAddress
    newAddress
    linkId
    transactionHash
    timestamp
  }
}
```

### AddressUnlinked

- `id: ID!`
- `addressToRemove: Bytes!` - Address to unlink from all other addresses
- `transactionHash: Bytes!`
- `timestamp: BigInt!`

```
{
  addressUnlinkeds(orderBy: timestamp, orderDirection: desc) {
    id
    addressToRemove
    transactionHash
    timestamp
  }
}
```

### TraitAttested

- `id: ID!`
- `subject: Bytes!` - User this attestation is about
- `attester: Bytes!` - User completing the attestation
- `requester: Bytes!` - User requesting this attestation be completed and paying for it in BLT
- `dataHash: Bytes!` - Hash of data being attested and nonce
- `transactionHash: Bytes!`
- `timestamp: BigInt!`

```
{
  traitAttesteds(orderBy: timestamp, orderDirection: desc) {
    id
    subject
    attester
    requester
    dataHash
    transactionHash
    timestamp
  }
}
```

### AttestationRejected

- `id: ID!`
- `attester: Bytes!` - User completing the attestation
- `requester: Bytes!` - User requesting this attestation be completed and paying for it in BLT
- `transactionHash: Bytes!`
- `timestamp: BigInt!`

```
{
  attestationRejecteds(orderBy: timestamp, orderDirection: desc) {
    id
    attester
    requester
    transactionHash
    timestamp
  }
}
```

### AttestationRevoked

- `id: ID!`
- `link: Bytes!` - Bytes string embedded in dataHash to link revocation
- `attester: Bytes!` - User completing the attestation
- `transactionHash: Bytes!`
- `timestamp: BigInt!`

```
{
  attestationRevokeds(orderBy: timestamp, orderDirection: desc) {
    id
    link
    attester
    transactionHash
    timestamp
  }
}
```

### TokenEscrowMarketplaceChanged

- `id: ID!`
- `oldTokenEscrowMarketplace: Bytes!` - Address of old SigningLogic implementation
- `newTokenEscrowMarketplace: Bytes!` - Address of new SigningLogic implementation
- `transactionHash: Bytes!`
- `timestamp: BigInt!`

```
{
  tokenEscrowMarketplaceChangeds(orderBy: timestamp, orderDirection: desc) {
    id
		oldTokenEscrowMarketplace
    newTokenEscrowMarketplace
    transactionHash
    timestamp
  }
}
```

### TokenMarketplaceWithdrawal

- `id: ID!`
- `escrowPayer: Bytes!` - User retreiving tokens from escrow
- `amount: BigInt!` - Tokens to retrieve from escrow
- `transactionHash: Bytes!`
- `timestamp: BigInt!`

```
{
  tokenMarketplaceWithdrawals(orderBy: timestamp, orderDirection: desc) {
    id
		escrowPayer
    amount
    transactionHash
    timestamp
  }
}
```

### TokenMarketplaceEscrowPayment

- `id: ID!`
- `escrowPayer: Bytes!` - User retreiving tokens from escrow
- `escrowPayee: Bytes!` - User receiving payment
- `amount: BigInt!` - Tokens being sent
- `transactionHash: Bytes!`
- `timestamp: BigInt!`

```
{
  tokenMarketplaceEscrowPayments(orderBy: timestamp, orderDirection: desc) {
    id
		escrowPayer
    escrowPayee
    amount
    transactionHash
    timestamp
  }
}
```

### TokenMarketplaceDeposit

- `id: ID!`
- `escrowPayer: Bytes!` - User depositing tokens to escrow
- `amount: BigInt!` - Tokens to lock up
- `transactionHash: Bytes!`
- `timestamp: BigInt!`

```
{
  tokenMarketplaceDeposits(orderBy: timestamp, orderDirection: desc) {
    id
		escrowPayer
    amount
    transactionHash
    timestamp
  }
}
```
