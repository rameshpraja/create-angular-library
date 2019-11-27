import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RpxAlertModule } from './components/alert/alert.module';

export { RpxAlertModule } from './components/alert/alert.module';

const RPX_MODULES = [
  RpxAlertModule
];

@NgModule({
  imports: [
    CommonModule,
    RPX_MODULES
  ],
  declarations: [],
  exports: [RPX_MODULES]
})
export class RpxComponentsUiModule { 
  static forRoot(): ModuleWithProviders { return {ngModule: RpxComponentsUiModule}; }
}
