import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LogindialogComponent } from '../logindialog/logindialog.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { RegisterdialogComponent } from '../registerdialog/registerdialog.component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isThemeChange: boolean = false;
  theme: string = 'toggle_on';
  @Output() myevent = new EventEmitter<boolean>();
  constructor(public dialog: MatDialog) {}

  //   config: MatDialogConfig = {
  //     disableClose: false,
  //     hasBackdrop: true,
  //     backdropClass: '',
  //     width: '250px',
  //     height: '',
  //     position: {
  //         top: '50vh',
  //         left: '50vw'
  //     },
  //     panelClass:'makeItMiddle', //Class Name that can be defined in styles.css as follows:
  // };

  openLoginDialog() {
    this.dialog.open(LogindialogComponent, {
      //  panelClass:'login-dialog-container'
      width: '300px',
      data: {
        theme: this.isThemeChange,
      },
    });
  }

  openRegisterDialog() {
    this.dialog.open(RegisterdialogComponent, {
      width: '300px',
    });
  }

  themechange() {
    if (this.isThemeChange) {
      this.isThemeChange = false;
      this.myevent.emit(this.isThemeChange);
      this.theme = 'toggle_on';
      console.log(this.isThemeChange);
      return;
    }
    this.isThemeChange = true;
    console.log(this.isThemeChange);
    this.theme = 'toggle_off';
    this.myevent.emit(this.isThemeChange);
  }
  ngOnInit(): void {}
}
