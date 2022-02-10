import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  navbarList = [
    { path: '#section-home', name: 'Home' },
    { path: '#section-portfolio', name: 'Peinados' },
    { path: '#section-about', name: 'Sobre Nosotras' },
    { path: '#section-contact', name: 'Opiniones' },
    { path: '#section-services', name: 'Servicios' },
  ];
}
