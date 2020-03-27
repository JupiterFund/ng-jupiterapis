// package: jupiter.datastream.v1
// file: jupiter/datastream/v1/future_data.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as jupiter_datastream_v1_market_pb from "../../../jupiter/datastream/v1/market_pb";

export class FutureData extends jspb.Message {
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

  getPreclosepx(): number;
  setPreclosepx(value: number): void;

  getOpenpx(): number;
  setOpenpx(value: number): void;

  getHighpx(): number;
  setHighpx(value: number): void;

  getLowpx(): number;
  setLowpx(value: number): void;

  getLastpx(): number;
  setLastpx(value: number): void;

  getClosepx(): number;
  setClosepx(value: number): void;

  getTotalvolumetrade(): number;
  setTotalvolumetrade(value: number): void;

  getTotalvaluetrade(): number;
  setTotalvaluetrade(value: number): void;

  getPreopeninterest(): number;
  setPreopeninterest(value: number): void;

  getOpeninterest(): number;
  setOpeninterest(value: number): void;

  getPresettleprice(): number;
  setPresettleprice(value: number): void;

  getSettleprice(): number;
  setSettleprice(value: number): void;

  getPriceuplimit(): number;
  setPriceuplimit(value: number): void;

  getPricedownlimit(): number;
  setPricedownlimit(value: number): void;

  getPredelta(): number;
  setPredelta(value: number): void;

  getCurrdelta(): number;
  setCurrdelta(value: number): void;

  clearBidpriceList(): void;
  getBidpriceList(): Array<number>;
  setBidpriceList(value: Array<number>): void;
  addBidprice(value: number, index?: number): number;

  clearBidqtyList(): void;
  getBidqtyList(): Array<number>;
  setBidqtyList(value: Array<number>): void;
  addBidqty(value: number, index?: number): number;

  clearOfferpriceList(): void;
  getOfferpriceList(): Array<number>;
  setOfferpriceList(value: Array<number>): void;
  addOfferprice(value: number, index?: number): number;

  clearOfferqtyList(): void;
  getOfferqtyList(): Array<number>;
  setOfferqtyList(value: Array<number>): void;
  addOfferqty(value: number, index?: number): number;

  getAuctionprice(): number;
  setAuctionprice(value: number): void;

  getAuctionqty(): number;
  setAuctionqty(value: number): void;

  getAvgprice(): number;
  setAvgprice(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FutureData.AsObject;
  static toObject(includeInstance: boolean, msg: FutureData): FutureData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FutureData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FutureData;
  static deserializeBinaryFromReader(message: FutureData, reader: jspb.BinaryReader): FutureData;
}

export namespace FutureData {
  export type AsObject = {
    code: string,
    market: jupiter_datastream_v1_market_pb.MarketEnum.MarketMap[keyof jupiter_datastream_v1_market_pb.MarketEnum.MarketMap],
    date: number,
    time: number,
    timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    tradedate: number,
    preclosepx: number,
    openpx: number,
    highpx: number,
    lowpx: number,
    lastpx: number,
    closepx: number,
    totalvolumetrade: number,
    totalvaluetrade: number,
    preopeninterest: number,
    openinterest: number,
    presettleprice: number,
    settleprice: number,
    priceuplimit: number,
    pricedownlimit: number,
    predelta: number,
    currdelta: number,
    bidpriceList: Array<number>,
    bidqtyList: Array<number>,
    offerpriceList: Array<number>,
    offerqtyList: Array<number>,
    auctionprice: number,
    auctionqty: number,
    avgprice: number,
  }
}

