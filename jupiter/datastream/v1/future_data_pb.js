// source: jupiter/datastream/v1/future_data.proto
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
goog.exportSymbol('proto.jupiter.datastream.v1.FutureData', null, global);
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
proto.jupiter.datastream.v1.FutureData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.jupiter.datastream.v1.FutureData.repeatedFields_, null);
};
goog.inherits(proto.jupiter.datastream.v1.FutureData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.jupiter.datastream.v1.FutureData.displayName = 'proto.jupiter.datastream.v1.FutureData';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.jupiter.datastream.v1.FutureData.repeatedFields_ = [23,24,25,26];



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
proto.jupiter.datastream.v1.FutureData.prototype.toObject = function(opt_includeInstance) {
  return proto.jupiter.datastream.v1.FutureData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.jupiter.datastream.v1.FutureData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.jupiter.datastream.v1.FutureData.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, ""),
    market: jspb.Message.getFieldWithDefault(msg, 2, 0),
    date: jspb.Message.getFieldWithDefault(msg, 3, 0),
    time: jspb.Message.getFieldWithDefault(msg, 4, 0),
    timestamp: (f = msg.getTimestamp()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    tradedate: jspb.Message.getFieldWithDefault(msg, 6, 0),
    preclosepx: jspb.Message.getFieldWithDefault(msg, 7, 0),
    openpx: jspb.Message.getFieldWithDefault(msg, 8, 0),
    highpx: jspb.Message.getFieldWithDefault(msg, 9, 0),
    lowpx: jspb.Message.getFieldWithDefault(msg, 10, 0),
    lastpx: jspb.Message.getFieldWithDefault(msg, 11, 0),
    closepx: jspb.Message.getFieldWithDefault(msg, 12, 0),
    totalvolumetrade: jspb.Message.getFieldWithDefault(msg, 13, 0),
    totalvaluetrade: jspb.Message.getFieldWithDefault(msg, 14, 0),
    preopeninterest: jspb.Message.getFieldWithDefault(msg, 15, 0),
    openinterest: jspb.Message.getFieldWithDefault(msg, 16, 0),
    presettleprice: jspb.Message.getFieldWithDefault(msg, 17, 0),
    settleprice: jspb.Message.getFieldWithDefault(msg, 18, 0),
    priceuplimit: jspb.Message.getFieldWithDefault(msg, 19, 0),
    pricedownlimit: jspb.Message.getFieldWithDefault(msg, 20, 0),
    predelta: jspb.Message.getFieldWithDefault(msg, 21, 0),
    currdelta: jspb.Message.getFieldWithDefault(msg, 22, 0),
    bidpriceList: (f = jspb.Message.getRepeatedField(msg, 23)) == null ? undefined : f,
    bidqtyList: (f = jspb.Message.getRepeatedField(msg, 24)) == null ? undefined : f,
    offerpriceList: (f = jspb.Message.getRepeatedField(msg, 25)) == null ? undefined : f,
    offerqtyList: (f = jspb.Message.getRepeatedField(msg, 26)) == null ? undefined : f,
    auctionprice: jspb.Message.getFieldWithDefault(msg, 27, 0),
    auctionqty: jspb.Message.getFieldWithDefault(msg, 28, 0),
    avgprice: jspb.Message.getFieldWithDefault(msg, 29, 0)
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
 * @return {!proto.jupiter.datastream.v1.FutureData}
 */
proto.jupiter.datastream.v1.FutureData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.jupiter.datastream.v1.FutureData;
  return proto.jupiter.datastream.v1.FutureData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.jupiter.datastream.v1.FutureData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.jupiter.datastream.v1.FutureData}
 */
proto.jupiter.datastream.v1.FutureData.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setTradedate(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setPreclosepx(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setOpenpx(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setHighpx(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setLowpx(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setLastpx(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setClosepx(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTotalvolumetrade(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTotalvaluetrade(value);
      break;
    case 15:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setPreopeninterest(value);
      break;
    case 16:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setOpeninterest(value);
      break;
    case 17:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setPresettleprice(value);
      break;
    case 18:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSettleprice(value);
      break;
    case 19:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setPriceuplimit(value);
      break;
    case 20:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setPricedownlimit(value);
      break;
    case 21:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPredelta(value);
      break;
    case 22:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCurrdelta(value);
      break;
    case 23:
      var value = /** @type {!Array<number>} */ (reader.readPackedUint64());
      msg.setBidpriceList(value);
      break;
    case 24:
      var value = /** @type {!Array<number>} */ (reader.readPackedUint64());
      msg.setBidqtyList(value);
      break;
    case 25:
      var value = /** @type {!Array<number>} */ (reader.readPackedUint64());
      msg.setOfferpriceList(value);
      break;
    case 26:
      var value = /** @type {!Array<number>} */ (reader.readPackedUint64());
      msg.setOfferqtyList(value);
      break;
    case 27:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setAuctionprice(value);
      break;
    case 28:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setAuctionqty(value);
      break;
    case 29:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAvgprice(value);
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
proto.jupiter.datastream.v1.FutureData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.jupiter.datastream.v1.FutureData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.jupiter.datastream.v1.FutureData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.jupiter.datastream.v1.FutureData.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getTradedate();
  if (f !== 0) {
    writer.writeUint32(
      6,
      f
    );
  }
  f = message.getPreclosepx();
  if (f !== 0) {
    writer.writeUint64(
      7,
      f
    );
  }
  f = message.getOpenpx();
  if (f !== 0) {
    writer.writeUint64(
      8,
      f
    );
  }
  f = message.getHighpx();
  if (f !== 0) {
    writer.writeUint64(
      9,
      f
    );
  }
  f = message.getLowpx();
  if (f !== 0) {
    writer.writeUint64(
      10,
      f
    );
  }
  f = message.getLastpx();
  if (f !== 0) {
    writer.writeUint64(
      11,
      f
    );
  }
  f = message.getClosepx();
  if (f !== 0) {
    writer.writeUint64(
      12,
      f
    );
  }
  f = message.getTotalvolumetrade();
  if (f !== 0) {
    writer.writeUint64(
      13,
      f
    );
  }
  f = message.getTotalvaluetrade();
  if (f !== 0) {
    writer.writeUint64(
      14,
      f
    );
  }
  f = message.getPreopeninterest();
  if (f !== 0) {
    writer.writeUint64(
      15,
      f
    );
  }
  f = message.getOpeninterest();
  if (f !== 0) {
    writer.writeUint64(
      16,
      f
    );
  }
  f = message.getPresettleprice();
  if (f !== 0) {
    writer.writeUint64(
      17,
      f
    );
  }
  f = message.getSettleprice();
  if (f !== 0) {
    writer.writeUint64(
      18,
      f
    );
  }
  f = message.getPriceuplimit();
  if (f !== 0) {
    writer.writeUint64(
      19,
      f
    );
  }
  f = message.getPricedownlimit();
  if (f !== 0) {
    writer.writeUint64(
      20,
      f
    );
  }
  f = message.getPredelta();
  if (f !== 0) {
    writer.writeUint32(
      21,
      f
    );
  }
  f = message.getCurrdelta();
  if (f !== 0) {
    writer.writeUint32(
      22,
      f
    );
  }
  f = message.getBidpriceList();
  if (f.length > 0) {
    writer.writePackedUint64(
      23,
      f
    );
  }
  f = message.getBidqtyList();
  if (f.length > 0) {
    writer.writePackedUint64(
      24,
      f
    );
  }
  f = message.getOfferpriceList();
  if (f.length > 0) {
    writer.writePackedUint64(
      25,
      f
    );
  }
  f = message.getOfferqtyList();
  if (f.length > 0) {
    writer.writePackedUint64(
      26,
      f
    );
  }
  f = message.getAuctionprice();
  if (f !== 0) {
    writer.writeUint64(
      27,
      f
    );
  }
  f = message.getAuctionqty();
  if (f !== 0) {
    writer.writeUint64(
      28,
      f
    );
  }
  f = message.getAvgprice();
  if (f !== 0) {
    writer.writeUint32(
      29,
      f
    );
  }
};


/**
 * optional string code = 1;
 * @return {string}
 */
proto.jupiter.datastream.v1.FutureData.prototype.getCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.jupiter.datastream.v1.FutureData} returns this
 */
proto.jupiter.datastream.v1.FutureData.prototype.setCode = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional MarketEnum.Market market = 2;
 * @return {!proto.jupiter.datastream.v1.MarketEnum.Market}
 */
proto.jupiter.datastream.v1.FutureData.prototype.getMarket = function() {
  return /** @type {!proto.jupiter.datastream.v1.MarketEnum.Market} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.jupiter.datastream.v1.MarketEnum.Market} value
 * @return {!proto.jupiter.datastream.v1.FutureData} returns this
 */
proto.jupiter.datastream.v1.FutureData.prototype.setMarket = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional uint32 date = 3;
 * @return {number}
 */
proto.jupiter.datastream.v1.FutureData.prototype.getDate = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.jupiter.datastream.v1.FutureData} returns this
 */
proto.jupiter.datastream.v1.FutureData.prototype.setDate = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint32 time = 4;
 * @return {number}
 */
proto.jupiter.datastream.v1.FutureData.prototype.getTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.jupiter.datastream.v1.FutureData} returns this
 */
proto.jupiter.datastream.v1.FutureData.prototype.setTime = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional google.protobuf.Timestamp timestamp = 5;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.jupiter.datastream.v1.FutureData.prototype.getTimestamp = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 5));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.jupiter.datastream.v1.FutureData} returns this
*/
proto.jupiter.datastream.v1.FutureData.prototype.setTimestamp = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.jupiter.datastream.v1.FutureData} returns this
 */
proto.jupiter.datastream.v1.FutureData.prototype.clearTimestamp = function() {
  return this.setTimestamp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.jupiter.datastream.v1.FutureData.prototype.hasTimestamp = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional uint32 tradeDate = 6;
 * @return {number}
 */
proto.jupiter.datastream.v1.FutureData.prototype.getTradedate = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.jupiter.datastream.v1.FutureData} returns this
 */
proto.jupiter.datastream.v1.FutureData.prototype.setTradedate = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional uint64 preClosePx = 7;
 * @return {number}
 */
proto.jupiter.datastream.v1.FutureData.prototype.getPreclosepx = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.jupiter.datastream.v1.FutureData} returns this
 */
proto.jupiter.datastream.v1.FutureData.prototype.setPreclosepx = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional uint64 openPx = 8;
 * @return {number}
 */
proto.jupiter.datastream.v1.FutureData.prototype.getOpenpx = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.jupiter.datastream.v1.FutureData} returns this
 */
proto.jupiter.datastream.v1.FutureData.prototype.setOpenpx = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional uint64 highPx = 9;
 * @return {number}
 */
proto.jupiter.datastream.v1.FutureData.prototype.getHighpx = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.jupiter.datastream.v1.FutureData} returns this
 */
proto.jupiter.datastream.v1.FutureData.prototype.setHighpx = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional uint64 lowPx = 10;
 * @return {number}
 */
proto.jupiter.datastream.v1.FutureData.prototype.getLowpx = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.jupiter.datastream.v1.FutureData} returns this
 */
proto.jupiter.datastream.v1.FutureData.prototype.setLowpx = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional uint64 lastPx = 11;
 * @return {number}
 */
proto.jupiter.datastream.v1.FutureData.prototype.getLastpx = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.jupiter.datastream.v1.FutureData} returns this
 */
proto.jupiter.datastream.v1.FutureData.prototype.setLastpx = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * optional uint64 closePx = 12;
 * @return {number}
 */
proto.jupiter.datastream.v1.FutureData.prototype.getClosepx = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.jupiter.datastream.v1.FutureData} returns this
 */
proto.jupiter.datastream.v1.FutureData.prototype.setClosepx = function(value) {
  return jspb.Message.setProto3IntField(this, 12, value);
};


/**
 * optional uint64 totalVolumeTrade = 13;
 * @return {number}
 */
proto.jupiter.datastream.v1.FutureData.prototype.getTotalvolumetrade = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/**
 * @param {number} value
 * @return {!proto.jupiter.datastream.v1.FutureData} returns this
 */
proto.jupiter.datastream.v1.FutureData.prototype.setTotalvolumetrade = function(value) {
  return jspb.Message.setProto3IntField(this, 13, value);
};


/**
 * optional uint64 totalValueTrade = 14;
 * @return {number}
 */
proto.jupiter.datastream.v1.FutureData.prototype.getTotalvaluetrade = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/**
 * @param {number} value
 * @return {!proto.jupiter.datastream.v1.FutureData} returns this
 */
proto.jupiter.datastream.v1.FutureData.prototype.setTotalvaluetrade = function(value) {
  return jspb.Message.setProto3IntField(this, 14, value);
};


/**
 * optional uint64 preOpenInterest = 15;
 * @return {number}
 */
proto.jupiter.datastream.v1.FutureData.prototype.getPreopeninterest = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 15, 0));
};


/**
 * @param {number} value
 * @return {!proto.jupiter.datastream.v1.FutureData} returns this
 */
proto.jupiter.datastream.v1.FutureData.prototype.setPreopeninterest = function(value) {
  return jspb.Message.setProto3IntField(this, 15, value);
};


/**
 * optional uint64 openInterest = 16;
 * @return {number}
 */
proto.jupiter.datastream.v1.FutureData.prototype.getOpeninterest = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 16, 0));
};


/**
 * @param {number} value
 * @return {!proto.jupiter.datastream.v1.FutureData} returns this
 */
proto.jupiter.datastream.v1.FutureData.prototype.setOpeninterest = function(value) {
  return jspb.Message.setProto3IntField(this, 16, value);
};


/**
 * optional uint64 preSettlePrice = 17;
 * @return {number}
 */
proto.jupiter.datastream.v1.FutureData.prototype.getPresettleprice = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 17, 0));
};


/**
 * @param {number} value
 * @return {!proto.jupiter.datastream.v1.FutureData} returns this
 */
proto.jupiter.datastream.v1.FutureData.prototype.setPresettleprice = function(value) {
  return jspb.Message.setProto3IntField(this, 17, value);
};


/**
 * optional uint64 settlePrice = 18;
 * @return {number}
 */
proto.jupiter.datastream.v1.FutureData.prototype.getSettleprice = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 18, 0));
};


/**
 * @param {number} value
 * @return {!proto.jupiter.datastream.v1.FutureData} returns this
 */
proto.jupiter.datastream.v1.FutureData.prototype.setSettleprice = function(value) {
  return jspb.Message.setProto3IntField(this, 18, value);
};


/**
 * optional uint64 priceUpLimit = 19;
 * @return {number}
 */
proto.jupiter.datastream.v1.FutureData.prototype.getPriceuplimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 19, 0));
};


/**
 * @param {number} value
 * @return {!proto.jupiter.datastream.v1.FutureData} returns this
 */
proto.jupiter.datastream.v1.FutureData.prototype.setPriceuplimit = function(value) {
  return jspb.Message.setProto3IntField(this, 19, value);
};


/**
 * optional uint64 priceDownLimit = 20;
 * @return {number}
 */
proto.jupiter.datastream.v1.FutureData.prototype.getPricedownlimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 20, 0));
};


/**
 * @param {number} value
 * @return {!proto.jupiter.datastream.v1.FutureData} returns this
 */
proto.jupiter.datastream.v1.FutureData.prototype.setPricedownlimit = function(value) {
  return jspb.Message.setProto3IntField(this, 20, value);
};


/**
 * optional uint32 preDelta = 21;
 * @return {number}
 */
proto.jupiter.datastream.v1.FutureData.prototype.getPredelta = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 21, 0));
};


/**
 * @param {number} value
 * @return {!proto.jupiter.datastream.v1.FutureData} returns this
 */
proto.jupiter.datastream.v1.FutureData.prototype.setPredelta = function(value) {
  return jspb.Message.setProto3IntField(this, 21, value);
};


/**
 * optional uint32 currDelta = 22;
 * @return {number}
 */
proto.jupiter.datastream.v1.FutureData.prototype.getCurrdelta = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 22, 0));
};


/**
 * @param {number} value
 * @return {!proto.jupiter.datastream.v1.FutureData} returns this
 */
proto.jupiter.datastream.v1.FutureData.prototype.setCurrdelta = function(value) {
  return jspb.Message.setProto3IntField(this, 22, value);
};


/**
 * repeated uint64 bidPrice = 23;
 * @return {!Array<number>}
 */
proto.jupiter.datastream.v1.FutureData.prototype.getBidpriceList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 23));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.jupiter.datastream.v1.FutureData} returns this
 */
proto.jupiter.datastream.v1.FutureData.prototype.setBidpriceList = function(value) {
  return jspb.Message.setField(this, 23, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.jupiter.datastream.v1.FutureData} returns this
 */
proto.jupiter.datastream.v1.FutureData.prototype.addBidprice = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 23, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.jupiter.datastream.v1.FutureData} returns this
 */
proto.jupiter.datastream.v1.FutureData.prototype.clearBidpriceList = function() {
  return this.setBidpriceList([]);
};


/**
 * repeated uint64 bidQty = 24;
 * @return {!Array<number>}
 */
proto.jupiter.datastream.v1.FutureData.prototype.getBidqtyList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 24));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.jupiter.datastream.v1.FutureData} returns this
 */
proto.jupiter.datastream.v1.FutureData.prototype.setBidqtyList = function(value) {
  return jspb.Message.setField(this, 24, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.jupiter.datastream.v1.FutureData} returns this
 */
proto.jupiter.datastream.v1.FutureData.prototype.addBidqty = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 24, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.jupiter.datastream.v1.FutureData} returns this
 */
proto.jupiter.datastream.v1.FutureData.prototype.clearBidqtyList = function() {
  return this.setBidqtyList([]);
};


/**
 * repeated uint64 offerPrice = 25;
 * @return {!Array<number>}
 */
proto.jupiter.datastream.v1.FutureData.prototype.getOfferpriceList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 25));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.jupiter.datastream.v1.FutureData} returns this
 */
proto.jupiter.datastream.v1.FutureData.prototype.setOfferpriceList = function(value) {
  return jspb.Message.setField(this, 25, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.jupiter.datastream.v1.FutureData} returns this
 */
proto.jupiter.datastream.v1.FutureData.prototype.addOfferprice = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 25, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.jupiter.datastream.v1.FutureData} returns this
 */
proto.jupiter.datastream.v1.FutureData.prototype.clearOfferpriceList = function() {
  return this.setOfferpriceList([]);
};


/**
 * repeated uint64 offerQty = 26;
 * @return {!Array<number>}
 */
proto.jupiter.datastream.v1.FutureData.prototype.getOfferqtyList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 26));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.jupiter.datastream.v1.FutureData} returns this
 */
proto.jupiter.datastream.v1.FutureData.prototype.setOfferqtyList = function(value) {
  return jspb.Message.setField(this, 26, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.jupiter.datastream.v1.FutureData} returns this
 */
proto.jupiter.datastream.v1.FutureData.prototype.addOfferqty = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 26, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.jupiter.datastream.v1.FutureData} returns this
 */
proto.jupiter.datastream.v1.FutureData.prototype.clearOfferqtyList = function() {
  return this.setOfferqtyList([]);
};


/**
 * optional uint64 auctionPrice = 27;
 * @return {number}
 */
proto.jupiter.datastream.v1.FutureData.prototype.getAuctionprice = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 27, 0));
};


/**
 * @param {number} value
 * @return {!proto.jupiter.datastream.v1.FutureData} returns this
 */
proto.jupiter.datastream.v1.FutureData.prototype.setAuctionprice = function(value) {
  return jspb.Message.setProto3IntField(this, 27, value);
};


/**
 * optional uint64 auctionQty = 28;
 * @return {number}
 */
proto.jupiter.datastream.v1.FutureData.prototype.getAuctionqty = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 28, 0));
};


/**
 * @param {number} value
 * @return {!proto.jupiter.datastream.v1.FutureData} returns this
 */
proto.jupiter.datastream.v1.FutureData.prototype.setAuctionqty = function(value) {
  return jspb.Message.setProto3IntField(this, 28, value);
};


/**
 * optional uint32 avgPrice = 29;
 * @return {number}
 */
proto.jupiter.datastream.v1.FutureData.prototype.getAvgprice = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 29, 0));
};


/**
 * @param {number} value
 * @return {!proto.jupiter.datastream.v1.FutureData} returns this
 */
proto.jupiter.datastream.v1.FutureData.prototype.setAvgprice = function(value) {
  return jspb.Message.setProto3IntField(this, 29, value);
};


goog.object.extend(exports, proto.jupiter.datastream.v1);
