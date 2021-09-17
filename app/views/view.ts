export abstract class View<T>{
  protected element: HTMLElement;
  private escapar = false;

  constructor(seletor: string, escapar?: boolean) {
    const elemento  = document.querySelector(seletor);
    if(elemento){
      this.element = elemento as HTMLElement;
    } else{
      throw Error (`Seletor ${seletor} não existe no DOM`);
    }
    if(escapar){
      this.escapar = escapar;
    }
  }

  protected abstract template(model: T): string;

  update(model: T): void {
    let template = this.template(model);
    if(this.escapar){
      template = template.replace(/<script>[\s\S]*?<\/script>/,'')
    }
    this.element.innerHTML = template;
  }  
}