import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import {FormGroup,FormControl,Validators,FormBuilder} from '@angular/forms';
import { throwToolbarMixedModesError } from '@angular/material/toolbar';
import { AuthServiceService } from '../../service/login/loginservice.service';
//import { Router } from '@angular/router';
@Component({
  selector: 'app-logindialog',
  templateUrl: './logindialog.component.html',
  styleUrls: ['./logindialog.component.scss'],
})
export class LogindialogComponent implements OnInit {
  
  myform: FormGroup;

  isThemeChange: boolean = false;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private authService: AuthServiceService,
private fb: FormBuilder
  ) {
    
    this.isThemeChange = this.data.theme;
    // alert(this.isThemeChange);
    this.myform = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      email: ['', [Validators.required]],
    });
   
  }

  ngOnInit(): void {
   
  }

  
  loginProcess() {
    // console.log(this.formGroup);
 

    let user1 = {
      username: this.myform.value.username,
      password: this.myform.value.password,
      email: this.myform.value.email,
    };
    
    if (this.myform.valid) {
     // console.log("test ...");
      
      let res = this.authService.login(user1).subscribe(
          data => {
            //console.log("daskjdg");
         
            console.log(data);
          },
          error => {
               alert("Please enter valid credentials.");
          });
  }
  }

}
