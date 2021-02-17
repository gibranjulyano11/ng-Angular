import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-plural',
  templateUrl: './ng-plural.component.html',
  styleUrls: ['./ng-plural.component.css']
})
export class NgPluralComponent {
  dataCargada: any;
  ngOnInit() {
    setTimeout(() => {
      this.dataCargada = 'cargada!';
    }, 3000);
  }
}
