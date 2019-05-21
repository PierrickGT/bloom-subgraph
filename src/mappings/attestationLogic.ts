import {
    TraitAttested as TraitAttestedEvent,
    AttestationRejected as AttestationRejectedEvent,
    AttestationRevoked as AttestationRevokedEvent,
    TokenEscrowMarketplaceChanged as TokenEscrowMarketplaceChangedEvent,
} from '../types/AttestationLogic/AttestationLogic'
import { TraitAttested, AttestationRejected, AttestationRevoked, TokenEscrowMarketplaceChanged } from '../types/schema'

export function handleTraitAttested(event: TraitAttestedEvent): void {
  let traitAttested = new TraitAttested(event.params.subject.toHexString());

  traitAttested.subject = event.params.subject;
  traitAttested.attester =  event.params.attester;
  traitAttested.requester = event.params.requester;
  traitAttested.dataHash = event.params.dataHash;
  traitAttested.save();
}

export function handleAttestationRejected(event: AttestationRejectedEvent): void {
  let attestationRejected = new AttestationRejected(event.params.attester.toHexString());

  attestationRejected.attester =  event.params.attester;
  attestationRejected.requester =  event.params.requester;
  attestationRejected.save();
}

export function handleAttestationRevoked(event: AttestationRevokedEvent): void {
  let attestationRevoked = new AttestationRevoked(event.params.link.toHexString());

  attestationRevoked.link = event.params.link;
  attestationRevoked.attester = event.params.attester;
  attestationRevoked.save();
}

export function handleTokenEscrowMarketplaceChanged(event: TokenEscrowMarketplaceChangedEvent): void {
  let tokenEscrowMarketplaceChanged = new TokenEscrowMarketplaceChanged(event.params.oldTokenEscrowMarketplace.toHexString());

  tokenEscrowMarketplaceChanged.oldTokenEscrowMarketplace =  event.params.oldTokenEscrowMarketplace;
  tokenEscrowMarketplaceChanged.newTokenEscrowMarketplace =  event.params.newTokenEscrowMarketplace;
  tokenEscrowMarketplaceChanged.save();
}
