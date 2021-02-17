import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-componentOutlet',
  templateUrl: './ng-componentOutlet.component.html',
  styleUrls: ['./ng-componentOutlet.component.css']
})
export class NgComponentOutletComponent {
  dataCargada: any;
  ngOnInit() {
    setTimeout(() => {
      this.dataCargada = 'cargada!';
    }, 3000);
  }
}
