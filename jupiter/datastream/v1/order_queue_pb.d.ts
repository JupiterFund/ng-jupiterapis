// package: jupiter.datastream.v1
// file: jupiter/datastream/v1/order_queue.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as jupiter_datastream_v1_market_pb from "../../../jupiter/datastream/v1/market_pb";

export class OrderQueue extends jspb.Message {
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

  getTradedate(): number;
  setTradedate(value: number): void;

  getOrderside(): OrderQueue.SideMap[keyof OrderQueue.SideMap];
  setOrderside(value: OrderQueue.SideMap[keyof OrderQueue.SideMap]): void;

  getOrderprice(): number;
  setOrderprice(value: number): void;

  getNumorders(): number;
  setNumorders(value: number): void;

  clearBidlevelqueueList(): void;
  getBidlevelqueueList(): Array<number>;
  setBidlevelqueueList(value: Array<number>): void;
  addBidlevelqueue(value: number, index?: number): number;

  clearOfferlevelqueueList(): void;
  getOfferlevelqueueList(): Array<number>;
  setOfferlevelqueueList(value: Array<number>): void;
  addOfferlevelqueue(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrderQueue.AsObject;
  static toObject(includeInstance: boolean, msg: OrderQueue): OrderQueue.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OrderQueue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrderQueue;
  static deserializeBinaryFromReader(message: OrderQueue, reader: jspb.BinaryReader): OrderQueue;
}

export namespace OrderQueue {
  export type AsObject = {
    code: string,
    market: jupiter_datastream_v1_market_pb.MarketEnum.MarketMap[keyof jupiter_datastream_v1_market_pb.MarketEnum.MarketMap],
    date: number,
    time: number,
    timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    tradedate: number,
    orderside: OrderQueue.SideMap[keyof OrderQueue.SideMap],
    orderprice: number,
    numorders: number,
    bidlevelqueueList: Array<number>,
    offerlevelqueueList: Array<number>,
  }

  export interface SideMap {
    BID: 0;
    OFFER: 1;
  }

  export const Side: SideMap;
}

