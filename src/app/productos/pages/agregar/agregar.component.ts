import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent implements OnInit {
  miFormulario:FormGroup = this.fb.group({
    nombre: ['', [Validators.required]]
  });
  mensaje:string = "Este campo es requerido";
  color:string = "purple";
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  esInvalido(campo:string){
    return this.miFormulario.get(campo)?.invalid && this.miFormulario.get(campo)?.touched || false;
  }
  guardar(){
    this.mensaje= Math.random().toString(); 
  }

  cambiarColor(){
    const color = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));
    this.color=color; 
  }

}
