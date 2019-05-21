import {
  EthereumEvent,
  SmartContract,
  EthereumValue,
  JSONValue,
  TypedMap,
  Entity,
  EthereumTuple,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class TraitAttested extends EthereumEvent {
  get params(): TraitAttestedParams {
    return new TraitAttestedParams(this);
  }
}

export class TraitAttestedParams {
  _event: TraitAttested;

  constructor(event: TraitAttested) {
    this._event = event;
  }

  get subject(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get attester(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get requester(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get dataHash(): Bytes {
    return this._event.parameters[3].value.toBytes();
  }
}

export class AttestationRejected extends EthereumEvent {
  get params(): AttestationRejectedParams {
    return new AttestationRejectedParams(this);
  }
}

export class AttestationRejectedParams {
  _event: AttestationRejected;

  constructor(event: AttestationRejected) {
    this._event = event;
  }

  get attester(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get requester(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class AttestationRevoked extends EthereumEvent {
  get params(): AttestationRevokedParams {
    return new AttestationRevokedParams(this);
  }
}

export class AttestationRevokedParams {
  _event: AttestationRevoked;

  constructor(event: AttestationRevoked) {
    this._event = event;
  }

  get link(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get attester(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class TokenEscrowMarketplaceChanged extends EthereumEvent {
  get params(): TokenEscrowMarketplaceChangedParams {
    return new TokenEscrowMarketplaceChangedParams(this);
  }
}

export class TokenEscrowMarketplaceChangedParams {
  _event: TokenEscrowMarketplaceChanged;

  constructor(event: TokenEscrowMarketplaceChanged) {
    this._event = event;
  }

  get oldTokenEscrowMarketplace(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newTokenEscrowMarketplace(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class InitializationEnded extends EthereumEvent {
  get params(): InitializationEndedParams {
    return new InitializationEndedParams(this);
  }
}

export class InitializationEndedParams {
  _event: InitializationEnded;

  constructor(event: InitializationEnded) {
    this._event = event;
  }
}

export class AttestationLogic extends SmartContract {
  static bind(address: Address): AttestationLogic {
    return new AttestationLogic("AttestationLogic", address);
  }

  initializing(): boolean {
    let result = super.call("initializing", []);
    return result[0].toBoolean();
  }

  tokenEscrowMarketplace(): Address {
    let result = super.call("tokenEscrowMarketplace", []);
    return result[0].toAddress();
  }

  initializer(): Address {
    let result = super.call("initializer", []);
    return result[0].toAddress();
  }

  usedSignatures(param0: Bytes): boolean {
    let result = super.call("usedSignatures", [
      EthereumValue.fromFixedBytes(param0)
    ]);
    return result[0].toBoolean();
  }
}
