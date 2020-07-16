import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ButtonDemoPage, ButtonDemoModule } from './button-demo.module';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ButtonDemoModule,
        RouterModule.forChild([{
            path: '',
            component: ButtonDemoPage
        }])
    ]
})
export class ButtonDemoRoutingModule { }