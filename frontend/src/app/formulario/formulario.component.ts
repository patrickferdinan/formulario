import { Router } from '@angular/router';
import { FichasService } from '../shared/fichas.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Ficha } from '../shared/ficha';



@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  formFicha: FormGroup;
  submitted = false;
  ficha = new Ficha();

  constructor(public router: Router, public formBuilder: FormBuilder, public service: FichasService) { }

  ngOnInit() {
    this.formFicha = this.formBuilder.group({
      cliente: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
      solicitante: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
      descricao: [null, [Validators.required, Validators.maxLength(250)]],
      data: [null, [Validators.required, Validators.minLength(6), Validators.maxLength(8)]]
    });
  }

  hasError(field: string){
    return this.formFicha.get(field).errors;
  }
  onSubmit() {
    this.submitted = true;
    this.ficha = this.formFicha.value;

    console.log(this.ficha);

    this.service.create(this.ficha)
      .subscribe(response => {
        console.log(response);
        window.alert('Ficha cadastrada!');
        this.formFicha.reset();
        this.router.navigate(['/ficha/lista']);
      }, error => {
        window.alert('Erro ao criar ficha!');
      });

    console.log(this.formFicha.value);
  }

  onCancel() {
    this.submitted = false;
    this.formFicha.reset();
    console.log('onCancel');
  }

}


