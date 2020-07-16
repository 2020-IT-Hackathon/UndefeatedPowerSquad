import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ButtonDemoPage } from './button-demo.page';
export { ButtonDemoPage } from './button-demo.page';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule
    ],
    declarations: [ButtonDemoPage],
    exports: [ButtonDemoPage]
})
export class ButtonDemoModule { }