import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterAssistancePage } from './register-assistance';

@NgModule({
  declarations: [
    RegisterAssistancePage,
  ],
  imports: [
    IonicPageModule.forChild(RegisterAssistancePage),
  ],
})
export class RegisterAssistancePageModule {}
