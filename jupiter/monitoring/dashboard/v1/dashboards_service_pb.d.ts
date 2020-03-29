// package: jupiter.monitoring.dashboard.v1
// file: jupiter/monitoring/dashboard/v1/dashboards_service.proto

import * as jspb from "google-protobuf";

export class GetByteStreamRequest extends jspb.Message {
  getTopic(): string;
  setTopic(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetByteStreamRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetByteStreamRequest): GetByteStreamRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetByteStreamRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetByteStreamRequest;
  static deserializeBinaryFromReader(message: GetByteStreamRequest, reader: jspb.BinaryReader): GetByteStreamRequest;
}

export namespace GetByteStreamRequest {
  export type AsObject = {
    topic: string,
  }
}

export class GetByteStreamResponse extends jspb.Message {
  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetByteStreamResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetByteStreamResponse): GetByteStreamResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetByteStreamResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetByteStreamResponse;
  static deserializeBinaryFromReader(message: GetByteStreamResponse, reader: jspb.BinaryReader): GetByteStreamResponse;
}

export namespace GetByteStreamResponse {
  export type AsObject = {
    data: Uint8Array | string,
  }
}

