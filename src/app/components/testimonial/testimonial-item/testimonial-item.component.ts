import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-testimonial-item',
  templateUrl: './testimonial-item.component.html',
  styleUrls: ['./testimonial-item.component.scss'],
})
export class TestimonialItemComponent {
  @Input() image: string = '';
  @Input() author: string = '';
  @Input() opinion: string = '';
}
