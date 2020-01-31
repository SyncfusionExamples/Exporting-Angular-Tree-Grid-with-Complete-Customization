import { Component, OnInit, ViewChild } from '@angular/core';
import { sampleData } from './datasource';
import {
  ToolbarItems,
  TreeGridComponent
} from '@syncfusion/ej2-angular-treegrid';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import {
  PdfExportProperties,
  ExcelExportProperties
} from '@syncfusion/ej2-grids';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public data: Object[];
  public toolbar: ToolbarItems[];

  @ViewChild('treegrid', { static: false })
  public treegrid: TreeGridComponent;

  ngOnInit(): void {
    this.data = sampleData;
    this.toolbar = ['PdfExport', 'ExcelExport'];
  }

  public toolbarClick(args: ClickEventArgs): void {
    switch (args.item.text) {
      case 'PDF Export':
        var exportProperties: PdfExportProperties = {
          fileName: 'Task Details.pdf',
          header: {
            fromTop: 0,
            height: 130,
            contents: [
              {
                type: 'Text',
                value: 'Task Details',
                position: { x: 0, y: 50 },
                style: { textBrushColor: '#000000', fontSize: 20 }
              }
            ]
          },
          footer: {
            fromBottom: 0,
            height: 130,
            contents: [
              {
                type: 'Text',
                value: 'End of the page',
                position: { x: 0, y: 50 },
                style: { textBrushColor: '#000000', fontSize: 20 }
              }
            ]
          },
          theme: {
            header: {
              fontColor: '#FF7F07',
              fontName: 'Calibri',
              fontSize: 12,
              bold: true
            },
            record: {
              fontColor: '#293DEF',
              fontName: 'Calibri',
              fontSize: 10,
              bold: true
            }
          }
        };
        this.treegrid.pdfExport(exportProperties);
        break;
      case 'Excel Export':
        var excelProperties: ExcelExportProperties = {
          fileName: 'Task Details.xlsx',
          header: {
            headerRows: 1,
            rows: [
              {
                cells: [
                  {
                    colSpan: 4,
                    value: 'Task Details',
                    style: {
                      fontColor: '#FF7F07',
                      fontSize: 20,
                      hAlign: 'Center',
                      bold: true
                    }
                  }
                ]
              }
            ]
          },
          footer: {
            footerRows: 1,
            rows: [
              {
                cells: [
                  {
                    colSpan: 4,
                    value: 'End of page',
                    style: {
                      fontColor: '#FF7F07',
                      fontSize: 20,
                      hAlign: 'Center',
                      bold: true
                    }
                  }
                ]
              }
            ]
          },
          theme: {
            header: {
              fontColor: '#FF7F07',
              fontName: 'Calibri',
              fontSize: 12,
              bold: true
            },
            record: {
              fontColor: '#293DEF',
              fontName: 'Calibri',
              fontSize: 10,
              bold: true
            }
          }
        };
        this.treegrid.excelExport(excelProperties);
        break;
    }
  }
}
