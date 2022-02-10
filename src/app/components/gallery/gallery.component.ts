import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent {
  categories = [
    {
      filter: '*',
      name: 'Todos',
      active:true,
    },
    {
      filter: '.packaging',
      name: 'Cortes',
    },
    {
      filter: '.mockup',
      name: 'Color',
    },
    {
      filter: '.typography',
      name: 'Peinado',
    },
    {
      filter: '.photography',
      name: 'Belleza',
    },
  ];
}
