// Module System with TypeScrip Class

export class Laptop {
  brand: string;
  processor: string;
  screenSize: number;
  isLatestModel: boolean;
  price: number;

  constructor(br: string, prs: string, sc: number, ml: boolean, prc: number) {
    this.brand = br;
    this.processor = prs;
    this.screenSize = sc;
    this.isLatestModel = ml;
    this.price = prc;
  }

  configuration() {
    console.log(
      `${this.isLatestModel ? "Latest" : "Older"} Model of ${
        this.brand
      } Laptop! Processor: ${this.processor}, Screen Size: ${
        this.screenSize
      } inc, Price: ${this.price} USD.`
    );
  }
}
