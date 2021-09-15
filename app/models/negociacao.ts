export class Negociacao {

  constructor(
    private _data: Date, 
    private readonly quantidade: number, 
    private readonly valor: number) { }

  get data(): Date { 
    const data = new Date(this._data.getTime());
    return data; 
  }

  get volume() { return this.quantidade * this.valor; }
}