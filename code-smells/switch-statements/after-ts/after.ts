interface IConverter {
  convert(filename: string): void;
}

class PNGFileConverter implements IConverter {
  convert(filename: string): void {
    console.log(`PNGConverter: Convert ${filename} to PNG`);
  }
}

class GIFFileConverter implements IConverter {
  convert(filename: string): void {
    console.log(`GIFConverter: Convert ${filename} to GIF`);
  }
}

class JPGConverter implements IConverter{
  convert(filename: string): void {
    console.log(`JPGConverter: Convert ${filename} to JPG`);
  }
}

class SVGConverter implements IConverter {
  convert(filename: string): void {
    console.log(`SVGConverter: Convert ${filename} to SVG`);
  }
}

class Converter {
  convert(filename: string, converter: IConverter) {
    converter.convert(filename);
  }
}


const tsConverter = new Converter();
tsConverter.convert('myFile', new GIFFileConverter());
