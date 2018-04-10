import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';

@Component({
    selector: 'app-back',
    template: `<button (click)="goBack()">Back</button>`
})

export class BackButtonComponent {

  constructor(private location: Location) { }

  goBack() {
    this.location.back();
  }
}
