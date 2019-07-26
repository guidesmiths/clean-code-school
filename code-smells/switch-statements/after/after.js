
const { GIFConverter, PNGConverter, JPGConverter, SVGConverter } = require('./converters');

class PicConverter {
  constructor(filename) {
    this.filename = filename;
    this.converters = {
      'png': PNGConverter,
      'gif': GIFConverter,
      'jpg': JPGConverter,
      'svg': SVGConverter,
    }
  }

  convert(format) {
    const converter = this.converters[format] || this.converters.png;
    converter.convert(this.filename);
  }
}

const converter = new PicConverter('my-filename.jpg');
converter.convert('gif');
converter.convert('svg');
