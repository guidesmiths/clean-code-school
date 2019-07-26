
class PicConverter {
  constructor(filename) {
    this.filename = filename;
  }

  _convert2gif() {
    console.log(`Complex code to convert ${this.filename} to GIF`);
  }

  _convert2jpg() {
    console.log(`Complex code to convert ${this.filename} to JPG`);
  }

  _convert2png() {
    console.log(`Complex code to convert ${this.filename} to PNG`);
  }

  _convert2svg() {
    console.log(`Complex code to convert ${this.filename} to SVG`);
  }

  convert(format) {
    switch(format) {
      case 'png':
        this._convert2png();
        break;

      case 'jpg':
        this._convert2jpg();
        break;

      case 'gif':
        this._convert2gif();
        break;

      case 'svg':
        this._convert2svg();
        break;

      default:
        this._convert2gif();
        break;
    }
  }
  // Open-close principle violation
}

const converter = new PicConverter('myfilename.gif');
converter.convert('jpg');
