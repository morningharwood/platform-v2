import { Component, HostBinding, HostListener, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Store } from '@ngrx/store';
import * as RouterActions from '../router/actions';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mh-hammy',
  templateUrl: 'component.html',
  styleUrls: ['./component.scss'],
})
export class HamburgerComponent implements OnInit {
  public open = false;

  constructor(private store:Store<any>,
              private location: Location,
              private route:ActivatedRoute) {
  }

  ngOnInit() {
    this.open = this.location.path().includes('/menu');
  }


  @HostListener('click')
  public toggle(): void {
    this.open = !this.open;
    if(!this.open){
      this.store.dispatch(new RouterActions.Back());
    } else {
      this.store.dispatch(new RouterActions.Go({path: ['profile/menu']}));
    }
  }


}
