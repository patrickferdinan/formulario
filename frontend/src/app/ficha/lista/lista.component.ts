import { Component, OnInit } from '@angular/core';
import { FichasService } from './../../fichas.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  constructor(public service: FichasService) { }

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
