// package: jupiter.strategy.signal.v1
// file: jupiter/strategy/signal/v1/insert_order.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as jupiter_strategy_common_v1_direction_pb from "../../../../jupiter/strategy/common/v1/direction_pb";
import * as jupiter_strategy_common_v1_offset_pb from "../../../../jupiter/strategy/common/v1/offset_pb";
import * as jupiter_strategy_common_v1_order_type_pb from "../../../../jupiter/strategy/common/v1/order_type_pb";
import * as jupiter_datastream_v1_market_pb from "../../../../jupiter/datastream/v1/market_pb";

export class InsertOrder extends jspb.Message {
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

  getDirection(): jupiter_strategy_common_v1_direction_pb.DirectionEnum.DirectionMap[keyof jupiter_strategy_common_v1_direction_pb.DirectionEnum.DirectionMap];
  setDirection(value: jupiter_strategy_common_v1_direction_pb.DirectionEnum.DirectionMap[keyof jupiter_strategy_common_v1_direction_pb.DirectionEnum.DirectionMap]): void;

  getOffset(): jupiter_strategy_common_v1_offset_pb.OffsetEnum.OffsetMap[keyof jupiter_strategy_common_v1_offset_pb.OffsetEnum.OffsetMap];
  setOffset(value: jupiter_strategy_common_v1_offset_pb.OffsetEnum.OffsetMap[keyof jupiter_strategy_common_v1_offset_pb.OffsetEnum.OffsetMap]): void;

  getOrdertype(): jupiter_strategy_common_v1_order_type_pb.OrderTypeEnum.OrderTypeMap[keyof jupiter_strategy_common_v1_order_type_pb.OrderTypeEnum.OrderTypeMap];
  setOrdertype(value: jupiter_strategy_common_v1_order_type_pb.OrderTypeEnum.OrderTypeMap[keyof jupiter_strategy_common_v1_order_type_pb.OrderTypeEnum.OrderTypeMap]): void;

  getLimitprice(): number;
  setLimitprice(value: number): void;

  getStopprice(): number;
  setStopprice(value: number): void;

  getVolume(): number;
  setVolume(value: number): void;

  getAlgorithm(): string;
  setAlgorithm(value: string): void;

  getExchangeid(): string;
  setExchangeid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InsertOrder.AsObject;
  static toObject(includeInstance: boolean, msg: InsertOrder): InsertOrder.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InsertOrder, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InsertOrder;
  static deserializeBinaryFromReader(message: InsertOrder, reader: jspb.BinaryReader): InsertOrder;
}

export namespace InsertOrder {
  export type AsObject = {
    code: string,
    market: jupiter_datastream_v1_market_pb.MarketEnum.MarketMap[keyof jupiter_datastream_v1_market_pb.MarketEnum.MarketMap],
    date: number,
    time: number,
    timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    direction: jupiter_strategy_common_v1_direction_pb.DirectionEnum.DirectionMap[keyof jupiter_strategy_common_v1_direction_pb.DirectionEnum.DirectionMap],
    offset: jupiter_strategy_common_v1_offset_pb.OffsetEnum.OffsetMap[keyof jupiter_strategy_common_v1_offset_pb.OffsetEnum.OffsetMap],
    ordertype: jupiter_strategy_common_v1_order_type_pb.OrderTypeEnum.OrderTypeMap[keyof jupiter_strategy_common_v1_order_type_pb.OrderTypeEnum.OrderTypeMap],
    limitprice: number,
    stopprice: number,
    volume: number,
    algorithm: string,
    exchangeid: string,
  }
}

