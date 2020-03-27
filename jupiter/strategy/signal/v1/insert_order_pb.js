// source: jupiter/strategy/signal/v1/insert_order.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
var jupiter_strategy_common_v1_direction_pb = require('../../../../jupiter/strategy/common/v1/direction_pb.js');
goog.object.extend(proto, jupiter_strategy_common_v1_direction_pb);
var jupiter_strategy_common_v1_offset_pb = require('../../../../jupiter/strategy/common/v1/offset_pb.js');
goog.object.extend(proto, jupiter_strategy_common_v1_offset_pb);
var jupiter_strategy_common_v1_order_type_pb = require('../../../../jupiter/strategy/common/v1/order_type_pb.js');
goog.object.extend(proto, jupiter_strategy_common_v1_order_type_pb);
var jupiter_datastream_v1_market_pb = require('../../../../jupiter/datastream/v1/market_pb.js');
goog.object.extend(proto, jupiter_datastream_v1_market_pb);
goog.exportSymbol('proto.jupiter.strategy.signal.v1.InsertOrder', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.jupiter.strategy.signal.v1.InsertOrder = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.jupiter.strategy.signal.v1.InsertOrder, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.jupiter.strategy.signal.v1.InsertOrder.displayName = 'proto.jupiter.strategy.signal.v1.InsertOrder';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.jupiter.strategy.signal.v1.InsertOrder.prototype.toObject = function(opt_includeInstance) {
  return proto.jupiter.strategy.signal.v1.InsertOrder.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.jupiter.strategy.signal.v1.InsertOrder} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.jupiter.strategy.signal.v1.InsertOrder.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, ""),
    market: jspb.Message.getFieldWithDefault(msg, 2, 0),
    date: jspb.Message.getFieldWithDefault(msg, 3, 0),
    time: jspb.Message.getFieldWithDefault(msg, 4, 0),
    timestamp: (f = msg.getTimestamp()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    direction: jspb.Message.getFieldWithDefault(msg, 6, 0),
    offset: jspb.Message.getFieldWithDefault(msg, 7, 0),
    ordertype: jspb.Message.getFieldWithDefault(msg, 8, 0),
    limitprice: jspb.Message.getFloatingPointFieldWithDefault(msg, 9, 0.0),
    stopprice: jspb.Message.getFloatingPointFieldWithDefault(msg, 10, 0.0),
    volume: jspb.Message.getFieldWithDefault(msg, 11, 0),
    algorithm: jspb.Message.getFieldWithDefault(msg, 12, ""),
    exchangeid: jspb.Message.getFieldWithDefault(msg, 13, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.jupiter.strategy.signal.v1.InsertOrder}
 */
proto.jupiter.strategy.signal.v1.InsertOrder.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.jupiter.strategy.signal.v1.InsertOrder;
  return proto.jupiter.strategy.signal.v1.InsertOrder.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.jupiter.strategy.signal.v1.InsertOrder} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.jupiter.strategy.signal.v1.InsertOrder}
 */
proto.jupiter.strategy.signal.v1.InsertOrder.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCode(value);
      break;
    case 2:
      var value = /** @type {!proto.jupiter.datastream.v1.MarketEnum.Market} */ (reader.readEnum());
      msg.setMarket(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setDate(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTime(value);
      break;
    case 5:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTimestamp(value);
      break;
    case 6:
      var value = /** @type {!proto.jupiter.strategy.common.v1.DirectionEnum.Direction} */ (reader.readEnum());
      msg.setDirection(value);
      break;
    case 7:
      var value = /** @type {!proto.jupiter.strategy.common.v1.OffsetEnum.Offset} */ (reader.readEnum());
      msg.setOffset(value);
      break;
    case 8:
      var value = /** @type {!proto.jupiter.strategy.common.v1.OrderTypeEnum.OrderType} */ (reader.readEnum());
      msg.setOrdertype(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLimitprice(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setStopprice(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setVolume(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setAlgorithm(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setExchangeid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.jupiter.strategy.signal.v1.InsertOrder.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.jupiter.strategy.signal.v1.InsertOrder.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.jupiter.strategy.signal.v1.InsertOrder} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.jupiter.strategy.signal.v1.InsertOrder.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMarket();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getDate();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getTime();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getTimestamp();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getDirection();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
  f = message.getOffset();
  if (f !== 0.0) {
    writer.writeEnum(
      7,
      f
    );
  }
  f = message.getOrdertype();
  if (f !== 0.0) {
    writer.writeEnum(
      8,
      f
    );
  }
  f = message.getLimitprice();
  if (f !== 0.0) {
    writer.writeDouble(
      9,
      f
    );
  }
  f = message.getStopprice();
  if (f !== 0.0) {
    writer.writeDouble(
      10,
      f
    );
  }
  f = message.getVolume();
  if (f !== 0) {
    writer.writeUint64(
      11,
      f
    );
  }
  f = message.getAlgorithm();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getExchangeid();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
};


/**
 * optional string code = 1;
 * @return {string}
 */
proto.jupiter.strategy.signal.v1.InsertOrder.prototype.getCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.jupiter.strategy.signal.v1.InsertOrder} returns this
 */
proto.jupiter.strategy.signal.v1.InsertOrder.prototype.setCode = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional jupiter.datastream.v1.MarketEnum.Market market = 2;
 * @return {!proto.jupiter.datastream.v1.MarketEnum.Market}
 */
proto.jupiter.strategy.signal.v1.InsertOrder.prototype.getMarket = function() {
  return /** @type {!proto.jupiter.datastream.v1.MarketEnum.Market} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.jupiter.datastream.v1.MarketEnum.Market} value
 * @return {!proto.jupiter.strategy.signal.v1.InsertOrder} returns this
 */
proto.jupiter.strategy.signal.v1.InsertOrder.prototype.setMarket = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional uint32 date = 3;
 * @return {number}
 */
proto.jupiter.strategy.signal.v1.InsertOrder.prototype.getDate = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.jupiter.strategy.signal.v1.InsertOrder} returns this
 */
proto.jupiter.strategy.signal.v1.InsertOrder.prototype.setDate = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint32 time = 4;
 * @return {number}
 */
proto.jupiter.strategy.signal.v1.InsertOrder.prototype.getTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.jupiter.strategy.signal.v1.InsertOrder} returns this
 */
proto.jupiter.strategy.signal.v1.InsertOrder.prototype.setTime = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional google.protobuf.Timestamp timestamp = 5;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.jupiter.strategy.signal.v1.InsertOrder.prototype.getTimestamp = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 5));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.jupiter.strategy.signal.v1.InsertOrder} returns this
*/
proto.jupiter.strategy.signal.v1.InsertOrder.prototype.setTimestamp = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.jupiter.strategy.signal.v1.InsertOrder} returns this
 */
proto.jupiter.strategy.signal.v1.InsertOrder.prototype.clearTimestamp = function() {
  return this.setTimestamp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.jupiter.strategy.signal.v1.InsertOrder.prototype.hasTimestamp = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional jupiter.strategy.common.v1.DirectionEnum.Direction direction = 6;
 * @return {!proto.jupiter.strategy.common.v1.DirectionEnum.Direction}
 */
proto.jupiter.strategy.signal.v1.InsertOrder.prototype.getDirection = function() {
  return /** @type {!proto.jupiter.strategy.common.v1.DirectionEnum.Direction} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.jupiter.strategy.common.v1.DirectionEnum.Direction} value
 * @return {!proto.jupiter.strategy.signal.v1.InsertOrder} returns this
 */
proto.jupiter.strategy.signal.v1.InsertOrder.prototype.setDirection = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};


/**
 * optional jupiter.strategy.common.v1.OffsetEnum.Offset offset = 7;
 * @return {!proto.jupiter.strategy.common.v1.OffsetEnum.Offset}
 */
proto.jupiter.strategy.signal.v1.InsertOrder.prototype.getOffset = function() {
  return /** @type {!proto.jupiter.strategy.common.v1.OffsetEnum.Offset} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {!proto.jupiter.strategy.common.v1.OffsetEnum.Offset} value
 * @return {!proto.jupiter.strategy.signal.v1.InsertOrder} returns this
 */
proto.jupiter.strategy.signal.v1.InsertOrder.prototype.setOffset = function(value) {
  return jspb.Message.setProto3EnumField(this, 7, value);
};


/**
 * optional jupiter.strategy.common.v1.OrderTypeEnum.OrderType OrderType = 8;
 * @return {!proto.jupiter.strategy.common.v1.OrderTypeEnum.OrderType}
 */
proto.jupiter.strategy.signal.v1.InsertOrder.prototype.getOrdertype = function() {
  return /** @type {!proto.jupiter.strategy.common.v1.OrderTypeEnum.OrderType} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {!proto.jupiter.strategy.common.v1.OrderTypeEnum.OrderType} value
 * @return {!proto.jupiter.strategy.signal.v1.InsertOrder} returns this
 */
proto.jupiter.strategy.signal.v1.InsertOrder.prototype.setOrdertype = function(value) {
  return jspb.Message.setProto3EnumField(this, 8, value);
};


/**
 * optional double limitPrice = 9;
 * @return {number}
 */
proto.jupiter.strategy.signal.v1.InsertOrder.prototype.getLimitprice = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 9, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.jupiter.strategy.signal.v1.InsertOrder} returns this
 */
proto.jupiter.strategy.signal.v1.InsertOrder.prototype.setLimitprice = function(value) {
  return jspb.Message.setProto3FloatField(this, 9, value);
};


/**
 * optional double stopPrice = 10;
 * @return {number}
 */
proto.jupiter.strategy.signal.v1.InsertOrder.prototype.getStopprice = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 10, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.jupiter.strategy.signal.v1.InsertOrder} returns this
 */
proto.jupiter.strategy.signal.v1.InsertOrder.prototype.setStopprice = function(value) {
  return jspb.Message.setProto3FloatField(this, 10, value);
};


/**
 * optional uint64 volume = 11;
 * @return {number}
 */
proto.jupiter.strategy.signal.v1.InsertOrder.prototype.getVolume = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.jupiter.strategy.signal.v1.InsertOrder} returns this
 */
proto.jupiter.strategy.signal.v1.InsertOrder.prototype.setVolume = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * optional string algorithm = 12;
 * @return {string}
 */
proto.jupiter.strategy.signal.v1.InsertOrder.prototype.getAlgorithm = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.jupiter.strategy.signal.v1.InsertOrder} returns this
 */
proto.jupiter.strategy.signal.v1.InsertOrder.prototype.setAlgorithm = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional string exchangeID = 13;
 * @return {string}
 */
proto.jupiter.strategy.signal.v1.InsertOrder.prototype.getExchangeid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.jupiter.strategy.signal.v1.InsertOrder} returns this
 */
proto.jupiter.strategy.signal.v1.InsertOrder.prototype.setExchangeid = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


goog.object.extend(exports, proto.jupiter.strategy.signal.v1);
