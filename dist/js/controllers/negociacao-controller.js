import { NegociacoesView } from './../views/negociacoes-view.js';
import { Negociacoes } from './../models/negociacoes.js';
import { Negociacao } from '../models/negociacao.js';
import { MensagemView } from '../views/mensagem-view.js';
export class NegociacaoController {
    constructor() {
        this.negocicoes = new Negociacoes;
        this.negociacoesView = new NegociacoesView('#negociacoesView');
        this.mensagemView = new MensagemView('#mensagemView');
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
        this.negociacoesView.update(this.negocicoes);
    }
    adiciona() {
        const negociacao = this.criaNegociacao();
        this.negocicoes.adiciona(negociacao);
        this.negociacoesView.update(this.negocicoes);
        this.mensagemView.update('Negociação adicionada com sucesso');
        this.limparFormulario();
    }
    criaNegociacao() {
        const exp = /-/g;
        const date = new Date(this.inputData.value.replace(exp, ','));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        return new Negociacao(date, quantidade, valor);
    }
    limparFormulario() {
        this.inputValor.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
}
