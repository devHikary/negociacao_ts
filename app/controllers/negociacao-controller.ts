import { DiasDaSemana } from './../enums/dias-da-semana';
import { NegociacoesView } from './../views/negociacoes-view.js';
import { Negociacoes } from './../models/negociacoes.js';
import { Negociacao } from '../models/negociacao.js';
import { MensagemView } from '../views/mensagem-view.js';

export class NegociacaoController {
  private inputData: HTMLInputElement;
  private inputQuantidade: HTMLInputElement;
  private inputValor: HTMLInputElement;
  private negocicoes = new Negociacoes;
  private negociacoesView = new NegociacoesView('#negociacoesView');
  private mensagemView = new MensagemView('#mensagemView');

  constructor() {
    this.inputData = document.querySelector('#data');
    this.inputQuantidade = document.querySelector('#quantidade');
    this.inputValor = document.querySelector('#valor');
    this.negociacoesView.update(this.negocicoes);
  }

  public adiciona(): void {
    const negociacao = Negociacao.criaDe(
      this.inputData.value,
      this.inputQuantidade.value,
      this.inputValor.value
    );
    if (!this.ehDiaUtil(negociacao.data)) {
      this.mensagemView.update('Apenas negociações em dias úteis são aceitas');
      return;
    }
      this.negocicoes.adiciona(negociacao);
      this.limparFormulario();
      this.atualizaView();  
  }

  private ehDiaUtil(data: Date){
    return data.getDay() > DiasDaSemana.DOMINGO && data.getDay() < DiasDaSemana.SABADO;
  }

  private limparFormulario(): void {
    this.inputValor.value = '';
    this.inputQuantidade.value = '';
    this.inputValor.value = '';
    this.inputData.focus();
  }

  private atualizaView(): void {
    this.negociacoesView.update(this.negocicoes);
    this.mensagemView.update('Negociação adicionada com sucesso');
  }
}