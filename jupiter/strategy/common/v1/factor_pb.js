// source: jupiter/strategy/common/v1/factor.proto
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
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');
goog.object.extend(proto, google_protobuf_struct_pb);
var jupiter_datastream_v1_market_pb = require('../../../../jupiter/datastream/v1/market_pb.js');
goog.object.extend(proto, jupiter_datastream_v1_market_pb);
goog.exportSymbol('proto.jupiter.strategy.common.v1.Factor', null, global);
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
proto.jupiter.strategy.common.v1.Factor = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.jupiter.strategy.common.v1.Factor, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.jupiter.strategy.common.v1.Factor.displayName = 'proto.jupiter.strategy.common.v1.Factor';
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
proto.jupiter.strategy.common.v1.Factor.prototype.toObject = function(opt_includeInstance) {
  return proto.jupiter.strategy.common.v1.Factor.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.jupiter.strategy.common.v1.Factor} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.jupiter.strategy.common.v1.Factor.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, ""),
    market: jspb.Message.getFieldWithDefault(msg, 2, 0),
    date: jspb.Message.getFieldWithDefault(msg, 3, 0),
    time: jspb.Message.getFieldWithDefault(msg, 4, 0),
    timestamp: (f = msg.getTimestamp()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    name: jspb.Message.getFieldWithDefault(msg, 6, ""),
    value: (f = msg.getValue()) && google_protobuf_struct_pb.Value.toObject(includeInstance, f)
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
 * @return {!proto.jupiter.strategy.common.v1.Factor}
 */
proto.jupiter.strategy.common.v1.Factor.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.jupiter.strategy.common.v1.Factor;
  return proto.jupiter.strategy.common.v1.Factor.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.jupiter.strategy.common.v1.Factor} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.jupiter.strategy.common.v1.Factor}
 */
proto.jupiter.strategy.common.v1.Factor.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 7:
      var value = new google_protobuf_struct_pb.Value;
      reader.readMessage(value,google_protobuf_struct_pb.Value.deserializeBinaryFromReader);
      msg.setValue(value);
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
proto.jupiter.strategy.common.v1.Factor.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.jupiter.strategy.common.v1.Factor.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.jupiter.strategy.common.v1.Factor} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.jupiter.strategy.common.v1.Factor.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getValue();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_protobuf_struct_pb.Value.serializeBinaryToWriter
    );
  }
};


/**
 * optional string code = 1;
 * @return {string}
 */
proto.jupiter.strategy.common.v1.Factor.prototype.getCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.jupiter.strategy.common.v1.Factor} returns this
 */
proto.jupiter.strategy.common.v1.Factor.prototype.setCode = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional jupiter.datastream.v1.MarketEnum.Market market = 2;
 * @return {!proto.jupiter.datastream.v1.MarketEnum.Market}
 */
proto.jupiter.strategy.common.v1.Factor.prototype.getMarket = function() {
  return /** @type {!proto.jupiter.datastream.v1.MarketEnum.Market} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.jupiter.datastream.v1.MarketEnum.Market} value
 * @return {!proto.jupiter.strategy.common.v1.Factor} returns this
 */
proto.jupiter.strategy.common.v1.Factor.prototype.setMarket = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional uint32 date = 3;
 * @return {number}
 */
proto.jupiter.strategy.common.v1.Factor.prototype.getDate = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.jupiter.strategy.common.v1.Factor} returns this
 */
proto.jupiter.strategy.common.v1.Factor.prototype.setDate = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint32 time = 4;
 * @return {number}
 */
proto.jupiter.strategy.common.v1.Factor.prototype.getTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.jupiter.strategy.common.v1.Factor} returns this
 */
proto.jupiter.strategy.common.v1.Factor.prototype.setTime = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional google.protobuf.Timestamp timestamp = 5;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.jupiter.strategy.common.v1.Factor.prototype.getTimestamp = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 5));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.jupiter.strategy.common.v1.Factor} returns this
*/
proto.jupiter.strategy.common.v1.Factor.prototype.setTimestamp = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.jupiter.strategy.common.v1.Factor} returns this
 */
proto.jupiter.strategy.common.v1.Factor.prototype.clearTimestamp = function() {
  return this.setTimestamp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.jupiter.strategy.common.v1.Factor.prototype.hasTimestamp = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string name = 6;
 * @return {string}
 */
proto.jupiter.strategy.common.v1.Factor.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.jupiter.strategy.common.v1.Factor} returns this
 */
proto.jupiter.strategy.common.v1.Factor.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional google.protobuf.Value value = 7;
 * @return {?proto.google.protobuf.Value}
 */
proto.jupiter.strategy.common.v1.Factor.prototype.getValue = function() {
  return /** @type{?proto.google.protobuf.Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Value, 7));
};


/**
 * @param {?proto.google.protobuf.Value|undefined} value
 * @return {!proto.jupiter.strategy.common.v1.Factor} returns this
*/
proto.jupiter.strategy.common.v1.Factor.prototype.setValue = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.jupiter.strategy.common.v1.Factor} returns this
 */
proto.jupiter.strategy.common.v1.Factor.prototype.clearValue = function() {
  return this.setValue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.jupiter.strategy.common.v1.Factor.prototype.hasValue = function() {
  return jspb.Message.getField(this, 7) != null;
};


goog.object.extend(exports, proto.jupiter.strategy.common.v1);
