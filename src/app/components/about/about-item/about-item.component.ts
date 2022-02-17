import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-about-item',
  templateUrl: './about-item.component.html',
  styleUrls: ['./about-item.component.scss']
})
export class AboutItemComponent {
  
  @Input() inverse:boolean=false;
  @Input() image:string ="";
  @Input() name:string ="";
  @Input() titleText:string ="";
  @Input() presentation:string ="";
  @Input() declaration:string ="";
  @Input() contact:string ="";


}
