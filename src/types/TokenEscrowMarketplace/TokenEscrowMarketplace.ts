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

export class TokenMarketplaceWithdrawal extends EthereumEvent {
  get params(): TokenMarketplaceWithdrawalParams {
    return new TokenMarketplaceWithdrawalParams(this);
  }
}

export class TokenMarketplaceWithdrawalParams {
  _event: TokenMarketplaceWithdrawal;

  constructor(event: TokenMarketplaceWithdrawal) {
    this._event = event;
  }

  get escrowPayer(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class TokenMarketplaceEscrowPayment extends EthereumEvent {
  get params(): TokenMarketplaceEscrowPaymentParams {
    return new TokenMarketplaceEscrowPaymentParams(this);
  }
}

export class TokenMarketplaceEscrowPaymentParams {
  _event: TokenMarketplaceEscrowPayment;

  constructor(event: TokenMarketplaceEscrowPayment) {
    this._event = event;
  }

  get escrowPayer(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get escrowPayee(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class TokenMarketplaceDeposit extends EthereumEvent {
  get params(): TokenMarketplaceDepositParams {
    return new TokenMarketplaceDepositParams(this);
  }
}

export class TokenMarketplaceDepositParams {
  _event: TokenMarketplaceDeposit;

  constructor(event: TokenMarketplaceDeposit) {
    this._event = event;
  }

  get escrowPayer(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class TokenEscrowMarketplace extends SmartContract {
  static bind(address: Address): TokenEscrowMarketplace {
    return new TokenEscrowMarketplace("TokenEscrowMarketplace", address);
  }

  attestationLogic(): Address {
    let result = super.call("attestationLogic", []);
    return result[0].toAddress();
  }

  tokenEscrow(param0: Address): BigInt {
    let result = super.call("tokenEscrow", [EthereumValue.fromAddress(param0)]);
    return result[0].toBigInt();
  }

  usedSignatures(param0: Bytes): boolean {
    let result = super.call("usedSignatures", [
      EthereumValue.fromFixedBytes(param0)
    ]);
    return result[0].toBoolean();
  }

  token(): Address {
    let result = super.call("token", []);
    return result[0].toAddress();
  }
}
