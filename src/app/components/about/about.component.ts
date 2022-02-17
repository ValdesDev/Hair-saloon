import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {

  
  workers = [
    {
      image: '/assets/images/pelo-boda.jpg',
      titleText: 'Sobre',
      name: 'Carla',
      presentation:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut feugiat mi. Mauris magna mi, malesuada nec lacinia id, ultricies vel turpis.',
      declaration:
        ' In at quam molestie, ullamcorper est hendrerit, accumsan lorem. Morbi tincidunt vitae mi quis aliquam. Proin luctus vehicula enim vel condimentum. Quisque a turpis quis nunc consectetur tempor. Sed quis nunc ac orci dapibus molestie. Etiam ut dolor ut ex mattis tincidunt.',
      contact: '#',
    },
    {
      image: '/assets/images/pelo-boda.jpg',
      titleText: 'Sobre',
      name: 'Marta',
      presentation:
        'Fusce et vehicula nulla, ut congue nibh. Curabitur luctus lorem elit, sit amet aliquam ipsum imperdiet et. Nulla bibendum quam ut lectus faucibus, non tristique leo pulvinar.',
      declaration:
        'Quisque mattis mauris ipsum, at venenatis arcu tempus at. Nullam elit nisi, tincidunt vitae tincidunt vitae, auctor vel elit.',
      contact: '#',
    },
  ];
}
