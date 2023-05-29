import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OnlyNumberDirective } from './only-number.directive';
@NgModule({
  imports: [
    CommonModule
  ],
  exports:[OnlyNumberDirective],
  declarations: [OnlyNumberDirective]
})
export class DirectiveModule { }
