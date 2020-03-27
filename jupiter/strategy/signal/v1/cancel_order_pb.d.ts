// package: jupiter.strategy.signal.v1
// file: jupiter/strategy/signal/v1/cancel_order.proto

import * as jspb from "google-protobuf";

export class CancelOrder extends jspb.Message {
  getFoo(): string;
  setFoo(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CancelOrder.AsObject;
  static toObject(includeInstance: boolean, msg: CancelOrder): CancelOrder.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CancelOrder, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CancelOrder;
  static deserializeBinaryFromReader(message: CancelOrder, reader: jspb.BinaryReader): CancelOrder;
}

export namespace CancelOrder {
  export type AsObject = {
    foo: string,
  }
}

