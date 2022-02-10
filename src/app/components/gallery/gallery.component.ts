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
      active: true,
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
  items = [
    {
      image: '/assets/images/pelo-color.jpg',
      title: 'Cobre y rojos',
      category: 'Color',
    },
    {
      image: '/assets/images/pelo-color.jpg',
      title: 'Mechas doradas',
      category: 'Color',
    },
    {
      image: '/assets/images/pelo-color.jpg',
      title: 'Desfilados',
      category: 'Corte',
    },
    {
      image: '/assets/images/pelo-color.jpg',
      title: 'Corte moderno',
      category: 'Cortes',
    },
    {
      image: '/assets/images/pelo-color.jpg',
      title: 'Bodas y celebraciones',
      category: 'Peinado',
    },
    {
      image: '/assets/images/pelo-color.jpg',
      title: 'Manicura y maquillaje',
      category: 'Belleza',
    },
  ];
}
