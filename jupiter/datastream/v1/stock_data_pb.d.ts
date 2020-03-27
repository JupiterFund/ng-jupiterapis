// package: jupiter.datastream.v1
// file: jupiter/datastream/v1/stock_data.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as jupiter_datastream_v1_market_pb from "../../../jupiter/datastream/v1/market_pb";

export class StockData extends jspb.Message {
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

  getInstrumentstatus(): string;
  setInstrumentstatus(value: string): void;

  getTradingphasecode(): string;
  setTradingphasecode(value: string): void;

  getNumtrades(): number;
  setNumtrades(value: number): void;

  getTotalvolumetrade(): number;
  setTotalvolumetrade(value: number): void;

  getTotalvaluetrade(): number;
  setTotalvaluetrade(value: number): void;

  getTotalbidqty(): number;
  setTotalbidqty(value: number): void;

  getTotalofferqty(): number;
  setTotalofferqty(value: number): void;

  getWeightedavgbidpx(): number;
  setWeightedavgbidpx(value: number): void;

  getWeightedavgofferpx(): number;
  setWeightedavgofferpx(value: number): void;

  getAltweightedavgbidpx(): number;
  setAltweightedavgbidpx(value: number): void;

  getAltweightedavgofferpx(): number;
  setAltweightedavgofferpx(value: number): void;

  getIopv(): number;
  setIopv(value: number): void;

  getYieldtomaturity(): number;
  setYieldtomaturity(value: number): void;

  getTotalwarrantexecqty(): number;
  setTotalwarrantexecqty(value: number): void;

  getWarlowerpx(): number;
  setWarlowerpx(value: number): void;

  getWarupperpx(): number;
  setWarupperpx(value: number): void;

  getEtfbuynumber(): number;
  setEtfbuynumber(value: number): void;

  getEtfbuyamount(): number;
  setEtfbuyamount(value: number): void;

  getEtfbuymoney(): number;
  setEtfbuymoney(value: number): void;

  getEtfsellnumber(): number;
  setEtfsellnumber(value: number): void;

  getEtfsellamount(): number;
  setEtfsellamount(value: number): void;

  getEtfsellmoney(): number;
  setEtfsellmoney(value: number): void;

  getWithdrawbuynumber(): number;
  setWithdrawbuynumber(value: number): void;

  getWithdrawbuyamount(): number;
  setWithdrawbuyamount(value: number): void;

  getWithdrawbuymoney(): number;
  setWithdrawbuymoney(value: number): void;

  getWithdrawsellnumber(): number;
  setWithdrawsellnumber(value: number): void;

  getWithdrawsellamount(): number;
  setWithdrawsellamount(value: number): void;

  getWithdrawsellmoney(): number;
  setWithdrawsellmoney(value: number): void;

  getTotalbidnumber(): number;
  setTotalbidnumber(value: number): void;

  getTotaloffernumber(): number;
  setTotaloffernumber(value: number): void;

  getBidtrademaxduration(): number;
  setBidtrademaxduration(value: number): void;

  getOffertrademaxduration(): number;
  setOffertrademaxduration(value: number): void;

  getNumbidorders(): number;
  setNumbidorders(value: number): void;

  getNumofferorders(): number;
  setNumofferorders(value: number): void;

  clearBidpriceList(): void;
  getBidpriceList(): Array<number>;
  setBidpriceList(value: Array<number>): void;
  addBidprice(value: number, index?: number): number;

  clearBidqtyList(): void;
  getBidqtyList(): Array<number>;
  setBidqtyList(value: Array<number>): void;
  addBidqty(value: number, index?: number): number;

  clearBidnumordersList(): void;
  getBidnumordersList(): Array<number>;
  setBidnumordersList(value: Array<number>): void;
  addBidnumorders(value: number, index?: number): number;

  clearOfferpriceList(): void;
  getOfferpriceList(): Array<number>;
  setOfferpriceList(value: Array<number>): void;
  addOfferprice(value: number, index?: number): number;

  clearOfferqtyList(): void;
  getOfferqtyList(): Array<number>;
  setOfferqtyList(value: Array<number>): void;
  addOfferqty(value: number, index?: number): number;

  clearOffernumordersList(): void;
  getOffernumordersList(): Array<number>;
  setOffernumordersList(value: Array<number>): void;
  addOffernumorders(value: number, index?: number): number;

  getPriceuplimit(): number;
  setPriceuplimit(value: number): void;

  getPricedownlimit(): number;
  setPricedownlimit(value: number): void;

  getPriceupdown1(): number;
  setPriceupdown1(value: number): void;

  getPriceupdown2(): number;
  setPriceupdown2(value: number): void;

  getPeratio1(): number;
  setPeratio1(value: number): void;

  getPeratio2(): number;
  setPeratio2(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StockData.AsObject;
  static toObject(includeInstance: boolean, msg: StockData): StockData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StockData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StockData;
  static deserializeBinaryFromReader(message: StockData, reader: jspb.BinaryReader): StockData;
}

export namespace StockData {
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
    instrumentstatus: string,
    tradingphasecode: string,
    numtrades: number,
    totalvolumetrade: number,
    totalvaluetrade: number,
    totalbidqty: number,
    totalofferqty: number,
    weightedavgbidpx: number,
    weightedavgofferpx: number,
    altweightedavgbidpx: number,
    altweightedavgofferpx: number,
    iopv: number,
    yieldtomaturity: number,
    totalwarrantexecqty: number,
    warlowerpx: number,
    warupperpx: number,
    etfbuynumber: number,
    etfbuyamount: number,
    etfbuymoney: number,
    etfsellnumber: number,
    etfsellamount: number,
    etfsellmoney: number,
    withdrawbuynumber: number,
    withdrawbuyamount: number,
    withdrawbuymoney: number,
    withdrawsellnumber: number,
    withdrawsellamount: number,
    withdrawsellmoney: number,
    totalbidnumber: number,
    totaloffernumber: number,
    bidtrademaxduration: number,
    offertrademaxduration: number,
    numbidorders: number,
    numofferorders: number,
    bidpriceList: Array<number>,
    bidqtyList: Array<number>,
    bidnumordersList: Array<number>,
    offerpriceList: Array<number>,
    offerqtyList: Array<number>,
    offernumordersList: Array<number>,
    priceuplimit: number,
    pricedownlimit: number,
    priceupdown1: number,
    priceupdown2: number,
    peratio1: number,
    peratio2: number,
  }
}

