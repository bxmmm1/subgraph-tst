// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Pool extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Pool entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Pool must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Pool", id.toString(), this);
    }
  }

  static load(id: string): Pool | null {
    return changetype<Pool | null>(store.get("Pool", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get pid(): BigInt {
    let value = this.get("pid");
    return value!.toBigInt();
  }

  set pid(value: BigInt) {
    this.set("pid", Value.fromBigInt(value));
  }

  get lpToken(): Bytes {
    let value = this.get("lpToken");
    return value!.toBytes();
  }

  set lpToken(value: Bytes) {
    this.set("lpToken", Value.fromBytes(value));
  }

  get token(): Bytes {
    let value = this.get("token");
    return value!.toBytes();
  }

  set token(value: Bytes) {
    this.set("token", Value.fromBytes(value));
  }

  get gauge(): Bytes {
    let value = this.get("gauge");
    return value!.toBytes();
  }

  set gauge(value: Bytes) {
    this.set("gauge", Value.fromBytes(value));
  }

  get balRewards(): Bytes {
    let value = this.get("balRewards");
    return value!.toBytes();
  }

  set balRewards(value: Bytes) {
    this.set("balRewards", Value.fromBytes(value));
  }

  get stash(): Bytes {
    let value = this.get("stash");
    return value!.toBytes();
  }

  set stash(value: Bytes) {
    this.set("stash", Value.fromBytes(value));
  }

  get shutdown(): boolean {
    let value = this.get("shutdown");
    return value!.toBoolean();
  }

  set shutdown(value: boolean) {
    this.set("shutdown", Value.fromBoolean(value));
  }
}

export class Investment extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Investment entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Investment must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Investment", id.toString(), this);
    }
  }

  static load(id: string): Investment | null {
    return changetype<Investment | null>(store.get("Investment", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get user(): string {
    let value = this.get("user");
    return value!.toString();
  }

  set user(value: string) {
    this.set("user", Value.fromString(value));
  }

  get pool(): string {
    let value = this.get("pool");
    return value!.toString();
  }

  set pool(value: string) {
    this.set("pool", Value.fromString(value));
  }

  get amount(): BigInt {
    let value = this.get("amount");
    return value!.toBigInt();
  }

  set amount(value: BigInt) {
    this.set("amount", Value.fromBigInt(value));
  }

  get lastUpdated(): BigInt {
    let value = this.get("lastUpdated");
    return value!.toBigInt();
  }

  set lastUpdated(value: BigInt) {
    this.set("lastUpdated", Value.fromBigInt(value));
  }
}

export class User extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save User entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type User must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("User", id.toString(), this);
    }
  }

  static load(id: string): User | null {
    return changetype<User | null>(store.get("User", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get investments(): Array<string> | null {
    let value = this.get("investments");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set investments(value: Array<string> | null) {
    if (!value) {
      this.unset("investments");
    } else {
      this.set("investments", Value.fromStringArray(<Array<string>>value));
    }
  }
}

export class BaseRewardPool extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save BaseRewardPool entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type BaseRewardPool must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("BaseRewardPool", id.toString(), this);
    }
  }

  static load(id: string): BaseRewardPool | null {
    return changetype<BaseRewardPool | null>(store.get("BaseRewardPool", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }
}
