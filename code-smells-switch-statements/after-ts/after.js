var PNGFileConverter = /** @class */ (function () {
    function PNGFileConverter() {
    }
    PNGFileConverter.prototype.convert = function (filename) {
        console.log("PNGConverter: Convert " + filename + " to PNG");
    };
    return PNGFileConverter;
}());
var GIFFileConverter = /** @class */ (function () {
    function GIFFileConverter() {
    }
    GIFFileConverter.prototype.convert = function (filename) {
        console.log("GIFConverter: Convert " + filename + " to GIF");
    };
    return GIFFileConverter;
}());
var JPGConverter = /** @class */ (function () {
    function JPGConverter() {
    }
    JPGConverter.prototype.convert = function (filename) {
        console.log("JPGConverter: Convert " + filename + " to JPG");
    };
    return JPGConverter;
}());
var SVGConverter = /** @class */ (function () {
    function SVGConverter() {
    }
    SVGConverter.prototype.convert = function (filename) {
        console.log("SVGConverter: Convert " + filename + " to SVG");
    };
    return SVGConverter;
}());
var PDFConverter = /** @class */ (function () {
    function PDFConverter() {
    }
    PDFConverter.prototype.convert = function (filename) {
        // code logic
    };
    return PDFConverter;
}());
var Converter = /** @class */ (function () {
    function Converter() {
    }
    Converter.prototype.convert = function (filename, converter) {
        converter.convert(filename);
    };
    return Converter;
}());
var tsConverter = new Converter();
tsConverter.convert('myFile', new GIFFileConverter());
