import { Component } from '@angular/core';
import { UploadDialogComponent } from '../checkpage/components/upload-dialog/upload-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { PolicyDialogComponent } from '../checkpage/components/policy-dialog/policy-dialog.component';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  signin : boolean = true;
  signup : boolean = false;
  constructor(   
    private dialog: MatDialog,){

 }

  signIn(){

    this.signin = true;
    this.signup = false;

  }

  signUp(){

    this.signup = true;
    this.signin = false;

  }

  openUploadDialog(){

    let dialog = this.dialog.open(UploadDialogComponent, {
      width: '678',
      panelClass: 'custom-dialog',
      
    });
    dialog.afterClosed().subscribe((res) => {
      
    });

  }
  openPolicyDialog(){

    let dialog = this.dialog.open(PolicyDialogComponent, {
      width: '678',
      panelClass: 'custom-dialog',
      
    });
    dialog.afterClosed().subscribe((res) => {
      
    });

  }

}
