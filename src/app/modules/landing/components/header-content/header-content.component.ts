import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UploadDialogComponent } from '../../../checkpage/components/upload-dialog/upload-dialog.component';

@Component({
  selector: 'app-header-content',
  templateUrl: './header-content.component.html',
  styleUrl: './header-content.component.scss'
})
export class HeaderContentComponent {

  constructor(   
     private dialog: MatDialog,){

  }

  openUploadDialog(){

    let dialog = this.dialog.open(UploadDialogComponent, {
      width: '678',
      panelClass: 'custom-dialog',
      
    });
    dialog.afterClosed().subscribe((res) => {
      
    });

  }

}
