import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contact-address',
  templateUrl: './contact-address.component.html',
  styleUrls: ['./contact-address.component.scss'],
})
export class ContactAddressComponent {
  @Input() addressDataName: string = '';
  @Input() addressData: any = null;

  dataItems = [
    {
      addressDataName: 'Email',
      addressData: 'Carla&Marta@gmail.com',
    },
    {
      addressDataName: 'Teléfono',
      addressData: '+34 600 112 22*',
    },
    {
      addressDataName: 'Dirección',
      addressData: 'C. SinNombre, 250, 37005 Salamanca',
    },
  ];
}
