import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss'],
})
export class TestimonialComponent {
  testimonials = [
    {
      image: '/assets/images/pelo-boda.jpg',
      author: 'Marco Tulio Cicerón',
      opinion:
        'Morbi sit amet sapien a mi ultrices aliquam. Nunc bibendum sem tortor, sagittis sodales tortor mattis ut. Suspendisse venenatis in urna nec tincidunt. Aenean semper finibus risus a tempus. Nunc sed sapien pellentesque, tincidunt odio et, malesuada velit.',
    },
    {
      image: '/assets/images/pelo-color.jpg',
      author: 'Marco Tulio Cicerón',
      opinion:
        'Morbi sit amet sapien a mi ultrices aliquam. Nunc bibendum sem tortor, sagittis sodales tortor mattis ut. Suspendisse venenatis in urna nec tincidunt. Aenean semper finibus risus a tempus. Nunc sed sapien pellentesque, tincidunt odio et, malesuada velit.',
    },
    {
      image: '/assets/images/pelo-color.jpg',
      author: 'Marco Tulio Cicerón',
      opinion:
        'Morbi sit amet sapien a mi ultrices aliquam. Nunc bibendum sem tortor, sagittis sodales tortor mattis ut. Suspendisse venenatis in urna nec tincidunt. Aenean semper finibus risus a tempus. Nunc sed sapien pellentesque, tincidunt odio et, malesuada velit.',
    },
    {
      image: '/assets/images/pelo-color.jpg',
      author: 'Marco Tulio Cicerón',
      opinion:
        'Morbi sit amet sapien a mi ultrices aliquam. Nunc bibendum sem tortor, sagittis sodales tortor mattis ut. Suspendisse venenatis in urna nec tincidunt. Aenean semper finibus risus a tempus. Nunc sed sapien pellentesque, tincidunt odio et, malesuada velit.',
    },
  ];
}
