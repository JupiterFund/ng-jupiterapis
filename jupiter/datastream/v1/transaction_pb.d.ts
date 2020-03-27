// package: jupiter.datastream.v1
// file: jupiter/datastream/v1/transaction.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as jupiter_datastream_v1_market_pb from "../../../jupiter/datastream/v1/market_pb";

export class Transaction extends jspb.Message {
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

  getTradetime(): number;
  setTradetime(value: number): void;

  getTradeindex(): number;
  setTradeindex(value: number): void;

  getTradechannel(): number;
  setTradechannel(value: number): void;

  getTradeprice(): number;
  setTradeprice(value: number): void;

  getTradeqty(): number;
  setTradeqty(value: number): void;

  getTrademoney(): number;
  setTrademoney(value: number): void;

  getTradebuyno(): number;
  setTradebuyno(value: number): void;

  getTradesellno(): number;
  setTradesellno(value: number): void;

  getTradetype(): Transaction.TypeMap[keyof Transaction.TypeMap];
  setTradetype(value: Transaction.TypeMap[keyof Transaction.TypeMap]): void;

  getTradebsflag(): Transaction.BSFlagMap[keyof Transaction.BSFlagMap];
  setTradebsflag(value: Transaction.BSFlagMap[keyof Transaction.BSFlagMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Transaction.AsObject;
  static toObject(includeInstance: boolean, msg: Transaction): Transaction.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Transaction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Transaction;
  static deserializeBinaryFromReader(message: Transaction, reader: jspb.BinaryReader): Transaction;
}

export namespace Transaction {
  export type AsObject = {
    code: string,
    market: jupiter_datastream_v1_market_pb.MarketEnum.MarketMap[keyof jupiter_datastream_v1_market_pb.MarketEnum.MarketMap],
    date: number,
    time: number,
    timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    tradedate: number,
    tradetime: number,
    tradeindex: number,
    tradechannel: number,
    tradeprice: number,
    tradeqty: number,
    trademoney: number,
    tradebuyno: number,
    tradesellno: number,
    tradetype: Transaction.TypeMap[keyof Transaction.TypeMap],
    tradebsflag: Transaction.BSFlagMap[keyof Transaction.BSFlagMap],
  }

  export interface TypeMap {
    C: 0;
    F: 1;
  }

  export const Type: TypeMap;

  export interface BSFlagMap {
    BUY: 0;
    SELL: 1;
    UNKNOWN: 2;
  }

  export const BSFlag: BSFlagMap;
}

