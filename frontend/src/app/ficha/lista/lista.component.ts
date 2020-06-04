import { Component, OnInit } from '@angular/core';
import { FichasService } from './../../fichas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  constructor(public router: Router, public service: FichasService) {}

  ngOnInit() {
    this.service.Listar()
      .subscribe(response => {
        console.log(response);
      },
      error => {
        console.log(error);
      });
  }

}
