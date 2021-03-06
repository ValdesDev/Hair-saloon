import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-gallery-item',
  templateUrl: './gallery-item.component.html',
  styleUrls: ['./gallery-item.component.scss'],
})
export class GalleryItemComponent {
  @Input() image: string = '';
  @Input() title: string = '';
  @Input() category: string = '';
}
