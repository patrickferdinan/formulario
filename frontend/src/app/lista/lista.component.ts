import { Ficha } from '../shared/ficha';
import { Component, OnInit } from '@angular/core';
import { FichasService } from '../shared/fichas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  ficha: Ficha[];

  constructor(public router: Router, public service: FichasService) {}

  ngOnInit() {
    this.service.Listar()
      .subscribe(response => {
        console.log(response);
        this.ficha = response;
      },
      error => {
        console.log(error);
      });
  }

}
