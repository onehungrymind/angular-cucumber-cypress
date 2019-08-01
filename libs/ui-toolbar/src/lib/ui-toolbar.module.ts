import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@demo/material';

import { ToolbarComponent } from './toolbar/toolbar.component';
@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [ToolbarComponent],
  exports: [ToolbarComponent]
})
export class UiToolbarModule {}
