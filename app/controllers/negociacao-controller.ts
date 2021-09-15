import { Negociacoes } from './../models/negociacoes.js';
import { Negociacao } from '../models/negociacao.js';

export class NegociacaoController {
  private inputData: HTMLInputElement;
  private inputQuantidade: HTMLInputElement;
  private inputValor: HTMLInputElement;
  private negocicoes = new Negociacoes;

  constructor() {
    this.inputData = document.querySelector('#data');
    this.inputQuantidade = document.querySelector('#quantidade');
    this.inputValor = document.querySelector('#valor');
  }

  adiciona(): void {
    const negociacao = this.criaNegociacao();
    this.negocicoes.adiciona(negociacao);
    console.log(this.negocicoes.lista());
    this.limparFormulario();
  }

  criaNegociacao(): Negociacao {
    const exp = /-/g;
    const date = new Date(this.inputData.value.replace(exp, ','));
    const quantidade = parseInt(this.inputQuantidade.value);
    const valor = parseFloat(this.inputValor.value)
    return new Negociacao(date,quantidade,valor
    );
  }

  limparFormulario(): void{
    this.inputValor.value = '';
    this.inputQuantidade.value = '';
    this.inputValor.value = '';
    this.inputData.focus();
  }
}