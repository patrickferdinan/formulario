import { Component, OnInit } from '@angular/core';
import { Ficha } from '../shared/ficha';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  formFicha: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createForm(new Ficha());
  }

  createForm(ficha: Ficha) {
    this.formFicha = this.formBuilder.group({
      cliente: [ficha.cliente],
      solicitante: [ficha.solicitante],
      descricao: [ficha.descricao],
      data: [ficha.data]
    });
  }

  onSubmit() {
    console.log(this.formFicha.value);

    this.formFicha.reset(new Ficha());
  }

}
