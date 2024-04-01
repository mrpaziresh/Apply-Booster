import nlp from 'compromise';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PolicyDialogComponent } from '../policy-dialog/policy-dialog.component';
import { PdfService } from '../../../../services/pdf.service';
import { HttpClient } from '@angular/common/http';

interface ParsedInfo {
  name: string;
  email: string;
  linkedin: string;
  github: string;
  summary: string;
  experiences: string;
  skills: string;
  tools: string;
  languages: string;
  projects: string;
  education: string;
}

@Component({
  selector: 'app-upload-dialog',
  templateUrl: './upload-dialog.component.html',
  styleUrls: ['./upload-dialog.component.scss']
})
export class UploadDialogComponent {

  isSuccess: boolean = false;
  isFailed: boolean = false;
  stepone: boolean = true;
  defaultstep: boolean = true;
  steptwo: boolean = true;
  stepthree: boolean = true;
  stepfour: boolean = true;
  fileSaved: boolean = false;
  extractedNames: string[] = [];
  filename: any;

  constructor(
    private dialog: MatDialog,
    private pdfService: PdfService,
    private http: HttpClient,
  ) { }

  openFileInput() {
    document.getElementById('fileInput')?.click();
  }

  handleFileInput(event: Event) {
    const target = event.target as HTMLInputElement;
    const files = target.files;
    if (files && files.length > 0) {
      const file = files[0];
      if (file.type === 'application/pdf') {
        this.uploadPdfFile(file);
      } else {
        console.log('Invalid file type. Please select a PDF file.');
      }
    }
  }

  uploadPdfFile(file: File) {
    const formData = new FormData();
    formData.append('file', file);
  
    this.http.post('http://localhost:8080/upload-pdf', formData, { responseType: 'text' }).subscribe(
      response => {
        const extractedText = response as string;
        this.extractedNames = this.extractNames(extractedText);
        console.log('Extracted names:', this.extractedNames);
        const formattedText = this.formatExtractedText(extractedText);
        console.log('Formatted text:', formattedText);

        // Extract email addresses from the text
        const emails = this.extractEmails(extractedText);
        console.log('Extracted emails:', emails);

        // Extract title when Bachelor's degree starts
        const educationTitle = this.extractEducationTitle(extractedText);
        console.log('Education Title:', educationTitle);
      },
      error => {
        console.error('Error uploading PDF:', error);
        // Handle the error
      }
    );
  }

  extractNames(text: string): string[] {
    const doc = nlp(text);
    const names = doc.people().out('array');
    return names;
  }

  extractEmails(text: string): string[] {
    // Regular expression pattern to match email addresses
    const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;
    return text.match(emailPattern) || [];
  }
  extractEducationTitle(text: string): { title: string; year: string } {
    // Keywords indicating the start of education details
    const educationKeywords = ['Bachelor', 'BS']; // Add more keywords as needed
  
    // Regular expression pattern to match year
    const yearPattern = /\b(19|20)\d{2}\b/g; // Matches years from 1900 to 2099
  
    // Search for the first occurrence of an education keyword
    for (const keyword of educationKeywords) {
      const startIndex = text.indexOf(keyword);
      if (startIndex !== -1) {
        // Extract the title from the keyword position
        const title = text.substring(startIndex);
  
        // Search for the year in the title
        const yearMatch = title.match(yearPattern);
        const year = yearMatch ? yearMatch[0] : '';
  
        // Calculate the result based on the extracted year
        const yearOfBachelor = parseInt(year, 10);
        const difference = 2024 - yearOfBachelor;
        const result = difference + 18;
  
        return { title, year: result.toString() };
      }
    }
  
    // If no keyword is found, return an empty string
    return { title: '', year: '' };
  }
  

  formatExtractedText(extractedText: string): string {
    // Split the extracted text into sections based on the "|" character
    const sections = extractedText.split('|');

    // Create an object to hold the parsed information
    const parsedInfo: ParsedInfo = {
      name: '',
      email: '',
      linkedin: '',
      github: '',
      summary: '',
      experiences: '',
      skills: '',
      tools: '',
      languages: '',
      projects: '',
      education: ''
    };

    // Iterate through the sections and parse each one
    sections.forEach(section => {
      // Split the section into key-value pairs based on the ":" character
      const [key, value] = section.split(':');

      // Update the corresponding property in the parsedInfo object
      if (key && value) {
        parsedInfo[key.trim().toLowerCase() as keyof ParsedInfo] = value.trim();
      }
    });

    // Format the parsed information into the desired format
    const formattedInfo = `
      Name: ${parsedInfo.name}
      Email: ${parsedInfo.email}
      LinkedIn: ${parsedInfo.linkedin}
      GitHub: ${parsedInfo.github}
      
      Summary: ${parsedInfo.summary}
      
      Experiences:
      ${parsedInfo.experiences}
      
      Skills: ${parsedInfo.skills}
      Tools: ${parsedInfo.tools}
      Languages: ${parsedInfo.languages}
      
      Projects: ${parsedInfo.projects}
      
      Education: ${parsedInfo.education}
    `;

    return formattedInfo;
  }

  toggleSuccess() {
    this.isSuccess = !this.isSuccess;
    this.isFailed = false;
  }

  toggleFailed() {
    this.isFailed = !this.isFailed;
    this.isSuccess = false;
  }

  openPolicyDialog() {
    let dialog = this.dialog.open(PolicyDialogComponent, {
      width: '678',
      panelClass: 'custom-dialog',
    });
    dialog.afterClosed().subscribe((res) => { });
  }
}






// import nlp from 'compromise'
// import { Component } from '@angular/core';
// import { MatDialog } from '@angular/material/dialog';
// import { PolicyDialogComponent } from '../policy-dialog/policy-dialog.component';
// import { PdfService } from '../../../../services/pdf.service';
// import { HttpClient } from '@angular/common/http';

// @Component({
//   selector: 'app-upload-dialog',
//   templateUrl: './upload-dialog.component.html',
//   styleUrls: ['./upload-dialog.component.scss']
// })
// export class UploadDialogComponent {

//   isSuccess: boolean = false;
//   isFailed: boolean = false;
//   stepone: boolean = true;
//   defaultstep: boolean = true;
//   steptwo: boolean = true;
//   stepthree: boolean = true;
//   stepfour: boolean = true;
//   fileSaved: boolean = false;
//   extractedNames: any;
//   filename: any;

//   constructor(
//     private dialog: MatDialog,
//     private pdfService: PdfService,
//     private http: HttpClient,
//   ) { }

//   openFileInput() {
//     document.getElementById('fileInput')?.click();
//   }

//   handleFileInput(event: Event) {
//     const target = event.target as HTMLInputElement;
//     const files = target.files;
//     if (files && files.length > 0) {
//       const file = files[0];
//       if (file.type === 'application/pdf') {
//         this.uploadPdfFile(file);
//       } else {
//         console.log('Invalid file type. Please select a PDF file.');
//       }
//     }
//   }

  
//   uploadPdfFile(file: File) {
//     const formData = new FormData();
//     formData.append('file', file);
  
//     this.http.post('http://localhost:8080/upload-pdf', formData, { responseType: 'text' }).subscribe(
//       response => {
//         console.log(response);
//         const extractedText = response as string;
//         const extractedNames = this.extractNames(extractedText);
//         console.log('Extracted names:', extractedNames);
        
//         // Extracted names and last names
//         const names = extractedNames.map(name => name.split(' ')[0]); // Extract first names
//         const lastNames = extractedNames.map(name => name.split(' ')[1]); // Extract last names
//         console.log('Names:', names);
//         console.log('Last Names:', lastNames);
//       },
//       error => {
//         console.error('Error uploading PDF:', error);
//         // Handle the error
//       }
//     );
//   }


  

//   extractNames(text: string): string[] {
//     const doc = nlp(text);
//     const names = doc.people().out('array');
//     return names;
//   }
  

//   toggleSuccess() {
//     this.isSuccess = !this.isSuccess;
//     this.isFailed = false;
//   }

//   toggleFailed() {
//     this.isFailed = !this.isFailed;
//     this.isSuccess = false;
//   }

//   openPolicyDialog() {
//     let dialog = this.dialog.open(PolicyDialogComponent, {
//       width: '678',
//       panelClass: 'custom-dialog',
//     });
//     dialog.afterClosed().subscribe((res) => { });
//   }
// }















// import { Component } from '@angular/core';
// import { MatDialog } from '@angular/material/dialog';
// import { PolicyDialogComponent } from '../policy-dialog/policy-dialog.component';
// import { HttpClient } from '@angular/common/http';
// import { PdfService } from '../../../../services/pdf.service';
// @Component({
//   selector: 'app-upload-dialog',
//   templateUrl: './upload-dialog.component.html',
//   styleUrls: ['./upload-dialog.component.scss']
// })
// export class UploadDialogComponent {

//   isSuccess: boolean = false;
//   isFailed: boolean = false;
//    stepone : boolean = true;
//    defaultstep:boolean = true;
//    steptwo : boolean = true;
//    stepthree : boolean = true;
//    stepfour : boolean = true;
//    filename: any;

//   constructor( 
//     private dialog : MatDialog,
//     private http: HttpClient,
//     private pdfService: PdfService

//     ) { 
    
//   }


//   openFileInput() {
//     document.getElementById('fileInput')?.click();
//   }

//   handleFileInput(event: Event) {
//     const target = event.target as HTMLInputElement;
//     const files = target.files;
//     if (files && files.length > 0) {
//       const file = files[0];
//       if (file.type === 'application/pdf') {
//         console.log('Selected PDF file:', file.name);
//         this.pdfService.uploadPdf(file).subscribe(
//           response => {
//             console.log('Response from server:', response);
//             // Handle response, e.g., display text in UI
//           },
//           error => {
//             console.error('Error uploading PDF:', error);
//             // Handle error
//           }
//         );
//       } else {
//         console.log('Invalid file type. Please select a PDF file.');
//       }
//     }
//   }

//   toggleSuccess() {
//     this.isSuccess = !this.isSuccess;
//     this.isFailed = false;
//   }

//   toggleFailed() {
//     this.isFailed = !this.isFailed;
//     this.isSuccess = false;
//   }

//   openPolicyDialog(){

//     let dialog = this.dialog.open(PolicyDialogComponent, {
//       width: '678',
//       panelClass: 'custom-dialog',
      
//     });
//     dialog.afterClosed().subscribe((res) => {
      
//     });

//   }
// }