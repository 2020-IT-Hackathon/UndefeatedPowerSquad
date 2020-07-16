import { Component, OnInit } from '@angular/core';
import { capacitor } from '../../capacitor/capacitor';

@Component({
  templateUrl: './button-demo.page.html',
  styleUrls: ['./button-demo.page.scss'],
})
export class ButtonDemoPage implements OnInit {
  capacitorSupported = true;

  constructor() {  }

  ngOnInit() {
    this.capacitorSupported = !!capacitor;
  }

}
