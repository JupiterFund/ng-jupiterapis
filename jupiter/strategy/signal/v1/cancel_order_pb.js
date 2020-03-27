// source: jupiter/strategy/signal/v1/cancel_order.proto
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

goog.exportSymbol('proto.jupiter.strategy.signal.v1.CancelOrder', null, global);
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
proto.jupiter.strategy.signal.v1.CancelOrder = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.jupiter.strategy.signal.v1.CancelOrder, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.jupiter.strategy.signal.v1.CancelOrder.displayName = 'proto.jupiter.strategy.signal.v1.CancelOrder';
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
proto.jupiter.strategy.signal.v1.CancelOrder.prototype.toObject = function(opt_includeInstance) {
  return proto.jupiter.strategy.signal.v1.CancelOrder.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.jupiter.strategy.signal.v1.CancelOrder} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.jupiter.strategy.signal.v1.CancelOrder.toObject = function(includeInstance, msg) {
  var f, obj = {
    foo: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.jupiter.strategy.signal.v1.CancelOrder}
 */
proto.jupiter.strategy.signal.v1.CancelOrder.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.jupiter.strategy.signal.v1.CancelOrder;
  return proto.jupiter.strategy.signal.v1.CancelOrder.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.jupiter.strategy.signal.v1.CancelOrder} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.jupiter.strategy.signal.v1.CancelOrder}
 */
proto.jupiter.strategy.signal.v1.CancelOrder.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFoo(value);
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
proto.jupiter.strategy.signal.v1.CancelOrder.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.jupiter.strategy.signal.v1.CancelOrder.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.jupiter.strategy.signal.v1.CancelOrder} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.jupiter.strategy.signal.v1.CancelOrder.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFoo();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string foo = 1;
 * @return {string}
 */
proto.jupiter.strategy.signal.v1.CancelOrder.prototype.getFoo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.jupiter.strategy.signal.v1.CancelOrder} returns this
 */
proto.jupiter.strategy.signal.v1.CancelOrder.prototype.setFoo = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


goog.object.extend(exports, proto.jupiter.strategy.signal.v1);
