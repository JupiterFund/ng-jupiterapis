// package: jupiter.monitoring.dashboard.v1
// file: jupiter/monitoring/dashboard/v1/dashboards_service.proto

var jupiter_monitoring_dashboard_v1_dashboards_service_pb = require("../../../../jupiter/monitoring/dashboard/v1/dashboards_service_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var DashboardsService = (function () {
  function DashboardsService() {}
  DashboardsService.serviceName = "jupiter.monitoring.dashboard.v1.DashboardsService";
  return DashboardsService;
}());

DashboardsService.GetByteStream = {
  methodName: "GetByteStream",
  service: DashboardsService,
  requestStream: false,
  responseStream: true,
  requestType: jupiter_monitoring_dashboard_v1_dashboards_service_pb.GetByteStreamRequest,
  responseType: jupiter_monitoring_dashboard_v1_dashboards_service_pb.GetByteStreamResponse
};

exports.DashboardsService = DashboardsService;

function DashboardsServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

DashboardsServiceClient.prototype.getByteStream = function getByteStream(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(DashboardsService.GetByteStream, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onMessage: function (responseMessage) {
      listeners.data.forEach(function (handler) {
        handler(responseMessage);
      });
    },
    onEnd: function (status, statusMessage, trailers) {
      listeners.status.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners.end.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners = null;
    }
  });
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

exports.DashboardsServiceClient = DashboardsServiceClient;

