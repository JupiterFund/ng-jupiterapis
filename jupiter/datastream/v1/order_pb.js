// source: jupiter/datastream/v1/order.proto
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
var jupiter_datastream_v1_market_pb = require('../../../jupiter/datastream/v1/market_pb.js');
goog.object.extend(proto, jupiter_datastream_v1_market_pb);
goog.exportSymbol('proto.jupiter.datastream.v1.Order', null, global);
goog.exportSymbol('proto.jupiter.datastream.v1.Order.OrderCode', null, global);
goog.exportSymbol('proto.jupiter.datastream.v1.Order.OrderType', null, global);
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
proto.jupiter.datastream.v1.Order = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.jupiter.datastream.v1.Order, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.jupiter.datastream.v1.Order.displayName = 'proto.jupiter.datastream.v1.Order';
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
proto.jupiter.datastream.v1.Order.prototype.toObject = function(opt_includeInstance) {
  return proto.jupiter.datastream.v1.Order.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.jupiter.datastream.v1.Order} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.jupiter.datastream.v1.Order.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, ""),
    market: jspb.Message.getFieldWithDefault(msg, 2, 0),
    date: jspb.Message.getFieldWithDefault(msg, 3, 0),
    time: jspb.Message.getFieldWithDefault(msg, 4, 0),
    timestamp: (f = msg.getTimestamp()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    ordertime: jspb.Message.getFieldWithDefault(msg, 6, 0),
    orderindex: jspb.Message.getFieldWithDefault(msg, 7, 0),
    orderchannel: jspb.Message.getFieldWithDefault(msg, 8, 0),
    orderprice: jspb.Message.getFieldWithDefault(msg, 9, 0),
    orderqty: jspb.Message.getFieldWithDefault(msg, 10, 0),
    ordercode: jspb.Message.getFieldWithDefault(msg, 11, 0),
    ordertype: jspb.Message.getFieldWithDefault(msg, 12, 0)
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
 * @return {!proto.jupiter.datastream.v1.Order}
 */
proto.jupiter.datastream.v1.Order.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.jupiter.datastream.v1.Order;
  return proto.jupiter.datastream.v1.Order.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.jupiter.datastream.v1.Order} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.jupiter.datastream.v1.Order}
 */
proto.jupiter.datastream.v1.Order.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {number} */ (reader.readUint32());
      msg.setOrdertime(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setOrderindex(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setOrderchannel(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setOrderprice(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setOrderqty(value);
      break;
    case 11:
      var value = /** @type {!proto.jupiter.datastream.v1.Order.OrderCode} */ (reader.readEnum());
      msg.setOrdercode(value);
      break;
    case 12:
      var value = /** @type {!proto.jupiter.datastream.v1.Order.OrderType} */ (reader.readEnum());
      msg.setOrdertype(value);
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
proto.jupiter.datastream.v1.Order.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.jupiter.datastream.v1.Order.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.jupiter.datastream.v1.Order} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.jupiter.datastream.v1.Order.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getOrdertime();
  if (f !== 0) {
    writer.writeUint32(
      6,
      f
    );
  }
  f = message.getOrderindex();
  if (f !== 0) {
    writer.writeUint64(
      7,
      f
    );
  }
  f = message.getOrderchannel();
  if (f !== 0) {
    writer.writeUint32(
      8,
      f
    );
  }
  f = message.getOrderprice();
  if (f !== 0) {
    writer.writeUint32(
      9,
      f
    );
  }
  f = message.getOrderqty();
  if (f !== 0) {
    writer.writeUint64(
      10,
      f
    );
  }
  f = message.getOrdercode();
  if (f !== 0.0) {
    writer.writeEnum(
      11,
      f
    );
  }
  f = message.getOrdertype();
  if (f !== 0.0) {
    writer.writeEnum(
      12,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.jupiter.datastream.v1.Order.OrderCode = {
  B: 0,
  S: 1,
  G: 2,
  F: 3
};

/**
 * @enum {number}
 */
proto.jupiter.datastream.v1.Order.OrderType = {
  M: 0,
  L: 1,
  U: 2
};

/**
 * optional string code = 1;
 * @return {string}
 */
proto.jupiter.datastream.v1.Order.prototype.getCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.jupiter.datastream.v1.Order} returns this
 */
proto.jupiter.datastream.v1.Order.prototype.setCode = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional MarketEnum.Market market = 2;
 * @return {!proto.jupiter.datastream.v1.MarketEnum.Market}
 */
proto.jupiter.datastream.v1.Order.prototype.getMarket = function() {
  return /** @type {!proto.jupiter.datastream.v1.MarketEnum.Market} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.jupiter.datastream.v1.MarketEnum.Market} value
 * @return {!proto.jupiter.datastream.v1.Order} returns this
 */
proto.jupiter.datastream.v1.Order.prototype.setMarket = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional uint32 date = 3;
 * @return {number}
 */
proto.jupiter.datastream.v1.Order.prototype.getDate = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.jupiter.datastream.v1.Order} returns this
 */
proto.jupiter.datastream.v1.Order.prototype.setDate = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint32 time = 4;
 * @return {number}
 */
proto.jupiter.datastream.v1.Order.prototype.getTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.jupiter.datastream.v1.Order} returns this
 */
proto.jupiter.datastream.v1.Order.prototype.setTime = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional google.protobuf.Timestamp timestamp = 5;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.jupiter.datastream.v1.Order.prototype.getTimestamp = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 5));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.jupiter.datastream.v1.Order} returns this
*/
proto.jupiter.datastream.v1.Order.prototype.setTimestamp = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.jupiter.datastream.v1.Order} returns this
 */
proto.jupiter.datastream.v1.Order.prototype.clearTimestamp = function() {
  return this.setTimestamp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.jupiter.datastream.v1.Order.prototype.hasTimestamp = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional uint32 orderTime = 6;
 * @return {number}
 */
proto.jupiter.datastream.v1.Order.prototype.getOrdertime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.jupiter.datastream.v1.Order} returns this
 */
proto.jupiter.datastream.v1.Order.prototype.setOrdertime = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional uint64 orderIndex = 7;
 * @return {number}
 */
proto.jupiter.datastream.v1.Order.prototype.getOrderindex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.jupiter.datastream.v1.Order} returns this
 */
proto.jupiter.datastream.v1.Order.prototype.setOrderindex = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional uint32 orderChannel = 8;
 * @return {number}
 */
proto.jupiter.datastream.v1.Order.prototype.getOrderchannel = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.jupiter.datastream.v1.Order} returns this
 */
proto.jupiter.datastream.v1.Order.prototype.setOrderchannel = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional uint32 orderPrice = 9;
 * @return {number}
 */
proto.jupiter.datastream.v1.Order.prototype.getOrderprice = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.jupiter.datastream.v1.Order} returns this
 */
proto.jupiter.datastream.v1.Order.prototype.setOrderprice = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional uint64 orderQty = 10;
 * @return {number}
 */
proto.jupiter.datastream.v1.Order.prototype.getOrderqty = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.jupiter.datastream.v1.Order} returns this
 */
proto.jupiter.datastream.v1.Order.prototype.setOrderqty = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional OrderCode orderCode = 11;
 * @return {!proto.jupiter.datastream.v1.Order.OrderCode}
 */
proto.jupiter.datastream.v1.Order.prototype.getOrdercode = function() {
  return /** @type {!proto.jupiter.datastream.v1.Order.OrderCode} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {!proto.jupiter.datastream.v1.Order.OrderCode} value
 * @return {!proto.jupiter.datastream.v1.Order} returns this
 */
proto.jupiter.datastream.v1.Order.prototype.setOrdercode = function(value) {
  return jspb.Message.setProto3EnumField(this, 11, value);
};


/**
 * optional OrderType orderType = 12;
 * @return {!proto.jupiter.datastream.v1.Order.OrderType}
 */
proto.jupiter.datastream.v1.Order.prototype.getOrdertype = function() {
  return /** @type {!proto.jupiter.datastream.v1.Order.OrderType} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {!proto.jupiter.datastream.v1.Order.OrderType} value
 * @return {!proto.jupiter.datastream.v1.Order} returns this
 */
proto.jupiter.datastream.v1.Order.prototype.setOrdertype = function(value) {
  return jspb.Message.setProto3EnumField(this, 12, value);
};


goog.object.extend(exports, proto.jupiter.datastream.v1);
