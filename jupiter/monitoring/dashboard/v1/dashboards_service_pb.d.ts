// package: jupiter.monitoring.dashboard.v1
// file: jupiter/monitoring/dashboard/v1/dashboards_service.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class GetFactorStreamResponse extends jspb.Message {
  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFactorStreamResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetFactorStreamResponse): GetFactorStreamResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetFactorStreamResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFactorStreamResponse;
  static deserializeBinaryFromReader(message: GetFactorStreamResponse, reader: jspb.BinaryReader): GetFactorStreamResponse;
}

export namespace GetFactorStreamResponse {
  export type AsObject = {
    data: Uint8Array | string,
  }
}

