// package: jupiter.strategy.common.v1
// file: jupiter/strategy/common/v1/factor.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";
import * as jupiter_datastream_v1_market_pb from "../../../../jupiter/datastream/v1/market_pb";

export class Factor extends jspb.Message {
  getCode(): string;
  setCode(value: string): void;

  getMarket(): jupiter_datastream_v1_market_pb.MarketEnum.MarketMap[keyof jupiter_datastream_v1_market_pb.MarketEnum.MarketMap];
  setMarket(value: jupiter_datastream_v1_market_pb.MarketEnum.MarketMap[keyof jupiter_datastream_v1_market_pb.MarketEnum.MarketMap]): void;

  getDate(): number;
  setDate(value: number): void;

  getTime(): number;
  setTime(value: number): void;

  hasTimestamp(): boolean;
  clearTimestamp(): void;
  getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getName(): string;
  setName(value: string): void;

  hasValue(): boolean;
  clearValue(): void;
  getValue(): google_protobuf_struct_pb.Value | undefined;
  setValue(value?: google_protobuf_struct_pb.Value): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Factor.AsObject;
  static toObject(includeInstance: boolean, msg: Factor): Factor.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Factor, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Factor;
  static deserializeBinaryFromReader(message: Factor, reader: jspb.BinaryReader): Factor;
}

export namespace Factor {
  export type AsObject = {
    code: string,
    market: jupiter_datastream_v1_market_pb.MarketEnum.MarketMap[keyof jupiter_datastream_v1_market_pb.MarketEnum.MarketMap],
    date: number,
    time: number,
    timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    name: string,
    value?: google_protobuf_struct_pb.Value.AsObject,
  }
}

