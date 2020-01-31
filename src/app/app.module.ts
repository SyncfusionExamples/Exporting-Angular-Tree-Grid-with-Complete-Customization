import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {
  TreeGridModule,
  ToolbarService,
  PdfExportService,
  ExcelExportService
} from '@syncfusion/ej2-angular-treegrid';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, TreeGridModule],
  providers: [ToolbarService, PdfExportService, ExcelExportService],
  bootstrap: [AppComponent]
})
export class AppModule {}
