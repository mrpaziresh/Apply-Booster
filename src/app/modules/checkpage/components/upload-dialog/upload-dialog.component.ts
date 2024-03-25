import { Component } from '@angular/core';

@Component({
  selector: 'app-upload-dialog',
  templateUrl: './upload-dialog.component.html',
  styleUrls: ['./upload-dialog.component.scss']
})
export class UploadDialogComponent {

  constructor() { }
  openFileInput() {
    document.getElementById('fileInput')?.click();
  }

  handleFileInput(event: Event) {
    const target = event.target as HTMLInputElement;
    const files = target.files;
    if (files && files.length > 0) {
      const file = files[0];
      if (file.type === 'application/pdf') {
   
        console.log('Selected PDF file:', file.name);

      } else {
        
        console.log('Invalid file type. Please select a PDF file.');
      }
    }
  }
}
