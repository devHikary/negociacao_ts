export abstract class View<T>{
  protected element: HTMLElement;

  constructor(seletor: string) {
    this.element = document.querySelector(seletor);
  }

  template(model: T): string {
    throw Error('Classe filha precisa ser implementada')
  }

  update(model: T): void {
    const template = this.template(model);
    this.element.innerHTML = template;
  }  
}