export class View {
    constructor(seletor) {
        this.element = document.querySelector(seletor);
    }
    template(model) {
        throw Error('Classe filha precisa ser implementada');
    }
    update(model) {
        const template = this.template(model);
        this.element.innerHTML = template;
    }
}
