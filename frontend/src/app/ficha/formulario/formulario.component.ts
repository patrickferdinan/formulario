import { FichasService } from './../../fichas.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  formFicha: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private service: FichasService) { }

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
    console.log(this.formFicha.value);
    if (this.formFicha.valid){
      console.log('submit');
      this.service.create(this.formFicha.value).subscribe(
        success => console.log('sucesso'),
        error => console.log('error')
      );
    }
  }

  onCancel() {
    this.submitted = false;
    this.formFicha.reset();
    console.log('onCancel');
  }

}


