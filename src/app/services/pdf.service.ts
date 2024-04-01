import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PdfService {

  constructor(private http: HttpClient) { }

  uploadPdf(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);

    return this.http.post<any>('http://localhost:8080/upload-pdf', formData);
  }
  getHelloWorld() {
    return this.http.get<any>('http://localhost:8080/upload-pdf');
  }
}
