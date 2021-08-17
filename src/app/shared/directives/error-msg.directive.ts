import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[errorMsg]'
})
export class ErrorMsgDirective implements OnInit, OnChanges{

  _color:string='red';
  _mensaje:string='El campo es requerido';
  htmlElement:ElementRef<HTMLElement>;
  @Input() set color(valor:string){
    this._color=valor; 
    this.setColor();
  } 
  @Input() set mensaje(mensaje:string){
    this._mensaje = mensaje; 
    this.setMensaje(); 
  } 
  @Input() set valido(valor:boolean){
    if(valor){
      this.htmlElement.nativeElement.classList.add('hidden'); 
    }else{
      this.htmlElement.nativeElement.classList.remove ('hidden'); 
    }
  }

  constructor(private el:ElementRef<HTMLElement>) {
    
    this.htmlElement=el;    
  }
  ngOnChanges(changes: SimpleChanges): void {
   // console.log(changes);
    //const mensaje = changes.mensaje.currentValue; 
  }
  ngOnInit(): void {
    this.setColor(); 
    this.setMensaje(); 
    
    this.setStyle(); 
  }

  setStyle(){
    this.htmlElement.nativeElement.classList.add("form-text");
  }

  setColor(){
    this.htmlElement.nativeElement.style.color=this._color;
  }
  setMensaje(){
    this.htmlElement.nativeElement.innerText = this._mensaje; 
  }


}
