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

export class AddressLinked extends EthereumEvent {
  get params(): AddressLinkedParams {
    return new AddressLinkedParams(this);
  }
}

export class AddressLinkedParams {
  _event: AddressLinked;

  constructor(event: AddressLinked) {
    this._event = event;
  }

  get currentAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newAddress(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get linkId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class AddressUnlinked extends EthereumEvent {
  get params(): AddressUnlinkedParams {
    return new AddressUnlinkedParams(this);
  }
}

export class AddressUnlinkedParams {
  _event: AddressUnlinked;

  constructor(event: AddressUnlinked) {
    this._event = event;
  }

  get addressToRemove(): Address {
    return this._event.parameters[0].value.toAddress();
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

export class AccountRegistryLogic extends SmartContract {
  static bind(address: Address): AccountRegistryLogic {
    return new AccountRegistryLogic("AccountRegistryLogic", address);
  }

  initializing(): boolean {
    let result = super.call("initializing", []);
    return result[0].toBoolean();
  }

  initializer(): Address {
    let result = super.call("initializer", []);
    return result[0].toAddress();
  }

  linkIds(param0: Address): BigInt {
    let result = super.call("linkIds", [EthereumValue.fromAddress(param0)]);
    return result[0].toBigInt();
  }

  usedSignatures(param0: Bytes): boolean {
    let result = super.call("usedSignatures", [
      EthereumValue.fromFixedBytes(param0)
    ]);
    return result[0].toBoolean();
  }
}
