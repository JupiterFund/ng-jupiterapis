// package: jupiter.datastream.v1
// file: jupiter/datastream/v1/order.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as jupiter_datastream_v1_market_pb from "../../../jupiter/datastream/v1/market_pb";

export class Order extends jspb.Message {
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

  getOrdertime(): number;
  setOrdertime(value: number): void;

  getOrderindex(): number;
  setOrderindex(value: number): void;

  getOrderchannel(): number;
  setOrderchannel(value: number): void;

  getOrderprice(): number;
  setOrderprice(value: number): void;

  getOrderqty(): number;
  setOrderqty(value: number): void;

  getOrdercode(): Order.OrderCodeMap[keyof Order.OrderCodeMap];
  setOrdercode(value: Order.OrderCodeMap[keyof Order.OrderCodeMap]): void;

  getOrdertype(): Order.OrderTypeMap[keyof Order.OrderTypeMap];
  setOrdertype(value: Order.OrderTypeMap[keyof Order.OrderTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Order.AsObject;
  static toObject(includeInstance: boolean, msg: Order): Order.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Order, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Order;
  static deserializeBinaryFromReader(message: Order, reader: jspb.BinaryReader): Order;
}

export namespace Order {
  export type AsObject = {
    code: string,
    market: jupiter_datastream_v1_market_pb.MarketEnum.MarketMap[keyof jupiter_datastream_v1_market_pb.MarketEnum.MarketMap],
    date: number,
    time: number,
    timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    ordertime: number,
    orderindex: number,
    orderchannel: number,
    orderprice: number,
    orderqty: number,
    ordercode: Order.OrderCodeMap[keyof Order.OrderCodeMap],
    ordertype: Order.OrderTypeMap[keyof Order.OrderTypeMap],
  }

  export interface OrderCodeMap {
    B: 0;
    S: 1;
    G: 2;
    F: 3;
  }

  export const OrderCode: OrderCodeMap;

  export interface OrderTypeMap {
    M: 0;
    L: 1;
    U: 2;
  }

  export const OrderType: OrderTypeMap;
}

