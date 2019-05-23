import {
    TokenMarketplaceWithdrawal as TokenMarketplaceWithdrawalEvent,
    TokenMarketplaceEscrowPayment as TokenMarketplaceEscrowPaymentEvent,
    TokenMarketplaceDeposit as TokenMarketplaceDepositEvent
} from '../types/TokenEscrowMarketplace/TokenEscrowMarketplace'
import { TokenMarketplaceWithdrawal, TokenMarketplaceEscrowPayment, TokenMarketplaceDeposit } from '../types/schema'

export function handleTokenMarketplaceWithdrawal(event: TokenMarketplaceWithdrawalEvent): void {
  let traitAttested = new TokenMarketplaceWithdrawal(event.params.escrowPayer.toHexString());

  traitAttested.escrowPayer =  event.params.escrowPayer;
  traitAttested.amount =  event.params.amount;
  traitAttested.transactionHash = event.transaction.hash;
  traitAttested.timestamp = event.block.timestamp;
  traitAttested.save();
}

export function handleTokenMarketplaceEscrowPayment(event: TokenMarketplaceEscrowPaymentEvent): void {
  let attestationRejected = new TokenMarketplaceEscrowPayment(event.params.escrowPayer.toHexString());

  attestationRejected.escrowPayer =  event.params.escrowPayer;
  attestationRejected.escrowPayee =  event.params.escrowPayee;
  attestationRejected.amount =  event.params.amount;
  attestationRejected.transactionHash = event.transaction.hash;
  attestationRejected.timestamp = event.block.timestamp;
  attestationRejected.save();
}

export function handleTokenMarketplaceDeposit(event: TokenMarketplaceDepositEvent): void {
  let attestationRevoked = new TokenMarketplaceDeposit(event.params.escrowPayer.toHexString());

  attestationRevoked.escrowPayer =  event.params.escrowPayer;
  attestationRevoked.amount =  event.params.amount;
  attestationRevoked.transactionHash = event.transaction.hash;
  attestationRevoked.timestamp = event.block.timestamp;
  attestationRevoked.save();
}
