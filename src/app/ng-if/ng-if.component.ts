import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css']
})
export class NgIfComponent {
  dataCargada: any;
  ngOnInit() {
    setTimeout(() => {
      this.dataCargada = 'cargada!';
    }, 3000);
  }
}
