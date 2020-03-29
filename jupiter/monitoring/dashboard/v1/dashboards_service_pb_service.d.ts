// package: jupiter.monitoring.dashboard.v1
// file: jupiter/monitoring/dashboard/v1/dashboards_service.proto

import * as jupiter_monitoring_dashboard_v1_dashboards_service_pb from "../../../../jupiter/monitoring/dashboard/v1/dashboards_service_pb";
import {grpc} from "@improbable-eng/grpc-web";

type DashboardsServiceGetByteStream = {
  readonly methodName: string;
  readonly service: typeof DashboardsService;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof jupiter_monitoring_dashboard_v1_dashboards_service_pb.GetByteStreamRequest;
  readonly responseType: typeof jupiter_monitoring_dashboard_v1_dashboards_service_pb.GetByteStreamResponse;
};

export class DashboardsService {
  static readonly serviceName: string;
  static readonly GetByteStream: DashboardsServiceGetByteStream;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class DashboardsServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getByteStream(requestMessage: jupiter_monitoring_dashboard_v1_dashboards_service_pb.GetByteStreamRequest, metadata?: grpc.Metadata): ResponseStream<jupiter_monitoring_dashboard_v1_dashboards_service_pb.GetByteStreamResponse>;
}

