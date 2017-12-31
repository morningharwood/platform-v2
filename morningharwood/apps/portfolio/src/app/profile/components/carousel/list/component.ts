import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'mh-carousel-list',
  templateUrl: './component.html',
  styleUrls: ['../../shared-styles.scss', './component.scss'],
})
export class CarouselListComponent implements OnInit {
  @Input() public title: string;
  @Input() public data: any;
  @Input() public active = 0;

  public ngOnInit(): void {
    Observable.interval(3500).subscribe(()=> {
      ++this.active;
    });
  }
}
