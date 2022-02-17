import { Component } from '@angular/core';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.scss'],
})
export class ServiceListComponent {
  items = [{
    title:"Corte",
    subTitle:"Para todo género y edad"
  },
  {
    title:"Estilismo",
    subTitle:"Peinados y maquillaje"
  },
  {
    title:"Belleza",
    subTitle:"Manicura y tratamientos"
  },
  ]
}
