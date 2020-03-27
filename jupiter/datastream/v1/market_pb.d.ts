// package: jupiter.datastream.v1
// file: jupiter/datastream/v1/market.proto

import * as jspb from "google-protobuf";

export class MarketEnum extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MarketEnum.AsObject;
  static toObject(includeInstance: boolean, msg: MarketEnum): MarketEnum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MarketEnum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MarketEnum;
  static deserializeBinaryFromReader(message: MarketEnum, reader: jspb.BinaryReader): MarketEnum;
}

export namespace MarketEnum {
  export type AsObject = {
  }

  export interface MarketMap {
    SHANGHAI: 0;
    SHENZHEN: 1;
    HONGKONG: 2;
  }

  export const Market: MarketMap;
}

