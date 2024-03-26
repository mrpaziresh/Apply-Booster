import { Component } from '@angular/core';

@Component({
  selector: 'app-upload-dialog',
  templateUrl: './upload-dialog.component.html',
  styleUrls: ['./upload-dialog.component.scss']
})
export class UploadDialogComponent {

  isSuccess: boolean = false;
  isFailed: boolean = false;
   stepone : boolean = true;
   defaultstep:boolean = true;
   steptwo : boolean = true;
   stepthree : boolean = true;
   stepfour : boolean = true;
   filename: any;

  constructor() { 
    
  }


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
        this.defaultstep = false;
        this.stepone = false;
        this.filename = file.name;


        setTimeout(() => {

          this.defaultstep = false;
          this.isSuccess = !this.isSuccess;
    
        }, 3000);
    
        setTimeout(() => {
          
          this.stepone = true;
          this.steptwo = !this.steptwo;
          this.isSuccess = !this.isSuccess;
    
        }, 4000);
        setTimeout(() => {
          
          
          this.isSuccess = !this.isSuccess;
    
        }, 6000);
    
        setTimeout(() => {
          
          this.steptwo = !this.steptwo;
          this.stepthree = false;
          this.isSuccess = !this.isSuccess;
    
        }, 7000);
        setTimeout(() => {
          this.stepthree = false;
          this.isSuccess = !this.isSuccess;
          
        }, 9000);
    
        setTimeout(() => {
          
          this.stepthree = !this.stepthree;
          this.stepfour = false;
          this.isSuccess = !this.isSuccess;
    
        }, 10000);
    
        setTimeout(() => {
          this.stepfour = false;
          this.isSuccess = !this.isSuccess;
          
        }, 12000);
        

      } else {
        
        console.log('Invalid file type. Please select a PDF file.');
      }
    }
  }

  toggleSuccess() {
    this.isSuccess = !this.isSuccess;
    this.isFailed = false;
  }

  toggleFailed() {
    this.isFailed = !this.isFailed;
    this.isSuccess = false;
  }
}