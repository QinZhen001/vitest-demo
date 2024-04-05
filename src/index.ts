interface IData {
  aaa: string;
  bbb: number;
}

class Test {

  data: IData = {
    aaa: "aaa",
    bbb: 111
  }

  constructor() { }

  setData(data: IData): void {
    this.data = data;
  }

  getData(): IData {
    return this.data;
  }
}

export default Test;
