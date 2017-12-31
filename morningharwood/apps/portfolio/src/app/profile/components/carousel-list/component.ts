import { Component, Input } from '@angular/core';

@Component({
  selector: 'mh-carousel-list',
  templateUrl: './component.html',
  styleUrls: ['../shared-styles.scss', './component.scss'],
})
export class CarouselListComponent {
  @Input() public title: string;
  @Input() public data: any;
}
