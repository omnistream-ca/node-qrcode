
var QRCodeLib = require('./renderer/qrcode-draw.js')

// monkey patch old api
QRCodeLib.qrcodedraw = QRCodeLib.QRCodeDraw

module.exports = QRCodeLib

exports.QRCodeDraw = QRCodeLib.QRCodeDraw;
exports.QRErrorCorrectLevel = QRCodeLib.QRErrorCorrectLevel;
