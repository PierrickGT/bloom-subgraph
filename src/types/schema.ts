import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class AddressLinked extends Entity {
  constructor(id: string) {
    this.entries = new Array(0);
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save AddressLinked entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save AddressLinked entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("AddressLinked", id.toString(), this);
  }

  static load(id: string): AddressLinked | null {
    return store.get("AddressLinked", id) as AddressLinked | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get currentAddress(): Bytes {
    let value = this.get("currentAddress");
    return value.toBytes();
  }

  set currentAddress(value: Bytes) {
    this.set("currentAddress", Value.fromBytes(value));
  }

  get newAddress(): Bytes {
    let value = this.get("newAddress");
    return value.toBytes();
  }

  set newAddress(value: Bytes) {
    this.set("newAddress", Value.fromBytes(value));
  }

  get linkId(): BigInt {
    let value = this.get("linkId");
    return value.toBigInt();
  }

  set linkId(value: BigInt) {
    this.set("linkId", Value.fromBigInt(value));
  }

  get transactionHash(): Bytes {
    let value = this.get("transactionHash");
    return value.toBytes();
  }

  set transactionHash(value: Bytes) {
    this.set("transactionHash", Value.fromBytes(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }
}

export class AddressUnlinked extends Entity {
  constructor(id: string) {
    this.entries = new Array(0);
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save AddressUnlinked entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save AddressUnlinked entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("AddressUnlinked", id.toString(), this);
  }

  static load(id: string): AddressUnlinked | null {
    return store.get("AddressUnlinked", id) as AddressUnlinked | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get addressToRemove(): Bytes {
    let value = this.get("addressToRemove");
    return value.toBytes();
  }

  set addressToRemove(value: Bytes) {
    this.set("addressToRemove", Value.fromBytes(value));
  }

  get transactionHash(): Bytes {
    let value = this.get("transactionHash");
    return value.toBytes();
  }

  set transactionHash(value: Bytes) {
    this.set("transactionHash", Value.fromBytes(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }
}

export class TraitAttested extends Entity {
  constructor(id: string) {
    this.entries = new Array(0);
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save TraitAttested entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save TraitAttested entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("TraitAttested", id.toString(), this);
  }

  static load(id: string): TraitAttested | null {
    return store.get("TraitAttested", id) as TraitAttested | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get subject(): Bytes {
    let value = this.get("subject");
    return value.toBytes();
  }

  set subject(value: Bytes) {
    this.set("subject", Value.fromBytes(value));
  }

  get attester(): Bytes {
    let value = this.get("attester");
    return value.toBytes();
  }

  set attester(value: Bytes) {
    this.set("attester", Value.fromBytes(value));
  }

  get requester(): Bytes {
    let value = this.get("requester");
    return value.toBytes();
  }

  set requester(value: Bytes) {
    this.set("requester", Value.fromBytes(value));
  }

  get dataHash(): Bytes {
    let value = this.get("dataHash");
    return value.toBytes();
  }

  set dataHash(value: Bytes) {
    this.set("dataHash", Value.fromBytes(value));
  }

  get transactionHash(): Bytes {
    let value = this.get("transactionHash");
    return value.toBytes();
  }

  set transactionHash(value: Bytes) {
    this.set("transactionHash", Value.fromBytes(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }
}

export class AttestationRejected extends Entity {
  constructor(id: string) {
    this.entries = new Array(0);
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save AttestationRejected entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save AttestationRejected entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("AttestationRejected", id.toString(), this);
  }

  static load(id: string): AttestationRejected | null {
    return store.get("AttestationRejected", id) as AttestationRejected | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get attester(): Bytes {
    let value = this.get("attester");
    return value.toBytes();
  }

  set attester(value: Bytes) {
    this.set("attester", Value.fromBytes(value));
  }

  get requester(): Bytes {
    let value = this.get("requester");
    return value.toBytes();
  }

  set requester(value: Bytes) {
    this.set("requester", Value.fromBytes(value));
  }

  get transactionHash(): Bytes {
    let value = this.get("transactionHash");
    return value.toBytes();
  }

  set transactionHash(value: Bytes) {
    this.set("transactionHash", Value.fromBytes(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }
}

export class AttestationRevoked extends Entity {
  constructor(id: string) {
    this.entries = new Array(0);
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save AttestationRevoked entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save AttestationRevoked entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("AttestationRevoked", id.toString(), this);
  }

  static load(id: string): AttestationRevoked | null {
    return store.get("AttestationRevoked", id) as AttestationRevoked | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get link(): Bytes {
    let value = this.get("link");
    return value.toBytes();
  }

  set link(value: Bytes) {
    this.set("link", Value.fromBytes(value));
  }

  get attester(): Bytes {
    let value = this.get("attester");
    return value.toBytes();
  }

  set attester(value: Bytes) {
    this.set("attester", Value.fromBytes(value));
  }

  get transactionHash(): Bytes {
    let value = this.get("transactionHash");
    return value.toBytes();
  }

  set transactionHash(value: Bytes) {
    this.set("transactionHash", Value.fromBytes(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }
}

export class TokenEscrowMarketplaceChanged extends Entity {
  constructor(id: string) {
    this.entries = new Array(0);
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id !== null,
      "Cannot save TokenEscrowMarketplaceChanged entity without an ID"
    );
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save TokenEscrowMarketplaceChanged entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("TokenEscrowMarketplaceChanged", id.toString(), this);
  }

  static load(id: string): TokenEscrowMarketplaceChanged | null {
    return store.get(
      "TokenEscrowMarketplaceChanged",
      id
    ) as TokenEscrowMarketplaceChanged | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get oldTokenEscrowMarketplace(): Bytes {
    let value = this.get("oldTokenEscrowMarketplace");
    return value.toBytes();
  }

  set oldTokenEscrowMarketplace(value: Bytes) {
    this.set("oldTokenEscrowMarketplace", Value.fromBytes(value));
  }

  get newTokenEscrowMarketplace(): Bytes {
    let value = this.get("newTokenEscrowMarketplace");
    return value.toBytes();
  }

  set newTokenEscrowMarketplace(value: Bytes) {
    this.set("newTokenEscrowMarketplace", Value.fromBytes(value));
  }

  get transactionHash(): Bytes {
    let value = this.get("transactionHash");
    return value.toBytes();
  }

  set transactionHash(value: Bytes) {
    this.set("transactionHash", Value.fromBytes(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }
}

export class TokenMarketplaceWithdrawal extends Entity {
  constructor(id: string) {
    this.entries = new Array(0);
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id !== null,
      "Cannot save TokenMarketplaceWithdrawal entity without an ID"
    );
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save TokenMarketplaceWithdrawal entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("TokenMarketplaceWithdrawal", id.toString(), this);
  }

  static load(id: string): TokenMarketplaceWithdrawal | null {
    return store.get(
      "TokenMarketplaceWithdrawal",
      id
    ) as TokenMarketplaceWithdrawal | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get escrowPayer(): Bytes {
    let value = this.get("escrowPayer");
    return value.toBytes();
  }

  set escrowPayer(value: Bytes) {
    this.set("escrowPayer", Value.fromBytes(value));
  }

  get amount(): BigInt {
    let value = this.get("amount");
    return value.toBigInt();
  }

  set amount(value: BigInt) {
    this.set("amount", Value.fromBigInt(value));
  }

  get transactionHash(): Bytes {
    let value = this.get("transactionHash");
    return value.toBytes();
  }

  set transactionHash(value: Bytes) {
    this.set("transactionHash", Value.fromBytes(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }
}

export class TokenMarketplaceEscrowPayment extends Entity {
  constructor(id: string) {
    this.entries = new Array(0);
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id !== null,
      "Cannot save TokenMarketplaceEscrowPayment entity without an ID"
    );
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save TokenMarketplaceEscrowPayment entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("TokenMarketplaceEscrowPayment", id.toString(), this);
  }

  static load(id: string): TokenMarketplaceEscrowPayment | null {
    return store.get(
      "TokenMarketplaceEscrowPayment",
      id
    ) as TokenMarketplaceEscrowPayment | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get escrowPayer(): Bytes {
    let value = this.get("escrowPayer");
    return value.toBytes();
  }

  set escrowPayer(value: Bytes) {
    this.set("escrowPayer", Value.fromBytes(value));
  }

  get escrowPayee(): Bytes {
    let value = this.get("escrowPayee");
    return value.toBytes();
  }

  set escrowPayee(value: Bytes) {
    this.set("escrowPayee", Value.fromBytes(value));
  }

  get amount(): BigInt {
    let value = this.get("amount");
    return value.toBigInt();
  }

  set amount(value: BigInt) {
    this.set("amount", Value.fromBigInt(value));
  }

  get transactionHash(): Bytes {
    let value = this.get("transactionHash");
    return value.toBytes();
  }

  set transactionHash(value: Bytes) {
    this.set("transactionHash", Value.fromBytes(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }
}

export class TokenMarketplaceDeposit extends Entity {
  constructor(id: string) {
    this.entries = new Array(0);
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id !== null,
      "Cannot save TokenMarketplaceDeposit entity without an ID"
    );
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save TokenMarketplaceDeposit entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("TokenMarketplaceDeposit", id.toString(), this);
  }

  static load(id: string): TokenMarketplaceDeposit | null {
    return store.get(
      "TokenMarketplaceDeposit",
      id
    ) as TokenMarketplaceDeposit | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get escrowPayer(): Bytes {
    let value = this.get("escrowPayer");
    return value.toBytes();
  }

  set escrowPayer(value: Bytes) {
    this.set("escrowPayer", Value.fromBytes(value));
  }

  get amount(): BigInt {
    let value = this.get("amount");
    return value.toBigInt();
  }

  set amount(value: BigInt) {
    this.set("amount", Value.fromBigInt(value));
  }

  get transactionHash(): Bytes {
    let value = this.get("transactionHash");
    return value.toBytes();
  }

  set transactionHash(value: Bytes) {
    this.set("transactionHash", Value.fromBytes(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }
}
